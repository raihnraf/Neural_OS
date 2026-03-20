import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  shimmer?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', shimmer = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-primary text-on-primary hover:bg-primary/90 focus:ring-primary',
      secondary: 'bg-secondary text-on-secondary hover:bg-secondary/90 focus:ring-secondary',
      outline:
        'border border-outline-variant/30 text-primary hover:bg-surface-container-high focus:ring-outline',
      ghost:
        'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 focus:ring-outline',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-8 py-4 text-lg',
    }

    const shimmerClass = shimmer ? 'shimmer-btn' : ''

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], shimmerClass, className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
