import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Badge } from '@/components/ui/Badge'
import { 
  FunnelIcon,
  XMarkIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

/**
 * SearchFilters component for filtering products and suppliers
 * Supports multiple filter types and search functionality
 */
interface FilterOption {
  value: string
  label: string
  count?: number
}

interface FilterGroup {
  id: string
  label: string
  type: 'select' | 'multiselect' | 'range' | 'checkbox'
  options?: FilterOption[]
  min?: number
  max?: number
  step?: number
  placeholder?: string
}

type FilterValue = string | number | string[] | { min?: number; max?: number } | undefined

interface SearchFiltersProps {
  filters: FilterGroup[]
  searchQuery?: string
  activeFilters: Record<string, FilterValue>
  onSearchChange?: (query: string) => void
  onFilterChange?: (filterId: string, value: FilterValue) => void
  onClearFilters?: () => void
  onApplyFilters?: () => void
  className?: string
  showSearch?: boolean
  showClearAll?: boolean
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  filters,
  searchQuery = '',
  activeFilters,
  onSearchChange,
  onFilterChange,
  onClearFilters,
  onApplyFilters,
  className,
  showSearch = true,
  showClearAll = true
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [localFilters, setLocalFilters] = useState(activeFilters)

  const handleFilterChange = (filterId: string, value: FilterValue) => {
    setLocalFilters(prev => ({
      ...prev,
      [filterId]: value
    }))
  }

  const handleApplyFilters = () => {
    onApplyFilters?.()
    setIsExpanded(false)
  }

  const handleClearFilters = () => {
    setLocalFilters({})
    onClearFilters?.()
  }

  const getActiveFilterCount = () => {
    return Object.keys(activeFilters).filter(key => {
      const value = activeFilters[key]
      if (Array.isArray(value)) return value.length > 0
      if (typeof value === 'object') return Object.keys(value).length > 0
      return value !== undefined && value !== ''
    }).length
  }

  const renderFilterInput = (filter: FilterGroup) => {
    switch (filter.type) {
      case 'select':
        return (
          <Select
            label={filter.label}
            value={(localFilters[filter.id] as string) || ''}
            onChange={(e) => handleFilterChange(filter.id, e.target.value)}
            options={filter.options || []}
            placeholder={filter.placeholder}
          />
        )
      
      case 'multiselect':
        const selectedValues = (localFilters[filter.id] as string[]) || []
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {filter.label}
            </label>
            <div className="space-y-2">
              {filter.options?.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleFilterChange(filter.id, [...selectedValues, option.value])
                      } else {
                        handleFilterChange(filter.id, selectedValues.filter((v: string) => v !== option.value))
                      }
                    }}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {option.label}
                    {option.count && (
                      <span className="text-gray-500 ml-1">({option.count})</span>
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )
      
      case 'range':
        const rangeValue = (localFilters[filter.id] as { min?: number; max?: number }) || { min: filter.min, max: filter.max }
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {filter.label}
            </label>
            <div className="flex space-x-2">
              <Input
                type="number"
                placeholder="Min"
                value={rangeValue.min || ''}
                onChange={(e) => handleFilterChange(filter.id, { ...rangeValue, min: Number(e.target.value) })}
                min={filter.min}
                max={filter.max}
                step={filter.step}
                className="flex-1"
              />
              <Input
                type="number"
                placeholder="Max"
                value={rangeValue.max || ''}
                onChange={(e) => handleFilterChange(filter.id, { ...rangeValue, max: Number(e.target.value) })}
                min={filter.min}
                max={filter.max}
                step={filter.step}
                className="flex-1"
              />
            </div>
          </div>
        )
      
      case 'checkbox':
        return (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {filter.label}
            </label>
            <div className="space-y-2">
              {filter.options?.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(localFilters[filter.id] as string) === option.value}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleFilterChange(filter.id, option.value)
                      } else {
                        handleFilterChange(filter.id, undefined)
                      }
                    }}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {option.label}
                    {option.count && (
                      <span className="text-gray-500 ml-1">({option.count})</span>
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  const renderActiveFilterTags = () => {
    const tags: Array<{ id: string; label: string; value: string | number; filterId: string }> = []
    
    Object.entries(activeFilters).forEach(([filterId, value]) => {
      if (!value || (Array.isArray(value) && value.length === 0)) return
      
      const filter = filters.find(f => f.id === filterId)
      if (!filter) return
      
      if (Array.isArray(value)) {
        value.forEach(v => {
          const option = filter.options?.find(opt => opt.value === v)
          if (option) {
            tags.push({
              id: `${filterId}-${v}`,
              label: `${filter.label}: ${option.label}`,
              filterId,
              value: v
            })
          }
        })
      } else if (typeof value === 'object' && value !== null && 'min' in value && 'max' in value) {
        tags.push({
          id: filterId,
          label: `${filter.label}: ${value.min} - ${value.max}`,
          filterId,
          value: `${value.min}-${value.max}`
        })
      } else if (typeof value === 'string' || typeof value === 'number') {
        const option = filter.options?.find(opt => opt.value === value)
        if (option) {
          tags.push({
            id: filterId,
            label: `${filter.label}: ${option.label}`,
            filterId,
            value: value
          })
        }
      }
    })
    
    return tags
  }

  return (
    <div className={cn('bg-white border border-gray-200 rounded-lg', className)}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-gray-500" />
            <h3 className="text-lg font-medium text-gray-900">Filters</h3>
            {getActiveFilterCount() > 0 && (
              <Badge variant="primary" size="sm">
                {getActiveFilterCount()}
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Hide' : 'Show'} Filters
          </Button>
        </div>
        
        {/* Search Bar */}
        {showSearch && (
          <div className="mt-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Active Filter Tags */}
      {getActiveFilterCount() > 0 && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Active Filters:</span>
            {showClearAll && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
              >
                Clear All
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {renderActiveFilterTags().map((tag) => (
              <Badge
                key={tag.id}
                variant="outline"
                size="sm"
                className="flex items-center space-x-1"
              >
                <span>{tag.label}</span>
                <button
                  onClick={() => {
                    const filterValue = activeFilters[tag.filterId]
                    if (Array.isArray(filterValue)) {
                      const newValue = filterValue.filter(v => v !== tag.value)
                      onFilterChange?.(tag.filterId, newValue.length > 0 ? newValue : undefined)
                    } else {
                      onFilterChange?.(tag.filterId, undefined)
                    }
                  }}
                  className="ml-1 hover:text-red-500"
                >
                  <XMarkIcon className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
      
      {/* Filter Options */}
      {isExpanded && (
        <div className="p-4 space-y-6">
          {filters.map((filter) => (
            <div key={filter.id} className="border-b border-gray-100 pb-4 last:border-b-0">
              {renderFilterInput(filter)}
            </div>
          ))}
          
          {/* Action Buttons */}
          <div className="flex space-x-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={handleApplyFilters}
              className="flex-1"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchFilters
