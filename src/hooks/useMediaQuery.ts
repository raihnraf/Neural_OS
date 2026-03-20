import { useState, useEffect } from 'react'

/**
 * Custom hook for media query matching
 *
 * @param query - Media query string
 * @returns boolean indicating if query matches
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery('(max-width: 768px)')
 * const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
 * ```
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    // Update state with current value
    setMatches(mediaQuery.matches)

    // Create event handler for changes
    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Subscribe to changes
    mediaQuery.addEventListener('change', handler)

    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [query])

  return matches
}

/**
 * Custom hook for breakpoint detection
 *
 * @returns Object with breakpoint booleans
 *
 * @example
 * ```tsx
 * const { isMobile, isTablet, isDesktop } = useBreakpoint()
 * ```
 */
export function useBreakpoint() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)')
  const isDesktop = useMediaQuery('(min-width: 1025px)')
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return {
    isMobile,
    isTablet,
    isDesktop,
    isDarkMode,
    // Return the active breakpoint name
    active: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
  }
}
