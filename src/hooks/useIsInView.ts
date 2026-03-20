import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook to check if element is in viewport
 *
 * @param ref - React ref to the element
 * @param options - IntersectionObserver options
 * @returns boolean indicating if element is in view
 *
 * @example
 * ```tsx
 * const ref = useRef<HTMLDivElement>(null)
 * const isInView = useIsInView(ref, { threshold: 0.1 })
 * ```
 */
export function useIsInView<T extends Element>(
  ref: React.RefObject<T>,
  options: IntersectionObserverInit = { threshold: 0 }
): boolean {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting)
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return isInView
}

/**
 * Custom hook to check if component is mounted
 *
 * @returns boolean indicating if component is mounted
 *
 * @example
 * ```tsx
 * const isMounted = useIsMounted()
 * useEffect(() => {
 *   if (isMounted()) {
 *     setState(value)
 *   }
 * }, [isMounted])
 * ```
 */
export function useIsMounted(): () => boolean {
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  return () => mountedRef.current
}
