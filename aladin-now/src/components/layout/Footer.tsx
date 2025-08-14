import React from 'react'
import Link from 'next/link'

/**
 * Footer component for the main application layout
 * Includes company information, navigation links, and social media
 */
export const Footer: React.FC = () => {
  // Footer navigation sections
  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' }
      ]
    },
    {
      title: 'Platform',
      links: [
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'Features', href: '/features' },
        { name: 'Industries', href: '/industries' },
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'API Documentation', href: '/api-docs' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Community Forum', href: '/forum' },
        { name: 'Training Resources', href: '/training' },
        { name: 'Status Page', href: '/status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Security', href: '/security' }
      ]
    }
  ]
  
  // Social media links
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
    { name: 'Facebook', href: 'https://facebook.com', icon: '📘' },
    { name: 'YouTube', href: 'https://youtube.com', icon: '📺' },
    { name: 'Instagram', href: 'https://instagram.com', icon: '📷' }
  ]
  
  // Industry badges
  const industryBadges = [
    { name: 'Textile', icon: '🧵', color: 'bg-blue-100 text-blue-800' },
    { name: 'Tiles & Marble', icon: '🧱', color: 'bg-green-100 text-green-800' },
    { name: 'Oil Filling', icon: '🛢️', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Beverages', icon: '🥤', color: 'bg-red-100 text-red-800' }
  ]
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Company info and logo */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-yellow-400">
                  AladdinNow
                </span>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              India&apos;s leading B2B marketplace platform connecting businesses across 
              Textile, Tiles & Marble, Oil Filling, and Beverages Filling industries.
            </p>
            
            {/* Industry badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {industryBadges.map((badge) => (
                <span
                  key={badge.name}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${badge.color}`}
                >
                  <span className="mr-1">{badge.icon}</span>
                  {badge.name}
                </span>
              ))}
            </div>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter subscription */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest industry insights and platform updates delivered to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
              <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium rounded-r-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AladdinNow. All rights reserved. Built with ❤️ for Indian Commerce
            </div>
            
            {/* Additional links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/sitemap" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                Accessibility
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                XML Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
