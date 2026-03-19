import { cn } from '@/utils'

interface MaterialSymbolsProps {
  icon: string
  className?: string
  filled?: boolean
  size?: number | string
}

export function MaterialSymbols({ 
  icon, 
  className = '', 
  filled = false,
  size = 24
}: MaterialSymbolsProps) {
  return (
    <span
      className={cn('material-symbols-outlined', className)}
      style={{
        fontVariationSettings: filled ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
        fontSize: typeof size === 'number' ? `${size}px` : size,
      }}
    >
      {icon}
    </span>
  )
}
