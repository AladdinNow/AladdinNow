'use client'

import React, { useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

/**
 * ProductCategories component for the homepage
 * Features a horizontal scrollable row of product categories
 */
export const ProductCategories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const categories = [
    'Natural Stone',
    'Textiles',
    'Marble',
    'Tiles',
    'Oil Products',
    'Beverages',
    'Construction',
    'Manufacturing',
    'Electronics',
    'Chemicals'
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-600" />
          </button>

          {/* Scrollable Categories */}
          <div 
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 flex-shrink-0"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-600 font-medium text-center px-2">
                    {category}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700 text-center max-w-20">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
