import React from 'react'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import IndustryShowcase from '@/components/home/IndustryShowcase'

/**
 * HomePage component - Main landing page for AladdinNow
 * Composed of modular components for better maintainability
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* <Hero /> */}
      <Features />
      <IndustryShowcase />
    </div>
  )
}
