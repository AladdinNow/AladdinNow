'use client'

import React from 'react'
import { ProductCard } from '@/components/business/ProductCard'

/**
 * FeatureProducts component for the homepage
 * Displays a grid of featured product cards
 */
export const FeatureProducts: React.FC = () => {
  // Sample featured products data
  const featuredProducts = [
    {
      id: '1',
      name: 'Black Stone',
      description: 'High-quality black natural stone for construction and decoration',
      price: 2500,
      originalPrice: 3000,
      currency: '₹',
      image: 'https://via.placeholder.com/300x300/666666/FFFFFF?text=Black+Stone',
      rating: 4.5,
      reviewCount: 128,
      category: 'Natural Stone',
      supplier: {
        name: 'StoneCraft India',
        verified: true
      },
      inStock: true,
      minOrderQuantity: 100,
      unit: 'sq ft'
    },
    {
      id: '2',
      name: 'Marble Tiles',
      description: 'Premium white marble tiles for flooring and wall cladding',
      price: 1800,
      originalPrice: 2200,
      currency: '₹',
      image: 'https://via.placeholder.com/300x300/CCCCCC/333333?text=Marble+Tiles',
      rating: 4.8,
      reviewCount: 95,
      category: 'Marble',
      supplier: {
        name: 'MarbleWorld',
        verified: true
      },
      inStock: true,
      minOrderQuantity: 50,
      unit: 'sq ft'
    },
    {
      id: '3',
      name: 'Cotton Fabric',
      description: 'Soft cotton fabric suitable for clothing and home textiles',
      price: 120,
      originalPrice: 150,
      currency: '₹',
      image: 'https://via.placeholder.com/300x300/F5F5DC/333333?text=Cotton+Fabric',
      rating: 4.3,
      reviewCount: 67,
      category: 'Textiles',
      supplier: {
        name: 'TextileHub',
        verified: true
      },
      inStock: true,
      minOrderQuantity: 1000,
      unit: 'meters'
    },
    {
      id: '4',
      name: 'Engine Oil',
      description: 'High-performance engine oil for automotive applications',
      price: 450,
      originalPrice: 500,
      currency: '₹',
      image: 'https://via.placeholder.com/300x300/2F4F4F/FFFFFF?text=Engine+Oil',
      rating: 4.6,
      reviewCount: 89,
      category: 'Oil Products',
      supplier: {
        name: 'OilCorp',
        verified: true
      },
      inStock: true,
      minOrderQuantity: 100,
      unit: 'liters'
    }
  ]

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Feature Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              variant="default"
              showActions={true}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureProducts
