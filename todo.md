
# NEURAL_OS Portfolio - Project Plan ✅

## Project Status: COMPLETED

The NEURAL_OS portfolio has been successfully built with all features implemented.

---

## Original Requirements

here's the project i want to create.

use industry pattern for code and the folders. search best practice using
web-search mcp. use context7 mcp for updated framework/code usage.

Make sure the code design is scalable

below is design project i've create. recreate it with react

## Tech Stack Implemented

| Category | Technology | Status |
|----------|------------|--------|
| **Framework** | React 18 + TypeScript | ✅ |
| **Build Tool** | Vite | ✅ |
| **Styling** | Tailwind CSS | ✅ |
| **UI Components** | Custom (shadcn/ui pattern) | ✅ |
| **Icons** | Lucide React | ✅ |
| **State** | Zustand | ✅ |
| **Animations** | Framer Motion | ✅ |
| **Data Handling** | TanStack Query | ✅ |

## Architecture: Feature-Based

```
src/
├── assets/          # Images, SVGs, global styles
├── components/      # Truly global, reusable UI (Buttons, Inputs)
├── features/        # The "meat" of your app
│   ├── hero/
│   │   ├── NavBar.tsx
│   │   ├── Hero.tsx
│   │   ├── NetworkVisual.tsx
│   │   └── index.ts
│   ├── product-showcase/
│   │   ├── ProductShowcase.tsx
│   │   ├── ProductCard.tsx
│   │   └── index.ts
│   ├── developer-terminal/
│   │   └── DeveloperTerminal.tsx
│   └── metrics/
│       └── Metrics.tsx
├── hooks/           # Global utility hooks
├── store/           # Zustand store definitions
├── utils/           # Helper functions
├── data/            # Mock data
└── pages/           # Page components
```

## Implemented Features

### ✅ Core Components
- [x] NavBar with glass effect and scroll detection
- [x] Hero section with animated network visual
- [x] Bento Grid Product Showcase (4 cards)
- [x] Developer Terminal with syntax highlighting
- [x] Metrics section with animated counters
- [x] Footer component

### ✅ UI Components
- [x] Button (with variants: primary, secondary, outline, ghost)
- [x] TerminalBlock (code display with copy)
- [x] Badge (status indicators)
- [x] ProgressBar (animated)

### ✅ Custom CSS Utilities
- [x] `.glass-panel` - Backdrop blur effect
- [x] `.glow-border` - Hover glow effect
- [x] `.shimmer-btn` - Shimmer animation on hover
- [x] `.grid-bg` - Grid background pattern
- [x] `.text-gradient` - Gradient text effect

### ✅ Design System
- [x] 40+ custom NEURAL_OS theme colors
- [x] Inter font family
- [x] JetBrains Mono for code
- [x] Custom animations (spin-slow, pulse-glow)

### ✅ Performance Optimizations
- [x] Code splitting with manual chunks
- [x] Image optimization (vite-plugin-imagemin)
- [x] Tree-shakable components
- [x] Optimized for Vercel free tier

### ✅ Developer Experience
- [x] TypeScript for type safety
- [x] ESLint configuration
- [x] Path aliases (@/ for src/)
- [x] Feature-based architecture
- [x] Comprehensive README

## Deployment

### Vercel Configuration
- `vercel.json` configured for SPA routing
- Cache headers for static assets
- Optimized build settings

### Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Next Steps (Optional Enhancements)

1. **Add More Pages**
   - /about page
   - /projects showcase
   - /contact form

2. **Backend Integration**
   - Connect to Contentful/Sanity CMS
   - Add Formspree for contact form
   - Integrate analytics

3. **Advanced Features**
   - Blog section with MDX
   - Project filtering
   - Dark/light mode toggle
   - i18n support

4. **Testing**
   - Unit tests with Vitest
   - E2E tests with Playwright
   - Accessibility audits

---

## Build Output

```
dist/index.html                          1.22 kB
dist/assets/index.css                   17.38 kB
dist/assets/query-vendor.js             32.27 kB
dist/assets/index.js                    61.18 kB
dist/assets/motion-vendor.js           111.39 kB
dist/assets/react-vendor.js            133.92 kB
```

Total bundle size: ~357 KB (gzipped: ~111 KB) ✅ Vercel Free Tier Friendly!

---

**Status**: ✅ Project completed successfully and ready for deployment!

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>NEURAL_OS | The Data Engine for Secure AI</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "on-secondary-fixed-variant": "#6900b3",
                "on-error": "#690005",
                "on-secondary-fixed": "#2c0051",
                "secondary-fixed-dim": "#ddb7ff",
                "primary-fixed": "#c4e8fc",
                "on-surface": "#e5e2e1",
                "surface-bright": "#3a3939",
                "surface-container": "#201f1f",
                "on-background": "#e5e2e1",
                "on-secondary": "#490080",
                "tertiary-fixed": "#9cf0ff",
                "on-primary-fixed": "#001e2b",
                "outline-variant": "#42484b",
                "secondary": "#ddb7ff",
                "on-tertiary-fixed-variant": "#004f58",
                "surface-dim": "#131313",
                "primary-container": "#bbdef2",
                "secondary-container": "#6f00be",
                "primary": "#ecf7ff",
                "surface-container-low": "#1c1b1b",
                "inverse-primary": "#416374",
                "secondary-fixed": "#f0dbff",
                "on-tertiary-container": "#006875",
                "on-primary-fixed-variant": "#294b5b",
                "inverse-surface": "#e5e2e1",
                "on-tertiary-fixed": "#001f24",
                "on-error-container": "#ffdad6",
                "tertiary": "#e1faff",
                "surface": "#131313",
                "tertiary-fixed-dim": "#00daf3",
                "background": "#131313",
                "on-secondary-container": "#d6a9ff",
                "on-primary-container": "#416374",
                "surface-container-high": "#2a2a2a",
                "surface-container-highest": "#353534",
                "surface-tint": "#a9cbdf",
                "surface-container-lowest": "#0e0e0e",
                "on-primary": "#0f3444",
                "on-tertiary": "#00363d",
                "error": "#ffb4ab",
                "tertiary-container": "#6beaff",
                "on-surface-variant": "#c2c7cc",
                "inverse-on-surface": "#313030",
                "primary-fixed-dim": "#a9cbdf",
                "error-container": "#93000a",
                "outline": "#8c9196",
                "surface-variant": "#353534"
              },
              fontFamily: {
                "headline": ["Inter"],
                "body": ["Inter"],
                "label": ["Inter"]
              },
              borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
            },
          },
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; background-color: #131313; color: #e5e2e1; }
        .glass-panel { backdrop-filter: blur(12px); background: rgba(28, 27, 27, 0.7); border: 1px solid rgba(66, 72, 75, 0.2); }
        .glow-border:hover { border-color: #bbdef2; box-shadow: 0 0 15px rgba(187, 222, 242, 0.15); transition: all 0.3s ease; }
        .shimmer-btn { position: relative; overflow: hidden; }
        .shimmer-btn::after { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent); transform: rotate(45deg); transition: 0.5s; }
        .shimmer-btn:hover::after { left: 120%; }
        .grid-bg { background-image: radial-gradient(circle at 1px 1px, #201f1f 1px, transparent 0); background-size: 40px 40px; }
    </style>
</head>
<body class="bg-background selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar Component -->
<nav class="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#42484b]/20 shadow-[0_0_15px_rgba(187,222,242,0.05)]">
<div class="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
<div class="text-xl font-bold tracking-tighter text-[#ecf7ff]">NEURAL_OS</div>
<div class="hidden md:flex items-center gap-8 font-['Inter'] font-medium text-sm tracking-tight">
<a class="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Solutions</a>
<a class="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Developers</a>
<a class="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Network</a>
<a class="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Pricing</a>
</div>
<div class="flex items-center gap-4">
<button class="text-[#c2c7cc] text-sm font-medium hover:text-[#ecf7ff] transition-colors">Sign In</button>
<button class="bg-primary text-on-primary px-4 py-2 rounded-lg text-sm font-bold shimmer-btn">Deploy Node</button>
</div>
</div>
</nav>
<main class="pt-16">
<!-- Hero Section -->
<section class="relative min-h-[921px] flex items-center justify-center overflow-hidden grid-bg">
<!-- Background Decorative Glows -->
<div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] rounded-full"></div>
<div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-container/10 blur-[120px] rounded-full"></div>
<div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/20 mb-8">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-[0.6875rem] uppercase tracking-[0.1em] font-medium text-secondary">Neural Engine v2.4 Live</span>
</div>
<h1 class="text-6xl md:text-8xl font-semibold tracking-tight text-on-surface mb-6 leading-tight">
                    The Data Engine for <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">Secure AI.</span>
</h1>
<p class="text-on-surface-variant text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    The infrastructure for high-performance AI, optimized for massive scale. Securely train, evaluate, and deploy at planetary speed.
                </p>
<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
<button class="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded-lg shimmer-btn text-lg transition-transform hover:scale-[1.02]">
                        Get Started
                    </button>
<button class="w-full sm:w-auto px-8 py-4 bg-transparent border border-outline-variant/30 text-primary font-medium rounded-lg hover:bg-surface-container-high transition-all text-lg">
                        Read the Docs
                    </button>
</div>
<!-- Abstract Network Visual -->
<div class="mt-20 relative w-full h-[300px] md:h-[400px] flex items-center justify-center opacity-40">
<div class="absolute inset-0 flex items-center justify-center">
<svg class="w-full h-full" viewbox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#bbdef2" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#bbdef2" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#bbdef2" stop-opacity="0"></stop>
</lineargradient>
</defs>
<circle cx="500" cy="200" fill="none" r="150" stroke="#42484b" stroke-width="0.5"></circle>
<circle cx="500" cy="200" fill="none" r="80" stroke="#42484b" stroke-width="0.5"></circle>
<g class="network-lines">
<line stroke="url(#lineGrad)" stroke-width="1" x1="200" x2="800" y1="100" y2="300"></line>
<line stroke="url(#lineGrad)" stroke-width="1" x1="200" x2="800" y1="300" y2="100"></line>
<circle cx="200" cy="100" fill="#ecf7ff" r="3"></circle>
<circle cx="800" cy="300" fill="#ddb7ff" r="3"></circle>
<circle cx="500" cy="200" fill="#ecf7ff" r="5"></circle>
</g>
</svg>
</div>
</div>
</div>
</section>
<!-- Bento Grid Product Showcase -->
<section class="py-24 max-w-7xl mx-auto px-6">
<div class="mb-16">
<span class="label-sm text-secondary font-bold tracking-widest block mb-2 uppercase text-[0.6875rem]">Product Ecosystem</span>
<h2 class="text-3xl md:text-4xl font-semibold text-on-surface">Integrated Intelligence Layers</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
<!-- Card 1: Large -->
<div class="md:col-span-2 lg:col-span-2 row-span-2 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 glow-border flex flex-col justify-between group">
<div>
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 rounded bg-primary-container/10 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" data-icon="database">database</span>
</div>
<h3 class="text-xl font-semibold text-on-surface">Secure Training Data</h3>
</div>
<p class="text-on-surface-variant leading-relaxed">High-fidelity labeling pipelines for LLMs, computer vision, and generative models with built-in PII redaction.</p>
</div>
<div class="mt-12 bg-surface-container-lowest rounded-lg p-4 border border-outline-variant/10">
<div class="flex items-end gap-1 h-32">
<div class="flex-1 bg-primary/20 rounded-t h-[40%]"></div>
<div class="flex-1 bg-primary/30 rounded-t h-[60%]"></div>
<div class="flex-1 bg-primary/40 rounded-t h-[80%]"></div>
<div class="flex-1 bg-primary/60 rounded-t h-[50%]"></div>
<div class="flex-1 bg-primary/80 rounded-t h-[90%]"></div>
<div class="flex-1 bg-primary rounded-t h-[100%]"></div>
</div>
<div class="mt-4 flex justify-between text-[0.6rem] uppercase tracking-wider text-on-surface-variant font-mono">
<span>Ingestion Rate</span>
<span>4.2 PB/s</span>
</div>
</div>
</div>
<!-- Card 2: Small -->
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 glow-border group">
<div class="w-10 h-10 rounded bg-secondary-container/10 flex items-center justify-center text-secondary mb-4">
<span class="material-symbols-outlined" data-icon="analytics">analytics</span>
</div>
<h3 class="text-lg font-semibold text-on-surface mb-2">Model Evaluation</h3>
<p class="text-on-surface-variant text-sm mb-6">Real-time benchmarking against proprietary datasets.</p>
<div class="space-y-2">
<div class="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[88%]"></div>
</div>
<div class="flex justify-between text-[10px] text-secondary font-mono">
<span>ACCURACY</span>
<span>88.4%</span>
</div>
</div>
</div>
<!-- Card 3: Small -->
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 glow-border group">
<div class="w-10 h-10 rounded bg-tertiary-container/10 flex items-center justify-center text-tertiary mb-4">
<span class="material-symbols-outlined" data-icon="shield_lock">shield_lock</span>
</div>
<h3 class="text-lg font-semibold text-on-surface mb-2">Privacy Guardrails</h3>
<p class="text-on-surface-variant text-sm">Automated compliance for SOC2, HIPAA, and GDPR environments.</p>
</div>
<!-- Card 4: Medium -->
<div class="md:col-span-2 lg:col-span-2 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 glow-border flex items-center gap-8 group">
<div class="flex-1">
<div class="w-10 h-10 rounded bg-on-secondary-fixed-variant/10 flex items-center justify-center text-secondary mb-4">
<span class="material-symbols-outlined" data-icon="hail">hail</span>
</div>
<h3 class="text-xl font-semibold text-on-surface mb-2">Enterprise RLHF</h3>
<p class="text-on-surface-variant leading-relaxed">Human-in-the-loop optimization for complex reasoning tasks and model alignment.</p>
</div>
<div class="hidden sm:block w-32 h-32 relative">
<div class="absolute inset-0 border-2 border-dashed border-outline-variant/30 rounded-full animate-spin-slow"></div>
<div class="absolute inset-4 border border-secondary/20 rounded-full"></div>
<div class="absolute inset-0 flex items-center justify-center">
<span class="material-symbols-outlined text-secondary" data-icon="psychology" data-weight="fill">psychology</span>
</div>
</div>
</div>
</div>
</section>
<!-- Developer Terminal Section -->
<section class="py-24 bg-surface-container-lowest">
<div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 class="text-4xl font-bold text-on-surface mb-6">Built for Engineers</h2>
<p class="text-on-surface-variant text-lg leading-relaxed mb-8">
                        Integrate our data engine into your existing stack with three lines of code. Support for all major frameworks and native cloud providers.
                    </p>
<ul class="space-y-4">
<li class="flex items-center gap-3 text-primary">
<span class="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
<span>RESTful API with 99.9% uptime</span>
</li>
<li class="flex items-center gap-3 text-primary">
<span class="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
<span>SDKs for Python, Node.js, and Go</span>
</li>
<li class="flex items-center gap-3 text-primary">
<span class="material-symbols-outlined text-sm" data-icon="check_circle">check_circle</span>
<span>CLI for automated pipeline management</span>
</li>
</ul>
</div>
<!-- Terminal -->
<div class="glass-panel rounded-xl overflow-hidden shadow-2xl border border-outline-variant/30">
<div class="bg-surface-container-high px-4 py-3 flex items-center justify-between border-b border-outline-variant/20">
<div class="flex gap-2">
<div class="w-3 h-3 rounded-full bg-error/40"></div>
<div class="w-3 h-3 rounded-full bg-secondary/40"></div>
<div class="w-3 h-3 rounded-full bg-tertiary/40"></div>
</div>
<div class="flex gap-4 text-[10px] font-mono font-bold tracking-widest text-on-surface-variant">
<span class="text-primary border-b border-primary pb-0.5 cursor-pointer">PYTHON</span>
<span class="hover:text-primary cursor-pointer transition-colors">JAVASCRIPT</span>
<span class="hover:text-primary cursor-pointer transition-colors">CURL</span>
</div>
<button class="hover:text-primary transition-colors">
<span class="material-symbols-outlined text-base" data-icon="content_copy">content_copy</span>
</button>
</div>
<div class="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
<pre class="text-[#8c9196]"><span class="text-secondary">import</span> neural_os

<span class="text-[#8c9196]"># Initialize secure intelligence node</span>
client = neural_os.Client(api_key=<span class="text-primary-container">"nos_live_...2k"</span>)

<span class="text-[#8c9196]"># Deploy a training workflow</span>
response = client.training.deploy(
    dataset_id=<span class="text-primary-container">"ds_9402_alpha"</span>,
    strategy=<span class="text-primary-container">"rlhf_enterprise"</span>,
    security_level=<span class="text-primary-container">"high"</span>,
    auto_scale=<span class="text-secondary">True</span>
)

print(<span class="text-primary-container">f"Node live at: {response.endpoint}"</span>)</pre>
</div>
</div>
</div>
</section>
<!-- Metrics Section -->
<section class="py-32 border-t border-outline-variant/10">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div class="group">
<div class="text-6xl md:text-7xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-500">99.9%</div>
<div class="text-[0.6875rem] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Labeling Accuracy</div>
</div>
<div class="group">
<div class="text-6xl md:text-7xl font-black text-secondary mb-2 group-hover:scale-110 transition-transform duration-500">10B+</div>
<div class="text-[0.6875rem] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Tokens Processed</div>
</div>
<div class="group">
<div class="text-6xl md:text-7xl font-black text-tertiary mb-2 group-hover:scale-110 transition-transform duration-500">500+</div>
<div class="text-[0.6875rem] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Enterprise Nodes</div>
</div>
</div>
</div>
</section>
</main>
<!-- Footer Component -->
<footer class="bg-[#0e0e0e] w-full py-12 border-t border-[#42484b]/10">
<div class="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-center max-w-7xl mx-auto px-8 gap-8">
<div class="flex flex-col gap-2">
<div class="text-lg font-black text-[#ecf7ff]">NEURAL OS</div>
<p class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] font-light text-[#bbdef2] opacity-70">
                    © 2024 NEURAL OS. Planetary-scale intelligence engine.
                </p>
</div>
<div class="flex flex-wrap gap-x-8 gap-y-4 font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] font-light">
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 opacity-70 hover:opacity-100" href="#">Documentation</a>
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 opacity-70 hover:opacity-100" href="#">API Reference</a>
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 opacity-70 hover:opacity-100" href="#">Status</a>
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 opacity-70 hover:opacity-100" href="#">Privacy Policy</a>
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 opacity-70 hover:opacity-100" href="#">Terms of Service</a>
</div>
</div>
</footer>
<style>
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
        }
    </style>
</body></html>