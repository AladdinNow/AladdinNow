import React, { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardHeader, CardBody, CardFooter } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { 
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ClockIcon,
  UserIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

/**
 * RFQ (Request for Quote) page component
 * Allows users to submit RFQs and view existing ones
 */
export default function RFQPage() {
  const [activeTab, setActiveTab] = useState<'submit' | 'browse'>('submit')
  
  // Mock RFQ data
  const rfqs = [
    {
      id: '1',
      title: 'Premium Cotton Fabric for Garment Manufacturing',
      description: 'Looking for high-quality cotton fabric with GSM 180-200, suitable for premium shirt manufacturing. Need samples before bulk order.',
      industry: 'TEXTILE',
      category: 'Fabrics',
      quantity: 5000,
      unit: 'meters',
      budget: 250000,
      currency: 'INR',
      deadline: '2024-02-15',
      status: 'OPEN',
      buyer: 'Fashion Forward Ltd',
      location: 'Mumbai, Maharashtra',
      responses: 8,
      createdAt: '2024-01-20'
    },
    {
      id: '2',
      title: 'Ceramic Floor Tiles for Commercial Project',
      description: 'Require ceramic floor tiles for a 50,000 sq ft commercial building. Need samples and installation quotes.',
      industry: 'TILES_MARBLE',
      category: 'Floor Tiles',
      quantity: 50000,
      unit: 'sq ft',
      budget: 4500000,
      currency: 'INR',
      deadline: '2024-02-28',
      status: 'IN_PROGRESS',
      buyer: 'BuildTech Construction',
      location: 'Delhi, NCR',
      responses: 12,
      createdAt: '2024-01-18'
    },
    {
      id: '3',
      title: 'Refined Cooking Oil for Restaurant Chain',
      description: 'Seeking FSSAI certified refined cooking oil for our restaurant chain. Need regular supply with quality assurance.',
      industry: 'OIL_FILLING',
      category: 'Cooking Oils',
      quantity: 2000,
      unit: 'liters',
      budget: 240000,
      currency: 'INR',
      deadline: '2024-02-10',
      status: 'OPEN',
      buyer: 'Taste of India Restaurants',
      location: 'Bangalore, Karnataka',
      responses: 5,
      createdAt: '2024-01-22'
    }
  ]
  
  // Industry options
  const industryOptions = [
    { value: 'TEXTILE', label: 'Textile Industry' },
    { value: 'TILES_MARBLE', label: 'Tiles & Marble' },
    { value: 'OIL_FILLING', label: 'Oil Filling' },
    { value: 'BEVERAGES_FILLING', label: 'Beverages Filling' }
  ]
  
  // Category options (dynamic based on industry)
  const categoryOptions = [
    { value: 'fabrics', label: 'Fabrics' },
    { value: 'yarns', label: 'Yarns' },
    { value: 'garments', label: 'Garments' },
    { value: 'floor_tiles', label: 'Floor Tiles' },
    { value: 'wall_tiles', label: 'Wall Tiles' },
    { value: 'cooking_oils', label: 'Cooking Oils' },
    { value: 'industrial_oils', label: 'Industrial Oils' },
    { value: 'soft_drinks', label: 'Soft Drinks' },
    { value: 'juices', label: 'Juices' }
  ]
  
  // Status options
  const statusOptions = [
    { value: 'OPEN', label: 'Open' },
    { value: 'IN_PROGRESS', label: 'In Progress' },
    { value: 'CLOSED', label: 'Closed' },
    { value: 'AWARDED', label: 'Awarded' }
  ]
  
  // RFQ Form State
  const [rfqForm, setRfqForm] = useState({
    title: '',
    description: '',
    industry: '',
    category: '',
    quantity: '',
    unit: '',
    budget: '',
    deadline: '',
    additionalRequirements: ''
  })
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setRfqForm(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle RFQ submission
  const handleSubmitRFQ = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting RFQ:', rfqForm)
    // TODO: Implement RFQ submission logic
  }
  
  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN':
        return 'bg-green-100 text-green-800'
      case 'IN_PROGRESS':
        return 'bg-blue-100 text-blue-800'
      case 'CLOSED':
        return 'bg-gray-100 text-gray-800'
      case 'AWARDED':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }
  
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Request for Quote (RFQ)
            </h1>
            <p className="text-gray-600">
              Submit your requirements and get competitive quotes from verified suppliers
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Tab Navigation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('submit')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'submit'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Submit RFQ
                </button>
                <button
                  onClick={() => setActiveTab('browse')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'browse'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Browse RFQs
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'submit' ? (
                /* Submit RFQ Form */
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Submit Your RFQ
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below to submit your request for quote. Be as specific as possible to get accurate quotes.
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmitRFQ} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="RFQ Title"
                        name="title"
                        value={rfqForm.title}
                        onChange={handleInputChange}
                        placeholder="Brief title describing your requirement"
                        required
                        fullWidth
                      />
                      
                      <Select
                        label="Industry"
                        name="industry"
                        value={rfqForm.industry}
                        onChange={handleInputChange}
                        options={industryOptions}
                        placeholder="Select industry"
                        required
                        fullWidth
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select
                        label="Category"
                        name="category"
                        value={rfqForm.category}
                        onChange={handleInputChange}
                        options={categoryOptions}
                        placeholder="Select category"
                        required
                        fullWidth
                      />
                      
                      <Input
                        label="Quantity Required"
                        name="quantity"
                        type="number"
                        value={rfqForm.quantity}
                        onChange={handleInputChange}
                        placeholder="Enter quantity"
                        required
                        fullWidth
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Unit of Measurement"
                        name="unit"
                        value={rfqForm.unit}
                        onChange={handleInputChange}
                        placeholder="e.g., pieces, meters, kg, liters"
                        required
                        fullWidth
                      />
                      
                      <Input
                        label="Budget (Optional)"
                        name="budget"
                        type="number"
                        value={rfqForm.budget}
                        onChange={handleInputChange}
                        placeholder="Enter your budget in INR"
                        fullWidth
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Deadline for Quotes"
                        name="deadline"
                        type="date"
                        value={rfqForm.deadline}
                        onChange={handleInputChange}
                        required
                        fullWidth
                      />
                      
                      <div className="md:col-span-2">
                        <Input
                          label="Detailed Description"
                          name="description"
                          value={rfqForm.description}
                          onChange={handleInputChange}
                          placeholder="Provide detailed specifications, quality requirements, delivery preferences, etc."
                          required
                          fullWidth
                        />
                      </div>
                    </div>
                    
                    <Input
                      label="Additional Requirements"
                      name="additionalRequirements"
                      value={rfqForm.additionalRequirements}
                      onChange={handleInputChange}
                      placeholder="Any additional requirements, certifications needed, sample requirements, etc."
                      fullWidth
                    />
                    
                    <div className="flex justify-end space-x-4">
                      <Button variant="outline" type="button">
                        Save as Draft
                      </Button>
                      <Button variant="primary" type="submit">
                        Submit RFQ
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Browse RFQs */
                <div>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      Browse RFQs
                    </h2>
                    <p className="text-gray-600">
                      View and respond to RFQs from other businesses in your industry
                    </p>
                  </div>
                  
                  {/* Search and Filters */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                      <div className="lg:col-span-2">
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            placeholder="Search RFQs..."
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                      
                      <Select
                        options={industryOptions}
                        placeholder="Industry"
                        fullWidth
                      />
                      
                      <Select
                        options={statusOptions}
                        placeholder="Status"
                        fullWidth
                      />
                    </div>
                  </div>
                  
                  {/* RFQs List */}
                  <div className="space-y-4">
                    {rfqs.map((rfq) => (
                      <Card key={rfq.id} className="hover:shadow-md transition-shadow duration-200">
                        <CardBody>
                          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                            {/* Main Content */}
                            <div className="lg:col-span-3">
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {rfq.title}
                                </h3>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(rfq.status)}`}>
                                  {rfq.status.replace('_', ' ')}
                                </span>
                              </div>
                              
                              <p className="text-gray-600 mb-4 line-clamp-2">
                                {rfq.description}
                              </p>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-500">Quantity:</span>
                                  <p className="font-medium">{rfq.quantity.toLocaleString()} {rfq.unit}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Budget:</span>
                                  <p className="font-medium">₹{rfq.budget?.toLocaleString() || 'Not specified'}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Deadline:</span>
                                  <p className="font-medium">{new Date(rfq.deadline).toLocaleDateString()}</p>
                                </div>
                                <div>
                                  <span className="text-gray-500">Responses:</span>
                                  <p className="font-medium">{rfq.responses}</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Sidebar */}
                            <div className="space-y-4">
                              {/* Buyer Info */}
                              <div className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center space-x-2 mb-2">
                                  <UserIcon className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm font-medium text-gray-900">{rfq.buyer}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <BuildingOfficeIcon className="h-4 w-4" />
                                  <span>{rfq.location}</span>
                                </div>
                              </div>
                              
                              {/* Industry Badge */}
                              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {rfq.industry.replace('_', ' ')}
                              </div>
                              
                              {/* Action Buttons */}
                              <div className="space-y-2">
                                <Button variant="primary" fullWidth size="sm">
                                  Submit Quote
                                </Button>
                                <Button variant="outline" fullWidth size="sm">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Load More */}
                  <div className="text-center mt-8">
                    <Button variant="outline" size="lg">
                      Load More RFQs
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
