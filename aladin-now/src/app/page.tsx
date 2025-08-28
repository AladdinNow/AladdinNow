import React from 'react'
import Hero from '@/components/home/Hero'
import CategoryBar from '@/components/home/CategoryBar'
import ProductCategories from '@/components/home/ProductCategories'
import FeatureProducts from '@/components/home/FeatureProducts'

/**
 * HomePage component - Main landing page for AladdinNow
 * Composed of modular components for better maintainability
 * Updated to match the Figma design
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryBar />
      <ProductCategories />
      <Hero />
      <FeatureProducts />
    </div>
  )
}
