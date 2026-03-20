import { ApiConfig, DEFAULT_API_CONFIG, ApiError, NetworkError, TimeoutError } from './config'
import type { PaginationParams, PaginatedResponse } from '@/types'

/**
 * Base API Client
 *
 * Handles HTTP requests with error handling, timeouts, and response parsing.
 * In production, replace mock implementations with real API calls.
 */
export class ApiClient {
  private config: ApiConfig
  private authToken: string | null = null

  constructor(config: Partial<ApiConfig> = {}) {
    this.config = { ...DEFAULT_API_CONFIG, ...config }
  }

  /**
   * Set authentication token for subsequent requests
   */
  setAuthToken(token: string): void {
    this.authToken = token
  }

  /**
   * Clear authentication token
   */
  clearAuthToken(): void {
    this.authToken = null
  }

  /**
   * Build request URL with query parameters
   */
  private buildUrl(endpoint: string, params?: Record<string, string | number | boolean>): string {
    const url = new URL(`${this.config.baseUrl}${endpoint}`)

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value))
      })
    }

    return url.toString()
  }

  /**
   * Build request headers
   */
  private buildHeaders(customHeaders?: Record<string, string>): HeadersInit {
    const headers: Record<string, string> = {
      ...this.config.headers,
      ...customHeaders,
    }

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`
    }

    return headers
  }

  /**
   * Handle API response
   */
  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      if (response.status === 408) {
        throw new TimeoutError('Request timed out')
      }

      let errorMessage = `HTTP ${response.status}: ${response.statusText}`

      try {
        const errorData = await response.json()
        errorMessage = errorData.message || errorMessage
      } catch {
        // Response might not be JSON
      }

      throw new ApiError(errorMessage, response.status)
    }

    return response.json()
  }

  /**
   * Perform GET request
   */
  async get<T>(endpoint: string, params?: Record<string, string | number | boolean>): Promise<T> {
    const url = this.buildUrl(endpoint, params)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)

      const response = await fetch(url, {
        method: 'GET',
        headers: this.buildHeaders(),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      return this.handleResponse<T>(response)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new TimeoutError('Request timed out')
      }
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new NetworkError('Network error occurred')
      }
      throw error
    }
  }

  /**
   * Perform POST request
   */
  async post<T, B = unknown>(endpoint: string, body?: B): Promise<T> {
    const url = this.buildUrl(endpoint)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)

      const response = await fetch(url, {
        method: 'POST',
        headers: this.buildHeaders(),
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      return this.handleResponse<T>(response)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new TimeoutError('Request timed out')
      }
      throw error
    }
  }

  /**
   * Perform PUT request
   */
  async put<T, B = unknown>(endpoint: string, body?: B): Promise<T> {
    const url = this.buildUrl(endpoint)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)

      const response = await fetch(url, {
        method: 'PUT',
        headers: this.buildHeaders(),
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      return this.handleResponse<T>(response)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new TimeoutError('Request timed out')
      }
      throw error
    }
  }

  /**
   * Perform DELETE request
   */
  async delete<T>(endpoint: string): Promise<T> {
    const url = this.buildUrl(endpoint)

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)

      const response = await fetch(url, {
        method: 'DELETE',
        headers: this.buildHeaders(),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      return this.handleResponse<T>(response)
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        throw new TimeoutError('Request timed out')
      }
      throw error
    }
  }

  /**
   * Perform paginated GET request
   */
  async getPaginated<T>(
    endpoint: string,
    params?: PaginationParams
  ): Promise<PaginatedResponse<T>> {
    const queryParams: Record<string, string | number> = {
      page: params?.page || 1,
      limit: params?.limit || 10,
    }

    if (params?.sortBy) {
      queryParams.sortBy = params.sortBy
    }

    if (params?.sortOrder) {
      queryParams.sortOrder = params.sortOrder
    }

    return this.get<PaginatedResponse<T>>(endpoint, queryParams)
  }
}

// Export singleton instance for use throughout the app
export const apiClient = new ApiClient()
