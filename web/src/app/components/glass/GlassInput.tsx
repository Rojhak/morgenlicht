'use client'

import { InputHTMLAttributes, forwardRef } from 'react'

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id || props.name

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-[#37474F] mb-2"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            h-12 px-4 w-full
            bg-white/70 backdrop-blur-sm
            border rounded-lg
            text-[#37474F]
            placeholder:text-[#455A64]
            transition-all duration-200
            focus:outline-none focus:ring-4 focus:ring-[#FFD54F] focus:ring-offset-2
            ${error
              ? 'border-red-400 focus:border-red-400'
              : 'border-white/40 hover:border-white/60 focus:border-[#26A69A]'
            }
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-2 text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

GlassInput.displayName = 'GlassInput'
