"use client"

import React, { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardBody } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

/**
 * Contact page component
 * Displays contact information and contact form
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Industry options
  const industryOptions = [
    { value: '', label: 'Select Industry' },
    { value: 'TEXTILE', label: 'Textile Industry' },
    { value: 'TILES_MARBLE', label: 'Tiles & Marble' },
    { value: 'OIL_FILLING', label: 'Oil Filling' },
    { value: 'BEVERAGES_FILLING', label: 'Beverages Filling' },
    { value: 'OTHER', label: 'Other Industry' }
  ]
  
  // Subject options
  const subjectOptions = [
    { value: '', label: 'Select Subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Partnership' },
    { value: 'support', label: 'Technical Support' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'media', label: 'Media & Press' },
    { value: 'careers', label: 'Career Opportunities' }
  ]
  
  // Contact information
  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Office Address',
      details: [
        'AladdinNow Technologies Pvt. Ltd.',
        '123 Business Park, Tower A, Floor 5',
        'Bandra Kurla Complex, Mumbai - 400051',
        'Maharashtra, India'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: PhoneIcon,
      title: 'Phone Numbers',
      details: [
        '+91 22 1234 5678',
        '+91 98765 43210',
        'Mon - Fri: 9:00 AM - 6:00 PM IST'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Addresses',
      details: [
        'info@aladinnow.com',
        'support@aladinnow.com',
        'sales@aladinnow.com'
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM IST',
        'Saturday: 10:00 AM - 2:00 PM IST',
        'Sunday: Closed'
      ],
      color: 'bg-orange-100 text-orange-600'
    }
  ]
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Implement actual form submission logic
      console.log('Contact form submitted:', formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show success message
      alert('Thank you for your message! We\'ll get back to you within 24 hours.')
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Sorry, there was an error submitting your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Page Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Contact Us
            </h1>
            <p className="text-gray-600">
              Get in touch with our team. We&apos;re here to help you succeed.
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h2>
                <p className="text-gray-600">
                  Have a question or need assistance? Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>
              
              <Card>
                <CardBody>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        required
                        fullWidth
                      />
                      
                      <Input
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        required
                        fullWidth
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        fullWidth
                      />
                      
                      <Input
                        label="Phone Number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        fullWidth
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter your company name"
                        fullWidth
                      />
                      
                      <Select
                        label="Industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        options={industryOptions}
                        placeholder="Select your industry"
                        fullWidth
                      />
                    </div>
                    
                    <Select
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      options={subjectOptions}
                      placeholder="Select subject"
                      required
                      fullWidth
                    />
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      loading={isSubmitting}
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600">
                  We&apos;re here to help you succeed. Reach out to us through any of these channels.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardBody>
                      <div className="flex items-start space-x-4">
                        <div className={`inline-flex items-center justify-center w-12 h-12 ${info.color} rounded-lg flex-shrink-0`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-600 text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>
              
              {/* Quick Contact */}
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Need Immediate Help?
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  For urgent matters, you can reach our support team directly:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <EnvelopeIcon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-700">support@aladinnow.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Visit Our Office
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
                <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
                  <div className="text-center">
                    <MapPinIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map Coming Soon</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Our office is located in Bandra Kurla Complex, Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardBody>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How quickly do you respond to inquiries?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Can I schedule a demo of your platform?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Absolutely! We&apos;d be happy to show you around. Contact our sales team to schedule a personalized demo.
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Do you offer support in regional languages?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Yes, we provide support in Hindi and English. We&apos;re working on adding more regional languages.
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What industries do you specialize in?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We focus on Textile, Tiles & Marble, Oil Filling, and Beverages Filling industries.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
