import { useState, useEffect } from 'react'

interface UseIntervalOptions {
  immediate?: boolean
}

/**
 * Custom hook for declarative intervals
 *
 * @param callback - Function to call on each interval
 * @param delay - Delay in milliseconds (null to pause)
 * @param options.immediate - Whether to call immediately on first render
 *
 * @example
 * ```tsx
 * useInterval(() => {
 *   setCount(count + 1)
 * }, 1000)
 * ```
 */
export function useInterval(
  callback: () => void,
  delay: number | null,
  options: UseIntervalOptions = {}
) {
  const { immediate = false } = options
  const [isRunning, setIsRunning] = useState(immediate && delay !== null)

  useEffect(() => {
    if (delay === null) {
      setIsRunning(false)
      return
    }

    if (immediate && !isRunning) {
      callback()
      setIsRunning(true)
    }
  }, [delay, immediate, isRunning, callback])

  useEffect(() => {
    if (delay === null || !isRunning) {
      return
    }

    const id = setInterval(callback, delay)
    return () => clearInterval(id)
  }, [callback, delay, isRunning])

  // Return controls for external management
  return {
    pause: () => setIsRunning(false),
    resume: () => setIsRunning(true),
    toggle: () => setIsRunning((prev) => !prev),
    isRunning,
  }
}
