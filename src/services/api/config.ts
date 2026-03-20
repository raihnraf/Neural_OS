/**
 * API Client Configuration
 */
export interface ApiConfig {
  baseUrl: string
  timeout: number
  headers?: Record<string, string>
}

/**
 * Default API configuration
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  baseUrl: import.meta.env.VITE_API_URL || 'https://api.neural-os.example',
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
}

/**
 * API Error types
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export class NetworkError extends ApiError {
  constructor(message: string) {
    super(message, 0, 'NETWORK_ERROR')
    this.name = 'NetworkError'
  }
}

export class TimeoutError extends ApiError {
  constructor(message: string) {
    super(message, 408, 'TIMEOUT')
    this.name = 'TimeoutError'
  }
}
