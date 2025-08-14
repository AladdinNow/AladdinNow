import React from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  Squares2X2Icon,
  Bars3Icon
} from '@heroicons/react/24/outline'

/**
 * Products page component
 * Displays a searchable and filterable grid of products
 */
export default function ProductsPage() {
  // Mock product data
  const products = [
    {
      id: '1',
      name: 'Premium Cotton Fabric',
      description: 'High-quality cotton fabric suitable for premium garments',
      price: 450,
      currency: 'INR',
      moq: 100,
      unit: 'meters',
      image: '/api/placeholder/300/200',
      industry: 'TEXTILE',
      supplier: 'TextileCorp India',
      rating: 4.5,
      reviews: 128
    },
    {
      id: '2',
      name: 'Ceramic Floor Tiles',
      description: 'Durable ceramic tiles for commercial and residential use',
      price: 85,
      currency: 'INR',
      moq: 500,
      unit: 'sq ft',
      image: '/api/placeholder/300/200',
      industry: 'TILES_MARBLE',
      supplier: 'TileMaster Ltd',
      rating: 4.3,
      reviews: 95
    },
    {
      id: '3',
      name: 'Refined Sunflower Oil',
      description: 'Pure and healthy cooking oil with FSSAI certification',
      price: 120,
      currency: 'INR',
      moq: 1000,
      unit: 'liters',
      image: '/api/placeholder/300/200',
      industry: 'OIL_FILLING',
      supplier: 'OilPure Industries',
      rating: 4.7,
      reviews: 156
    },
    {
      id: '4',
      name: 'Energy Drink Concentrate',
      description: 'High-quality concentrate for energy drink manufacturing',
      price: 250,
      currency: 'INR',
      moq: 500,
      unit: 'liters',
      image: '/api/placeholder/300/200',
      industry: 'BEVERAGES_FILLING',
      supplier: 'BevTech Solutions',
      rating: 4.4,
      reviews: 87
    }
  ]
  
  // Industry options for filter
  const industryOptions = [
    { value: '', label: 'All Industries' },
    { value: 'TEXTILE', label: 'Textile Industry' },
    { value: 'TILES_MARBLE', label: 'Tiles & Marble' },
    { value: 'OIL_FILLING', label: 'Oil Filling' },
    { value: 'BEVERAGES_FILLING', label: 'Beverages Filling' }
  ]
  
  // Sort options
  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ]
  
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Products
            </h1>
            <p className="text-gray-600">
              Discover quality products from verified suppliers across all industries
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search products, suppliers, or categories..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              {/* Industry Filter */}
              <div>
                <Select
                  options={industryOptions}
                  placeholder="Select Industry"
                  fullWidth
                />
              </div>
              
              {/* Sort */}
              <div>
                <Select
                  options={sortOptions}
                  placeholder="Sort by"
                  fullWidth
                />
              </div>
            </div>
            
            {/* Advanced Filters Toggle */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Button
                variant="ghost"
                leftIcon={<FunnelIcon className="h-4 w-4" />}
                size="sm"
              >
                Advanced Filters
              </Button>
            </div>
          </div>
          
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">{products.length}</span> products
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <Button variant="ghost" size="sm" className="p-2">
                <Squares2X2Icon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Bars3Icon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} clickable className="group">
                {/* Product Image */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                <CardBody>
                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Price and MOQ */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-blue-600">
                        ₹{product.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        MOQ: {product.moq} {product.unit}
                      </div>
                    </div>
                    
                    {/* Supplier and Rating */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{product.supplier}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-600">{product.rating}</span>
                        <span className="text-gray-400">({product.reviews})</span>
                      </div>
                    </div>
                    
                    {/* Industry Badge */}
                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {product.industry.replace('_', ' ')}
                    </div>
                  </div>
                </CardBody>
                
                {/* Action Buttons */}
                <div className="px-6 py-4 border-t border-gray-200 space-y-2">
                  <Button variant="primary" fullWidth size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" fullWidth size="sm">
                    Contact Supplier
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
