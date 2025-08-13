import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AladdinNow - India\'s Leading B2B Marketplace',
  description: 'Connect with verified suppliers, manufacturers, and service providers across Textile, Tiles & Marble, Oil Filling, and Beverages Filling industries in India.',
  keywords: 'B2B, marketplace, India, textile, tiles, marble, oil filling, beverages, suppliers, manufacturers',
  authors: [{ name: 'AladdinNow Team' }],
  openGraph: {
    title: 'AladdinNow - India\'s Leading B2B Marketplace',
    description: 'Connect with verified suppliers, manufacturers, and service providers across multiple industries in India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'AladdinNow',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
