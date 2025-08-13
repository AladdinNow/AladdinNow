import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

/**
 * Main layout component that wraps all pages
 * Provides consistent header and footer across the application
 */
interface LayoutProps {
  /** Page content to be rendered between header and footer */
  children: React.ReactNode
  /** Whether to show the header (default: true) */
  showHeader?: boolean
  /** Whether to show the footer (default: true) */
  showFooter?: boolean
  /** Additional CSS classes for the main content area */
  className?: string
}

/**
 * Layout component that provides consistent structure across all pages
 * Includes header navigation, main content area, and footer
 */
export const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
  className = ''
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {showHeader && <Header />}
      
      {/* Main content area */}
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      
      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  )
}

export default Layout
