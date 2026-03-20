/**
 * Mock API Services
 *
 * These services simulate API calls for the portfolio.
 * Replace with real API calls when connecting to a backend.
 */

import type { LatencyData, RegionStatus } from '@/pages/network/types'
import type { Metric, Product, CodeSnippet } from '@/types'

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Network API Service
 */
export const networkApi = {
  /**
   * Get latency data for all regions
   */
  async getLatencyData(): Promise<LatencyData[]> {
    await delay(500) // Simulate API call

    return [
      { region: 'North America', latency: '0.8ms', percentage: 92, trend: 'stable' },
      { region: 'Europe Central', latency: '1.2ms', percentage: 88, trend: 'stable' },
      { region: 'Asia Pacific', latency: '4.5ms', percentage: 74, trend: 'stable' },
    ]
  },

  /**
   * Get region status
   */
  async getRegionStatus(): Promise<RegionStatus[]> {
    await delay(300)

    return [
      { name: 'NYC-01', status: 'Operational', statusColor: 'primary', lastUpdate: new Date() },
      { name: 'LON-04', status: 'Operational', statusColor: 'primary', lastUpdate: new Date() },
      { name: 'TKY-02', status: 'Maintenance', statusColor: 'secondary', lastUpdate: new Date() },
      { name: 'SIN-01', status: 'Operational', statusColor: 'primary', lastUpdate: new Date() },
    ]
  },

  /**
   * Get network metrics
   */
  async getNetworkMetrics() {
    await delay(400)

    return {
      activeConnections: 12402,
      avgPayload: 24.8,
      uptime: '99.999%',
      globalP99: '<12ms',
    }
  },
}

/**
 * Products API Service
 */
export const productsApi = {
  /**
   * Get all products
   */
  async getProducts(): Promise<Product[]> {
    await delay(500)

    return [
      {
        id: 'secure-training',
        title: 'Secure Training Data',
        description:
          'High-fidelity labeling pipelines for LLMs, computer vision, and generative models with built-in PII redaction.',
        icon: 'database',
        color: 'primary',
        size: 'large',
        metrics: [{ label: 'Ingestion Rate', value: '4.2 PB/s' }],
      },
      {
        id: 'model-evaluation',
        title: 'Model Evaluation',
        description: 'Real-time benchmarking against proprietary datasets.',
        icon: 'analytics',
        color: 'secondary',
        size: 'small',
        metrics: [{ label: 'ACCURACY', value: '88.4%', progress: 88.4 }],
      },
      {
        id: 'privacy-guardrails',
        title: 'Privacy Guardrails',
        description: 'Automated compliance for SOC2, HIPAA, and GDPR environments.',
        icon: 'shield_lock',
        color: 'tertiary',
        size: 'small',
      },
      {
        id: 'enterprise-rlhf',
        title: 'Enterprise RLHF',
        description:
          'Human-in-the-loop optimization for complex reasoning tasks and model alignment.',
        icon: 'psychology',
        color: 'secondary',
        size: 'medium',
      },
    ]
  },

  /**
   * Get product by ID
   */
  async getProductById(id: string): Promise<Product | undefined> {
    await delay(300)
    const products = await this.getProducts()
    return products.find((p) => p.id === id)
  },
}

/**
 * Metrics API Service
 */
export const metricsApi = {
  /**
   * Get all metrics
   */
  async getMetrics(): Promise<Metric[]> {
    await delay(400)

    return [
      { id: 'accuracy', value: '99.9%', label: 'Labeling Accuracy', color: 'primary' },
      { id: 'tokens', value: '10B+', label: 'Tokens Processed', color: 'secondary' },
      { id: 'nodes', value: '500+', label: 'Enterprise Nodes', color: 'tertiary' },
    ]
  },

  /**
   * Get code snippet
   */
  async getCodeSnippet(): Promise<CodeSnippet> {
    await delay(300)

    return {
      language: 'python',
      code: `import neural_os

# Initialize secure intelligence node
client = neural_os.Client(api_key="nos_live_...2k")

# Deploy a training workflow
response = client.training.deploy(
    dataset_id="ds_9402_alpha",
    strategy="rlhf_enterprise",
    security_level="high",
    auto_scale=True
)

print(f"Node live at: {response.endpoint}")`,
    }
  },
}

/**
 * Dashboard API Service
 */
export const dashboardApi = {
  /**
   * Get dashboard data
   */
  async getDashboardData() {
    await delay(500)

    return {
      latency: 24,
      throughput: 1847,
      accuracy: 99.2,
      latencyHistory: [24, 26, 23, 25, 24, 22, 21, 23, 24, 25],
      syncStatus: 'synced' as const,
      uptime: '99.998%',
    }
  },

  /**
   * Deploy a model
   */
  async deployModel(modelId: string) {
    await delay(1000)

    return {
      success: true,
      message: `Model ${modelId} deployed successfully`,
      endpoint: `https://api.neural-os.example/v1/models/${modelId}`,
    }
  },
}
