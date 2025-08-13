import React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

/**
 * Option interface for select component
 */
interface Option {
  value: string
  label: string
  disabled?: boolean
}

/**
 * Select component with validation states and error handling
 * Supports all standard select props plus custom validation states
 */
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Label text above the select */
  label?: string
  /** Helper text below the select */
  helperText?: string
  /** Error message to display */
  error?: string
  /** Success state styling */
  success?: boolean
  /** Array of options to display */
  options: Option[]
  /** Placeholder text when no option is selected */
  placeholder?: string
  /** Full width select */
  fullWidth?: boolean
  /** Required field indicator */
  required?: boolean
}

/**
 * Select component with validation states and error handling
 * Built with Tailwind CSS and follows design system guidelines
 */
export const Select: React.FC<SelectProps> = ({
  label,
  helperText,
  error,
  success = false,
  options,
  placeholder = 'Select an option',
  fullWidth = false,
  required = false,
  className,
  id,
  ...props
}) => {
  // Generate unique ID if not provided
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`
  
  // Base select classes
  const baseClasses = 'block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors duration-200 appearance-none bg-white'
  
  // State-specific classes
  const stateClasses = error
    ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
    : success
    ? 'border-green-300 focus:ring-green-500 focus:border-green-500'
    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : ''
  
  // Combine all classes
  const selectClasses = cn(
    baseClasses,
    stateClasses,
    widthClasses,
    className
  )
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {/* Label */}
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {/* Select container with relative positioning for custom arrow */}
      <div className="relative">
        {/* Select field */}
        <select
          id={selectId}
          className={selectClasses}
          {...props}
        >
          {/* Placeholder option */}
          <option value="" disabled>
            {placeholder}
          </option>
          
          {/* Dynamic options */}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom chevron icon */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <ChevronDownIcon className="h-5 w-5 text-gray-400" />
        </div>
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

export default Select
