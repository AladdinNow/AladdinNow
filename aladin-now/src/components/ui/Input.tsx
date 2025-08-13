import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Input component with validation states and error handling
 * Supports all standard input props plus custom validation states
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label text above the input */
  label?: string
  /** Helper text below the input */
  helperText?: string
  /** Error message to display */
  error?: string
  /** Success state styling */
  success?: boolean
  /** Left icon to display inside the input */
  leftIcon?: React.ReactNode
  /** Right icon to display inside the input */
  rightIcon?: React.ReactNode
  /** Full width input */
  fullWidth?: boolean
  /** Required field indicator */
  required?: boolean
}

/**
 * Input component with validation states, icons, and error handling
 * Built with Tailwind CSS and follows design system guidelines
 */
export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  success = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  required = false,
  className,
  id,
  ...props
}) => {
  // Generate unique ID if not provided
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  
  // Base input classes
  const baseClasses = 'block w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors duration-200'
  
  // State-specific classes
  const stateClasses = error
    ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
    : success
    ? 'border-green-300 focus:ring-green-500 focus:border-green-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : ''
  
  // Icon padding classes
  const iconPaddingClasses = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : ''
  
  // Combine all classes
  const inputClasses = cn(
    baseClasses,
    stateClasses,
    widthClasses,
    iconPaddingClasses,
    className
  )
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Input container with relative positioning for icons */}
      <div className="relative">
        {/* Left icon */}
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="h-5 w-5 text-gray-400">
              {leftIcon}
            </div>
          </div>
        )}
        
        {/* Input field */}
        <input
          id={inputId}
          className={inputClasses}
          {...props}
        />
        
        {/* Right icon */}
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <div className="h-5 w-5 text-gray-400">
              {rightIcon}
            </div>
          </div>
        )}
      </div>
      
      {/* Helper text or error message */}
      {(helperText || error) && (
        <p
          className={cn(
            'mt-1 text-sm',
            error
              ? 'text-red-600'
              : success
              ? 'text-green-600'
              : 'text-gray-500'
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  )
}

export default Input
