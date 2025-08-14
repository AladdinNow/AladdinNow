'use client'

import React from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  BuildingOfficeIcon,
  UsersIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

/**
 * About page component
 * Displays company information, mission, vision, and team details
 */
export default function AboutPage() {
  // Company stats
  const stats = [
    { label: 'Businesses Connected', value: '10,000+', icon: BuildingOfficeIcon },
    { label: 'Products Listed', value: '50,000+', icon: ChartBarIcon },
    { label: 'Industries Served', value: '4', icon: GlobeAltIcon },
    { label: 'Cities Covered', value: '100+', icon: UsersIcon }
  ]
  
  // Core values
  const values = [
    {
      title: 'Trust & Transparency',
      description: 'We believe in building trust through transparent business practices and verified supplier networks.',
      icon: ShieldCheckIcon,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Innovation',
      description: 'Continuously innovating our platform to provide cutting-edge solutions for modern B2B commerce.',
      icon: ChartBarIcon,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to helping businesses grow and thrive.',
      icon: HeartIcon,
      color: 'bg-red-100 text-red-600'
    }
  ]
  
  // Team members
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      bio: '15+ years of experience in B2B commerce and digital transformation',
      image: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      bio: 'Expert in scalable architecture and emerging technologies',
      image: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Operations',
      bio: 'Specialist in supply chain optimization and business processes',
      image: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com'
    }
  ]
  
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About AladdinNow
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                India&apos;s Premier B2B Marketplace Platform
              </p>
              <p className="text-lg max-w-2xl mx-auto text-blue-100">
                We&apos;re on a mission to transform how businesses connect, trade, and grow in India&apos;s dynamic manufacturing landscape.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                To democratize B2B commerce in India by creating a transparent, efficient, and accessible platform that connects businesses across all industries.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that every business, regardless of size or location, should have access to quality suppliers, competitive pricing, and seamless trade opportunities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Connect verified suppliers with quality-conscious buyers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Streamline procurement processes and reduce costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Foster long-term business relationships</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                To become India&apos;s most trusted and comprehensive B2B marketplace, driving digital transformation across manufacturing and supply chain industries.
              </p>
              <p className="text-gray-600 mb-6">
                We envision a future where Indian businesses can compete globally with access to world-class suppliers, innovative technologies, and seamless trade experiences.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Lead digital transformation in B2B commerce</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Create a sustainable ecosystem for business growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Empower businesses with data-driven insights</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardBody>
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${value.color} rounded-full mb-4 mx-auto`}>
                      <value.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Industry Focus */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Industry Focus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-4xl mb-4">🧵</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Textile Industry</h3>
                <p className="text-gray-600 text-sm">
                  Fabrics, yarns, garments, and textile machinery with quality certifications
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-4xl mb-4">🧱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tiles & Marble</h3>
                <p className="text-gray-600 text-sm">
                  Ceramic tiles, natural stone, marble, and installation services
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-4xl mb-4">🛢️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Oil Filling</h3>
                <p className="text-gray-600 text-sm">
                  Cooking oils, industrial oils, and specialty oil products
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-4xl mb-4">🥤</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Beverages Filling</h3>
                <p className="text-gray-600 text-sm">
                  Soft drinks, juices, energy drinks, and contract manufacturing
                </p>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardBody>
                    <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-200 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {member.bio}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      Connect on LinkedIn
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg text-white text-center py-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of businesses already using AladdinNow to grow their operations and connect with quality suppliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.location.href = '/register'}
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
