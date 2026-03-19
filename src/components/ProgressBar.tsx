import { cn } from '@/utils'

interface ProgressBarProps {
  value: number
  max?: number
  color?: 'primary' | 'secondary' | 'tertiary'
  className?: string
  showLabel?: boolean
  label?: string
}

export function ProgressBar({ 
  value, 
  max = 100, 
  color = 'secondary',
  className,
  showLabel = false,
  label 
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)
  
  const colors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }

  return (
    <div className={cn("space-y-2", className)}>
      {showLabel && label && (
        <div className="flex justify-between text-[10px] text-secondary font-mono">
          <span>{label}</span>
          <span>{value.toFixed(1)}%</span>
        </div>
      )}
      <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div 
          className={cn("h-full transition-all duration-1000 ease-out", colors[color])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
