import { useState, useCallback } from 'react'

interface UseCounterOptions {
  initial?: number
  min?: number
  max?: number
  step?: number
}

/**
 * Custom hook for counter state management
 *
 * @param options - Counter configuration
 * @returns Counter value and control methods
 *
 * @example
 * ```tsx
 * const { value, increment, decrement, reset, set } = useCounter({ initial: 0, min: 0, max: 100 })
 * ```
 */
export function useCounter(options: UseCounterOptions = {}) {
  const { initial = 0, min = -Infinity, max = Infinity, step = 1 } = options

  const [value, setValue] = useState<number>(() => {
    // Clamp initial value
    return Math.min(max, Math.max(min, initial))
  })

  const increment = useCallback(
    (amount: number = step) => {
      setValue((prev) => Math.min(max, prev + amount))
    },
    [max, step]
  )

  const decrement = useCallback(
    (amount: number = step) => {
      setValue((prev) => Math.max(min, prev - amount))
    },
    [min, step]
  )

  const reset = useCallback(() => {
    setValue(Math.min(max, Math.max(min, initial)))
  }, [initial, min, max])

  const set = useCallback(
    (newValue: number) => {
      setValue(Math.min(max, Math.max(min, newValue)))
    },
    [min, max]
  )

  return {
    value,
    increment,
    decrement,
    reset,
    set,
    // Additional utilities
    isMin: value <= min,
    isMax: value >= max,
  }
}
