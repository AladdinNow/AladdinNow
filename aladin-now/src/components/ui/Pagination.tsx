'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

/**
 * Pagination component for navigating through large datasets
 * Supports different sizes and shows page numbers with navigation
 */
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  size?: 'sm' | 'md' | 'lg'
  showPageNumbers?: boolean
  showFirstLast?: boolean
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = 'md',
  showPageNumbers = true,
  showFirstLast = true,
  className
}) => {
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  }

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page)
    }
  }

  if (totalPages <= 1) return null

  return (
    <div className={cn('flex items-center justify-center space-x-1', className)}>
      {/* First page button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className={cn(
            'flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200',
            sizeClasses[size]
          )}
          aria-label="Go to first page"
        >
          <ChevronLeftIcon className={cn(iconSizes[size], 'mr-1')} />
          <ChevronLeftIcon className={iconSizes[size]} />
        </button>
      )}
      
      {/* Previous page button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          'flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200',
          sizeClasses[size]
        )}
        aria-label="Go to previous page"
      >
        <ChevronLeftIcon className={iconSizes[size]} />
      </button>
      
      {/* Page numbers */}
      {showPageNumbers && (
        <div className="flex items-center space-x-1">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
              disabled={page === '...'}
              className={cn(
                'flex items-center justify-center rounded-md border transition-colors duration-200',
                sizeClasses[size],
                page === currentPage
                  ? 'border-blue-500 bg-blue-500 text-white'
                  : page === '...'
                  ? 'border-gray-300 bg-white text-gray-400 cursor-default'
                  : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              )}
            >
              {page}
            </button>
          ))}
        </div>
      )}
      
      {/* Next page button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          'flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200',
          sizeClasses[size]
        )}
        aria-label="Go to next page"
      >
        <ChevronRightIcon className={iconSizes[size]} />
      </button>
      
      {/* Last page button */}
      {showFirstLast && (
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={cn(
            'flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200',
            sizeClasses[size]
          )}
          aria-label="Go to last page"
        >
          <ChevronRightIcon className={cn(iconSizes[size], 'ml-1')} />
          <ChevronRightIcon className={iconSizes[size]} />
        </button>
      )}
    </div>
  )
}

export default Pagination
