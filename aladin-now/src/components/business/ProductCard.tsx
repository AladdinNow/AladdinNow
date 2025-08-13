import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  HeartIcon, 
  EyeIcon, 
  ShoppingCartIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

/**
 * ProductCard component for displaying product information
 * Includes image, title, price, ratings, and action buttons
 */
interface ProductCardProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    currency?: string
    image: string
    rating?: number
    reviewCount?: number
    category: string
    supplier: {
      name: string
      verified: boolean
    }
    inStock: boolean
    minOrderQuantity?: number
    unit?: string
  }
  variant?: 'default' | 'compact' | 'detailed'
  showActions?: boolean
  onFavorite?: (productId: string) => void
  onQuickView?: (productId: string) => void
  onAddToCart?: (productId: string) => void
  className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'default',
  showActions = true,
  onFavorite,
  onQuickView,
  onAddToCart,
  className
}) => {
  const isFavorite = false // This would come from state management
  
  const handleFavorite = () => {
    onFavorite?.(product.id)
  }
  
  const handleQuickView = () => {
    onQuickView?.(product.id)
  }
  
  const handleAddToCart = () => {
    onAddToCart?.(product.id)
  }

  const renderRating = () => {
    if (!product.rating) return null
    
    return (
      <div className="flex items-center space-x-1">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={cn(
                'h-4 w-4',
                i < Math.floor(product.rating!) 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              )}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          ({product.reviewCount || 0})
        </span>
      </div>
    )
  }

  const renderPrice = () => {
    const hasDiscount = product.originalPrice && product.originalPrice > product.price
    
    return (
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-gray-900">
          ₹{product.price.toLocaleString()}
        </span>
        {hasDiscount && (
          <span className="text-sm text-gray-500 line-through">
            ₹{product.originalPrice!.toLocaleString()}
          </span>
        )}
        {hasDiscount && (
          <Badge variant="danger" size="sm">
            {Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)}% OFF
          </Badge>
        )}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={cn('group relative bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200', className)}>
        <Link href={`/products/${product.id}`} className="block">
          <div className="aspect-square relative overflow-hidden rounded-t-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="p-3">
            <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
            <div className="mt-1">{renderPrice()}</div>
          </div>
        </Link>
      </div>
    )
  }

  if (variant === 'detailed') {
    return (
      <div className={cn('group relative bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200', className)}>
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {showActions && (
            <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleFavorite}
                className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
              >
                {isFavorite ? (
                  <HeartSolidIcon className="h-4 w-4 text-red-500" />
                ) : (
                  <HeartIcon className="h-4 w-4 text-gray-600" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleQuickView}
                className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
              >
                <EyeIcon className="h-4 w-4 text-gray-600" />
              </Button>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <Badge variant="outline" size="sm">
              {product.category}
            </Badge>
            {!product.inStock && (
              <Badge variant="danger" size="sm">
                Out of Stock
              </Badge>
            )}
          </div>
          
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-200">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          {renderRating()}
          
          <div className="mt-3 mb-4">
            {renderPrice()}
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">
              <span className="font-medium">{product.supplier.name}</span>
              {product.supplier.verified && (
                <Badge variant="success" size="sm" className="ml-2">
                  Verified
                </Badge>
              )}
            </div>
            {product.minOrderQuantity && (
              <div className="text-sm text-gray-500">
                Min: {product.minOrderQuantity} {product.unit || 'pcs'}
              </div>
            )}
          </div>
          
          {showActions && (
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleQuickView}
                className="flex-1"
              >
                Quick View
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1"
              >
                <ShoppingCartIcon className="h-4 w-4 mr-1" />
                Add to Cart
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
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square relative overflow-hidden rounded-t-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          {showActions && (
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleFavorite}
                className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
              >
                {isFavorite ? (
                  <HeartSolidIcon className="h-4 w-4 text-red-500" />
                ) : (
                  <HeartIcon className="h-4 w-4 text-gray-600" />
                )}
              </Button>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="outline" size="sm">
              {product.category}
            </Badge>
            {!product.inStock && (
              <Badge variant="danger" size="sm">
                Out of Stock
              </Badge>
            )}
          </div>
          
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h3>
          
          {renderRating()}
          
          <div className="mt-3 mb-4">
            {renderPrice()}
          </div>
          
          <div className="text-sm text-gray-500 mb-4">
            <span className="font-medium">{product.supplier.name}</span>
            {product.supplier.verified && (
              <Badge variant="success" size="sm" className="ml-2">
                Verified
              </Badge>
            )}
          </div>
          
          {showActions && (
            <Button
              variant="primary"
              size="sm"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full"
            >
              <ShoppingCartIcon className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          )}
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
