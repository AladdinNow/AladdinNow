import React from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  MapPinIcon,
  StarIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

/**
 * Suppliers page component
 * Displays a searchable list of verified suppliers and manufacturers
 */
export default function SuppliersPage() {
  // Mock supplier data
  const suppliers = [
    {
      id: '1',
      name: 'TextileCorp India',
      description: 'Leading manufacturer of premium cotton and synthetic fabrics with 25+ years of experience',
      industry: 'TEXTILE',
      businessType: 'MANUFACTURER',
      location: 'Mumbai, Maharashtra',
      rating: 4.8,
      reviews: 342,
      verified: true,
      products: 156,
      established: 1998,
      logo: '/api/placeholder/80/80',
      coverImage: '/api/placeholder/400/200',
      certifications: ['ISO 9001', 'OEKO-TEX', 'GOTS'],
      specialties: ['Cotton Fabrics', 'Synthetic Blends', 'Premium Garments']
    },
    {
      id: '2',
      name: 'TileMaster Ltd',
      description: 'Premium ceramic and porcelain tile manufacturer serving the construction industry',
      industry: 'TILES_MARBLE',
      businessType: 'MANUFACTURER',
      location: 'Ahmedabad, Gujarat',
      rating: 4.6,
      reviews: 189,
      verified: true,
      products: 89,
      established: 2005,
      logo: '/api/placeholder/80/80',
      coverImage: '/api/placeholder/400/200',
      certifications: ['ISO 14001', 'BIS', 'Green Building'],
      specialties: ['Floor Tiles', 'Wall Tiles', 'Outdoor Tiles']
    },
    {
      id: '3',
      name: 'OilPure Industries',
      description: 'FSSAI certified edible oil manufacturer with state-of-the-art processing facilities',
      industry: 'OIL_FILLING',
      businessType: 'MANUFACTURER',
      location: 'Indore, Madhya Pradesh',
      rating: 4.7,
      reviews: 267,
      verified: true,
      products: 45,
      established: 2010,
      logo: '/api/placeholder/80/80',
      coverImage: '/api/placeholder/400/200',
      certifications: ['FSSAI', 'ISO 22000', 'HACCP'],
      specialties: ['Sunflower Oil', 'Mustard Oil', 'Blended Oils']
    },
    {
      id: '4',
      name: 'BevTech Solutions',
      description: 'Contract manufacturing and private labeling services for beverage industry',
      industry: 'BEVERAGES_FILLING',
      businessType: 'SERVICE_PROVIDER',
      location: 'Pune, Maharashtra',
      rating: 4.4,
      reviews: 134,
      verified: true,
      products: 23,
      established: 2015,
      logo: '/api/placeholder/80/80',
      coverImage: '/api/placeholder/400/200',
      certifications: ['FSSAI', 'ISO 9001', 'GMP'],
      specialties: ['Energy Drinks', 'Juices', 'Soft Drinks']
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
  
  // Business type options
  const businessTypeOptions = [
    { value: '', label: 'All Types' },
    { value: 'MANUFACTURER', label: 'Manufacturer' },
    { value: 'SUPPLIER', label: 'Supplier' },
    { value: 'WHOLESALER', label: 'Wholesaler' },
    { value: 'SERVICE_PROVIDER', label: 'Service Provider' }
  ]
  
  // Location options
  const locationOptions = [
    { value: '', label: 'All Locations' },
    { value: 'Mumbai', label: 'Mumbai, Maharashtra' },
    { value: 'Ahmedabad', label: 'Ahmedabad, Gujarat' },
    { value: 'Indore', label: 'Indore, Madhya Pradesh' },
    { value: 'Pune', label: 'Pune, Maharashtra' }
  ]
  
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Verified Suppliers
            </h1>
            <p className="text-gray-600">
              Connect with trusted manufacturers and suppliers across all industries
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search suppliers, companies, or products..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              {/* Industry Filter */}
              <div>
                <Select
                  options={industryOptions}
                  placeholder="Industry"
                  fullWidth
                />
              </div>
              
              {/* Business Type Filter */}
              <div>
                <Select
                  options={businessTypeOptions}
                  placeholder="Business Type"
                  fullWidth
                />
              </div>
              
              {/* Location Filter */}
              <div>
                <Select
                  options={locationOptions}
                  placeholder="Location"
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
              Showing <span className="font-medium">{suppliers.length}</span> verified suppliers
            </div>
            
            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="rating">Highest Rated</option>
                <option value="verified">Verified First</option>
                <option value="established">Established Date</option>
                <option value="products">Most Products</option>
              </select>
            </div>
          </div>
          
          {/* Suppliers Grid */}
          <div className="space-y-6">
            {suppliers.map((supplier) => (
              <Card key={supplier.id} className="overflow-hidden">
                {/* Cover Image and Logo */}
                <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800">
                  <img
                    src={supplier.coverImage}
                    alt={supplier.name}
                    className="w-full h-full object-cover opacity-20"
                  />
                  
                  {/* Logo and Basic Info */}
                  <div className="absolute inset-0 flex items-center p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-white rounded-lg p-2 shadow-lg">
                        <img
                          src={supplier.logo}
                          alt={supplier.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      
                      <div className="text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <h2 className="text-2xl font-bold">{supplier.name}</h2>
                          {supplier.verified && (
                            <CheckBadgeIcon className="h-6 w-6 text-yellow-400" />
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <BuildingOfficeIcon className="h-4 w-4" />
                            <span>{supplier.businessType}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPinIcon className="h-4 w-4" />
                            <span>{supplier.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <StarIcon className="h-4 w-4 text-yellow-400" />
                            <span>{supplier.rating} ({supplier.reviews} reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardBody>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Company Description */}
                    <div className="lg:col-span-2">
                      <p className="text-gray-700 mb-4">
                        {supplier.description}
                      </p>
                      
                      {/* Specialties */}
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {supplier.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Certifications */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Certifications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {supplier.certifications.map((cert, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Company Stats */}
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">Company Stats</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Established:</span>
                            <span className="font-medium">{supplier.established}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Products:</span>
                            <span className="font-medium">{supplier.products}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Industry:</span>
                            <span className="font-medium">{supplier.industry.replace('_', ' ')}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <Button variant="primary" fullWidth>
                          View Profile
                        </Button>
                        <Button variant="outline" fullWidth>
                          Contact Supplier
                        </Button>
                        <Button variant="ghost" fullWidth>
                          View Products
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Suppliers
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
