import React from 'react'
import { 
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  TruckIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline'

/**
 * Features component showcasing key platform benefits
 * Highlights the main value propositions for businesses
 */
export const Features: React.FC = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'Verified Suppliers',
      description: 'All suppliers are thoroughly verified and authenticated to ensure quality and reliability.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: MagnifyingGlassIcon,
      title: 'Smart Search & Filters',
      description: 'Find exactly what you need with advanced search, filters, and industry-specific categorization.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Direct Communication',
      description: 'Connect directly with suppliers through our integrated messaging and RFQ system.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: TruckIcon,
      title: 'Logistics Support',
      description: 'Get assistance with shipping, customs, and logistics for smooth international trade.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: CurrencyRupeeIcon,
      title: 'Competitive Pricing',
      description: 'Compare prices from multiple suppliers to get the best deals and maximize your savings.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: UserGroupIcon,
      title: 'Business Network',
      description: 'Join a community of verified businesses and expand your professional network.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: DocumentTextIcon,
      title: 'RFQ Management',
      description: 'Submit and manage Request for Quotes efficiently to get multiple competitive offers.',
      color: 'text-rose-600',
      bgColor: 'bg-rose-100'
    },
    {
      icon: CogIcon,
      title: 'Custom Solutions',
      description: 'Get tailored solutions and custom manufacturing options from specialized suppliers.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose AladdinNow?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is designed to make B2B sourcing simple, efficient, and profitable. 
            Discover the features that set us apart from traditional sourcing methods.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses already using AladdinNow to source products, 
              connect with suppliers, and grow their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
