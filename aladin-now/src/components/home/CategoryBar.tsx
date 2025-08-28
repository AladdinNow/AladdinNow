'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  Bars3Icon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

/**
 * CategoryBar component for the homepage
 * Features navigation buttons for different sections
 */
export const CategoryBar: React.FC = () => {
  const categories = [
    {
      name: 'Categories',
      href: '/categories',
      icon: Bars3Icon,
      variant: 'outline' as const
    },
    {
      name: 'Discover',
      href: '/discover',
      icon: MagnifyingGlassIcon,
      variant: 'outline' as const
    },
    {
      name: 'RFQ',
      href: '/rfq',
      icon: DocumentTextIcon,
      variant: 'primary' as const
    },
    {
      name: 'Trade Shield',
      href: '/trade-shield',
      icon: ShieldCheckIcon,
      variant: 'primary' as const
    }
  ]

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-4 py-4">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Button 
                variant={category.variant} 
                size="sm"
                className="flex items-center space-x-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryBar
