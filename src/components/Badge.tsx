import { cn } from '@/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'secondary' | 'tertiary'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-surface-container border-outline-variant/20 text-secondary',
    secondary: 'bg-secondary-container/10 border-secondary/20 text-secondary',
    tertiary: 'bg-tertiary-container/10 border-tertiary/20 text-tertiary',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[0.6875rem] uppercase tracking-[0.1em] font-medium',
        variants[variant],
        className
      )}
    >
      {variant === 'default' && (
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
      )}
      {children}
    </span>
  )
}
