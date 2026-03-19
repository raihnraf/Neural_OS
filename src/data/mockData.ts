export interface Product {
  id: string
  title: string
  description: string
  icon: string
  color: 'primary' | 'secondary' | 'tertiary'
  size: 'small' | 'medium' | 'large'
  metrics?: {
    label: string
    value: string
    progress?: number
  }[]
}

export interface Metric {
  id: string
  value: string
  label: string
  color: 'primary' | 'secondary' | 'tertiary'
}

export interface CodeSnippet {
  language: string
  code: string
}

export const productsData: Product[] = [
  {
    id: 'secure-training',
    title: 'Secure Training Data',
    description: 'High-fidelity labeling pipelines for LLMs, computer vision, and generative models with built-in PII redaction.',
    icon: 'database',
    color: 'primary',
    size: 'large',
    metrics: [
      { label: 'Ingestion Rate', value: '4.2 PB/s' }
    ]
  },
  {
    id: 'model-evaluation',
    title: 'Model Evaluation',
    description: 'Real-time benchmarking against proprietary datasets.',
    icon: 'analytics',
    color: 'secondary',
    size: 'small',
    metrics: [
      { label: 'ACCURACY', value: '88.4%', progress: 88.4 }
    ]
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
    description: 'Human-in-the-loop optimization for complex reasoning tasks and model alignment.',
    icon: 'psychology',
    color: 'secondary',
    size: 'medium',
  }
]

export const metricsData: Metric[] = [
  {
    id: 'accuracy',
    value: '99.9%',
    label: 'Labeling Accuracy',
    color: 'primary'
  },
  {
    id: 'tokens',
    value: '10B+',
    label: 'Tokens Processed',
    color: 'secondary'
  },
  {
    id: 'nodes',
    value: '500+',
    label: 'Enterprise Nodes',
    color: 'tertiary'
  }
]

export const codeSnippetData: CodeSnippet = {
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

print(f"Node live at: {response.endpoint}")`
}
