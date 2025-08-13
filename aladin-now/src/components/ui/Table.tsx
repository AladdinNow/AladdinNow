import React from 'react'
import { cn } from '@/lib/utils'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

/**
 * Table component for displaying tabular data
 * Supports sorting, pagination, and responsive design
 */
interface Column<T> {
  key: keyof T | string
  header: string
  render?: (value: any, item: T) => React.ReactNode
  sortable?: boolean
  className?: string
}

interface TableProps<T> {
  data: T[]
  columns: Column<T>[]
  sortColumn?: keyof T | string
  sortDirection?: 'asc' | 'desc'
  onSort?: (column: keyof T | string) => void
  className?: string
  emptyMessage?: string
  loading?: boolean
}

export function Table<T extends Record<string, any>>({
  data,
  columns,
  sortColumn,
  sortDirection,
  onSort,
  className,
  emptyMessage = 'No data available',
  loading = false
}: TableProps<T>) {
  const handleSort = (column: keyof T | string) => {
    if (onSort && columns.find(col => col.key === column)?.sortable) {
      onSort(column)
    }
  }

  const renderSortIcon = (columnKey: keyof T | string) => {
    if (sortColumn !== columnKey) {
      return <ChevronUpIcon className="h-4 w-4 text-gray-400" />
    }
    
    return sortDirection === 'asc' ? (
      <ChevronUpIcon className="h-4 w-4 text-blue-600" />
    ) : (
      <ChevronDownIcon className="h-4 w-4 text-blue-600" />
    )
  }

  if (loading) {
    return (
      <div className={cn('animate-pulse', className)}>
        <div className="bg-gray-200 h-8 rounded-t-lg mb-2"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-gray-200 h-12 rounded mb-2"></div>
        ))}
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className={cn('text-center py-8 text-gray-500', className)}>
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={cn(
                  'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
                  column.sortable && 'cursor-pointer hover:bg-gray-100',
                  column.className
                )}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center space-x-1">
                  <span>{column.header}</span>
                  {column.sortable && (
                    <span className="ml-1">
                      {renderSortIcon(column.key)}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={cn(
                    'px-6 py-4 whitespace-nowrap text-sm text-gray-900',
                    column.className
                  )}
                >
                  {column.render
                    ? column.render(item[column.key], item)
                    : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
