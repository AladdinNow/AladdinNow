import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  BuildingOfficeIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  StarIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

/**
 * SupplierCard component for displaying supplier information
 * Includes company details, ratings, verification status, and contact info
 */
interface SupplierCardProps {
  supplier: {
    id: string
    name: string
    description: string
    logo: string
    industry: string
    location: string
    rating?: number
    reviewCount?: number
    verified: boolean
    goldSupplier: boolean
    responseRate: number
    responseTime: string
    contact: {
      phone?: string
      email?: string
      website?: string
    }
    certifications: string[]
    establishedYear?: number
    employeeCount?: string
    annualRevenue?: string
  }
  variant?: 'default' | 'compact' | 'detailed'
  showActions?: boolean
  onContact?: (supplierId: string) => void
  onViewProfile?: (supplierId: string) => void
  className?: string
}

export const SupplierCard: React.FC<SupplierCardProps> = ({
  supplier,
  variant = 'default',
  showActions = true,
  onContact,
  onViewProfile,
  className
}) => {
  const handleContact = () => {
    onContact?.(supplier.id)
  }
  
  const handleViewProfile = () => {
    onViewProfile?.(supplier.id)
  }

  const renderRating = () => {
    if (!supplier.rating) return null
    
    return (
      <div className="flex items-center space-x-1">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={cn(
                'h-4 w-4',
                i < Math.floor(supplier.rating!) 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              )}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          ({supplier.reviewCount || 0})
        </span>
      </div>
    )
  }

  const renderVerificationBadges = () => {
    return (
      <div className="flex items-center space-x-2">
        {supplier.verified && (
          <Badge variant="success" size="sm">
            <CheckBadgeIcon className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        )}
        {supplier.goldSupplier && (
          <Badge variant="warning" size="sm">
            Gold Supplier
          </Badge>
        )}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={cn('group relative bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200', className)}>
        <Link href={`/suppliers/${supplier.id}`} className="block">
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={supplier.logo}
                  alt={supplier.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{supplier.name}</h3>
                <p className="text-sm text-gray-500 truncate">{supplier.industry}</p>
              </div>
            </div>
            {renderRating()}
          </div>
        </Link>
      </div>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className={cn('group relative bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200', className)}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src={supplier.logo}
                alt={supplier.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{supplier.name}</h3>
                {renderVerificationBadges()}
              </div>
              <p className="text-sm text-gray-600 mb-2">{supplier.industry}</p>
              <div className="flex items-center text-sm text-gray-500">
                <MapPinIcon className="h-4 w-4 mr-1" />
                {supplier.location}
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2">{supplier.description}</p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600">{supplier.responseRate}%</div>
              <div className="text-xs text-gray-500">Response Rate</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-600">{supplier.responseTime}</div>
              <div className="text-xs text-gray-500">Response Time</div>
            </div>
            {supplier.establishedYear && (
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-600">{supplier.establishedYear}</div>
                <div className="text-xs text-gray-500">Established</div>
              </div>
            )}
            {supplier.employeeCount && (
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-600">{supplier.employeeCount}</div>
                <div className="text-xs text-gray-500">Employees</div>
              </div>
            )}
          </div>
          
          {/* Certifications */}
          {supplier.certifications.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Certifications:</h4>
              <div className="flex flex-wrap gap-2">
                {supplier.certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" size="sm">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {/* Rating */}
          {renderRating()}
          
          {/* Actions */}
          {showActions && (
            <div className="flex space-x-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleViewProfile}
                className="flex-1"
              >
                View Profile
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleContact}
                className="flex-1"
              >
                Contact Supplier
              </Button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn('group relative bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200', className)}>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start space-x-3 mb-3">
          <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              src={supplier.logo}
              alt={supplier.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-medium text-gray-900 truncate">{supplier.name}</h3>
              {renderVerificationBadges()}
            </div>
            <p className="text-sm text-gray-500 truncate">{supplier.industry}</p>
          </div>
        </div>
        
        {/* Location */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPinIcon className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="truncate">{supplier.location}</span>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{supplier.description}</p>
        
        {/* Stats */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{supplier.responseRate}%</span> response rate
          </div>
          <div className="text-sm text-gray-500">
            {supplier.responseTime} response time
          </div>
        </div>
        
        {/* Rating */}
        {renderRating()}
        
        {/* Actions */}
        {showActions && (
          <div className="flex space-x-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleViewProfile}
              className="flex-1"
            >
              View Profile
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleContact}
              className="flex-1"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SupplierCard
