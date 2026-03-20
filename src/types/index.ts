/**
 * Shared Types for Neural OS Portfolio
 *
 * This folder contains globally shared type definitions
 * that are used across multiple features/components.
 */

/**
 * Color variants used throughout the application
 */
export type ColorVariant = 'primary' | 'secondary' | 'tertiary'

/**
 * Size variants for components
 */
export type SizeVariant = 'sm' | 'md' | 'lg'

/**
 * Common status types
 */
export type StatusType = 'active' | 'inactive' | 'pending' | 'error' | 'success'

/**
 * Trend direction for metrics
 */
export type TrendDirection = 'up' | 'down' | 'stable'

/**
 * Common metric interface used across dashboards
 */
export interface Metric {
  id: string
  value: string
  label: string
  color: ColorVariant
  trend?: TrendDirection
  trendValue?: string
}

/**
 * Product/Feature card interface
 */
export interface Product {
  id: string
  title: string
  description: string
  icon: string
  color: ColorVariant
  size: 'small' | 'medium' | 'large'
  metrics?: {
    label: string
    value: string
    progress?: number
  }[]
}

/**
 * Code snippet for documentation
 */
export interface CodeSnippet {
  language: string
  code: string
}

/**
 * Navigation item for menus
 */
export interface NavItem {
  icon: string
  label: string
  path: string
}

/**
 * API response wrapper
 */
export interface ApiResponse<T> {
  data: T
  status: 'success' | 'error'
  message?: string
  timestamp: string
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

/**
 * Pagination response
 */
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}
