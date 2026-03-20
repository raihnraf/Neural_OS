/**
 * Layout Constants
 *
 * Centralized layout and spacing values for consistent design.
 */

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1440,
} as const

/**
 * Spacing values (in pixels)
 */
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  '2XL': 48,
  '3XL': 64,
} as const

/**
 * Layout dimensions
 */
export const LAYOUT = {
  NAV_HEIGHT: 64,
  SIDEBAR_WIDTH: 256,
  MAX_CONTENT_WIDTH: 1440,
  MIN_SECTION_HEIGHT: 921,
  HERO_MIN_HEIGHT: 600,
} as const

/**
 * Border radius values (in pixels)
 */
export const BORDER_RADIUS = {
  SM: 4,
  MD: 8,
  LG: 12,
  XL: 16,
  '2XL': 24,
  FULL: 9999,
} as const

/**
 * Font sizes (in pixels/rem)
 */
export const FONT_SIZES = {
  XS: 0.6875, // 11px
  SM: 0.75, // 12px
  MD: 0.875, // 14px
  LG: 1, // 16px
  XL: 1.125, // 18px
  '2XL': 1.25, // 20px
  '3XL': 1.5, // 24px
  '4XL': 2, // 32px
  '5XL': 3, // 48px
  '6XL': 3.75, // 60px
  '7XL': 4.5, // 72px
  '8XL': 6, // 96px
} as const

/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  SLOWER: 800,
} as const

/**
 * Z-index layers
 */
export const Z_INDEX = {
  BASE: 0,
  DROPDOWN: 10,
  STICKY: 20,
  MODAL: 30,
  POPOVER: 40,
  TOAST: 50,
} as const
