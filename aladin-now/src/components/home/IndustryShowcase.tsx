import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { 
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

/**
 * IndustryShowcase component highlighting the four target industries
 * Features industry-specific information and call-to-actions
 */
export const IndustryShowcase: React.FC = () => {
  const industries = [
    {
      id: 'textile',
      name: 'Textile & Apparel',
      description: 'Source premium fabrics, yarns, and finished garments from India\'s leading textile manufacturers.',
      image: '/images/industries/textile.jpg',
      features: [
        'Natural & Synthetic Fibers',
        'Woven & Knitted Fabrics',
        'Ready-made Garments',
        'Textile Machinery',
        'Dyes & Chemicals'
      ],
      stats: {
        suppliers: '2,500+',
        products: '15,000+',
        cities: '25+'
      },
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50'
    },
    {
      id: 'tiles-marble',
      name: 'Tiles & Marble',
      description: 'Discover high-quality tiles, marbles, and stone products for construction and interior design.',
      image: '/images/industries/tiles-marble.jpg',
      features: [
        'Ceramic & Porcelain Tiles',
        'Natural Marble & Granite',
        'Mosaic & Pattern Tiles',
        'Stone Processing',
        'Installation Tools'
      ],
      stats: {
        suppliers: '800+',
        products: '8,000+',
        cities: '20+'
      },
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50'
    },
    {
      id: 'oil-filling',
      name: 'Oil Filling & Packaging',
      description: 'Connect with specialized manufacturers of oil filling machines and packaging solutions.',
      image: '/images/industries/oil-filling.jpg',
      features: [
        'Automatic Filling Machines',
        'Bottling & Capping',
        'Packaging Materials',
        'Quality Control Systems',
        'Maintenance Services'
      ],
      stats: {
        suppliers: '300+',
        products: '3,000+',
        cities: '15+'
      },
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'beverages',
      name: 'Beverages & Filling',
      description: 'Source beverage production equipment and filling solutions from industry experts.',
      image: '/images/industries/beverages.jpg',
      features: [
        'Beverage Production Lines',
        'Filling & Sealing Machines',
        'Packaging Solutions',
        'Quality Testing Equipment',
        'Process Automation'
      ],
      stats: {
        suppliers: '400+',
        products: '4,000+',
        cities: '18+'
      },
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <SparklesIcon className="h-8 w-8 text-blue-600 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Industry Specializations
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on four key industries where India excels globally. 
            Each industry is carefully curated with verified suppliers and quality products.
          </p>
        </div>
        
        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className={`${industry.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {industry.description}
                    </p>
                  </div>
                  <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-white shadow-md ml-4">
                    <div className={`w-full h-full bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {industry.name.split(' ')[0][0]}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Key Products & Services
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {industry.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{industry.stats.suppliers}</div>
                    <div className="text-xs text-gray-500">Suppliers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{industry.stats.products}</div>
                    <div className="text-xs text-gray-500">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{industry.stats.cities}</div>
                    <div className="text-xs text-gray-500">Cities</div>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex space-x-3">
                  <Link href={`/products?industry=${industry.id}`}>
                    <Button variant="primary" size="sm" className="flex-1">
                      Browse Products
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                  <Link href={`/suppliers?industry=${industry.id}`}>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Suppliers
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can&apos;t Find Your Industry?
            </h3>
            <p className="text-gray-600 mb-6">
              While we focus on these four industries, we&apos;re constantly expanding. 
              Contact us to discuss how we can help with your specific sourcing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link href="/rfq">
                <Button variant="outline" size="lg">
                  Submit RFQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustryShowcase
