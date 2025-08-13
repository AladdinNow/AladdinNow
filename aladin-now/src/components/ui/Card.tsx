import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Card component with header, body, and footer sections
 * Provides consistent styling for content containers
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the card has a shadow */
  shadow?: boolean
  /** Whether the card has a border */
  border?: boolean
  /** Whether the card is clickable */
  clickable?: boolean
  /** Whether the card is loading */
  loading?: boolean
}

/**
 * Card Header component
 */
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title text for the header */
  title?: string
  /** Subtitle text for the header */
  subtitle?: string
  /** Right side content (e.g., actions, badges) */
  rightContent?: React.ReactNode
}

/**
 * Card Body component
 */
interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the body has padding */
  padding?: boolean
}

/**
 * Card Footer component
 */
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the footer has padding */
  padding?: boolean
}

/**
 * Main Card component
 */
export const Card: React.FC<CardProps> = ({
  children,
  className,
  shadow = true,
  border = true,
  clickable = false,
  loading = false,
  ...props
}) => {
  // Base card classes
  const baseClasses = 'bg-white rounded-lg overflow-hidden'
  
  // Shadow classes
  const shadowClasses = shadow ? 'shadow-sm hover:shadow-md transition-shadow duration-200' : ''
  
  // Border classes
  const borderClasses = border ? 'border border-gray-200' : ''
  
  // Clickable classes
  const clickableClasses = clickable ? 'cursor-pointer hover:shadow-lg' : ''
  
  // Loading classes
  const loadingClasses = loading ? 'animate-pulse' : ''
  
  // Combine all classes
  const cardClasses = cn(
    baseClasses,
    shadowClasses,
    borderClasses,
    clickableClasses,
    loadingClasses,
    className
  )
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  )
}

/**
 * Card Header component
 */
export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
  title,
  subtitle,
  rightContent,
  ...props
}) => {
  return (
    <div
      className={cn('px-6 py-4 border-b border-gray-200', className)}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
          {children}
        </div>
        {rightContent && (
          <div className="ml-4">
            {rightContent}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Card Body component
 */
export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className,
  padding = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        padding ? 'px-6 py-4' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Card Footer component
 */
export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  padding = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        padding ? 'px-6 py-4' : '',
        'border-t border-gray-200 bg-gray-50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
