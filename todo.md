
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
| **Icons** | Lucide React + Material Symbols | ✅ |
| **State** | Zustand | ✅ |
| **Animations** | Framer Motion | ✅ |
| **Data Handling** | TanStack Query | ✅ |
| **Charts** | Recharts | ✅ |

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

<!-- 2. **Backend Integration**
   - Connect to Contentful/Sanity CMS
   - Add Formspree for contact form
   - Integrate analytics -->

3. **Advanced Features**
   - Blog section with MDX
   - Project filtering
   - Dark/light mode toggle
   - i18n support

<!-- 4. **Testing**
   - Unit tests with Vitest
   - E2E tests with Playwright
   - Accessibility audits -->

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

---

## DASHBOARD FEATURE - IMPLEMENTATION COMPLETE ✅

### Implementation Summary

The Dashboard feature has been successfully implemented based on the provided design reference.

### Tech Stack Additions
| Category | Technology | Status |
|----------|------------|--------|
| **Icons** | Material Symbols Outlined | ✅ |
| **Charts** | Recharts | ✅ |

### Architecture: Dashboard Feature Module

```
src/features/dashboard/
├── components/
│   ├── DashboardLayout.tsx    # Main layout wrapper
│   ├── TopNav.tsx             # Top navigation bar
│   ├── SideNav.tsx            # Left sidebar navigation
│   ├── MetricsGrid.tsx        # Bento grid of metrics
│   ├── SignalDecomposition.tsx # Live signal chart (Recharts)
│   ├── AuditLogs.tsx          # Activity log list
│   └── ModelRepository.tsx    # Model management table
├── store/
│   └── dashboardStore.ts      # Dashboard state (Zustand)
├── types/
│   └── dashboard.types.ts     # TypeScript interfaces
├── data/
│   └── mockDashboardData.ts   # Mock data for development
└── index.ts                   # Feature exports
```

### Implemented Components

#### ✅ Navigation
- **TopNav**: Fixed top navigation with search, actions, and branding
- **SideNav**: Sidebar navigation with user profile, nav items, and deploy CTA

#### ✅ Metrics Dashboard
- **Mean Latency Card**: Animated bar chart with real-time data
- **Throughput Card**: Range indicator with low/high markers
- **Model Accuracy Card**: Percentage with trend indicator

#### ✅ Data Visualization
- **Signal Decomposition**: Multi-line area chart using Recharts
  - Primary, secondary, tertiary signal traces
  - Gradient fills
  - Responsive container

#### ✅ Activity Monitoring
- **Audit Logs**: Scrollable activity feed
  - Color-coded by type (primary/secondary/tertiary)
  - Timestamp display
  - Animated entry

#### ✅ Model Management
- **Model Repository Table**:
  - Status badges (Deployed/Testing/Idle)
  - Architecture type display
  - Last sync timestamp
  - Usage progress bars
  - Action menus

### State Management

**Zustand Store** (`dashboardStore.ts`):
- Real-time metrics data
- Loading/error states
- Model selection
- Data refresh functionality

### Animations (Framer Motion)

- Staggered fade-in on page load
- Hover scale effects on cards
- Slide-in animations for navigation
- Pulse animations for live indicators
- Progress bar animations

### Design System

**Color Palette** (already in tailwind.config.js):
- Primary: `#ecf7ff` (light cyan)
- Secondary: `#ddb7ff` (light purple)
- Tertiary: `#e1faff` (bright cyan)
- Surface variants: `#0e0e0e` to `#353534`
- On-surface variants: `#c2c7cc`

**Typography**:
- Font Family: Inter (UI), JetBrains Mono (data)
- Tracking: Wide for labels, tight for headings

### Routing

Dashboard accessible at `/dashboard` route

### Build Output (Updated)

```
dist/index.html                          1.38 kB
dist/assets/index.css                   30.41 kB
dist/assets/query-vendor.js             32.66 kB
dist/assets/motion-vendor.js           119.16 kB
dist/assets/react-vendor.js            133.92 kB
dist/assets/index.js                   391.45 kB
```

Total bundle size: ~709 KB (gzipped: ~218 KB) ✅

### Usage

```bash
npm run dev      # Start dev server, visit /dashboard
npm run build    # Build for production
```

### Features Checklist

- [x] Responsive layout (mobile/tablet/desktop)
- [x] Dark mode theme
- [x] Real-time metrics display
- [x] Interactive charts
- [x] Animated transitions
- [x] Type-safe with TypeScript
- [x] State management with Zustand
- [x] Mock data for development
- [x] Production-ready build

---

NEW DESIGN REFERENCES FOR DASHBOARD
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary-fixed": "#c4e8fc",
              "on-secondary-container": "#d6a9ff",
              "primary-container": "#bbdef2",
              "on-error-container": "#ffdad6",
              "surface-dim": "#131313",
              "surface-container-highest": "#353534",
              "on-surface-variant": "#c2c7cc",
              "on-secondary-fixed": "#2c0051",
              "on-secondary": "#490080",
              "surface-variant": "#353534",
              "surface-container-lowest": "#0e0e0e",
              "error-container": "#93000a",
              "tertiary-fixed-dim": "#00daf3",
              "surface-bright": "#3a3939",
              "outline": "#8c9196",
              "on-tertiary": "#00363d",
              "surface-container-high": "#2a2a2a",
              "surface": "#131313",
              "secondary": "#ddb7ff",
              "on-secondary-fixed-variant": "#6900b3",
              "background": "#131313",
              "tertiary-fixed": "#9cf0ff",
              "on-tertiary-fixed": "#001f24",
              "on-primary-fixed-variant": "#294b5b",
              "secondary-fixed": "#f0dbff",
              "on-tertiary-container": "#006875",
              "inverse-surface": "#e5e2e1",
              "on-primary-fixed": "#001e2b",
              "on-tertiary-fixed-variant": "#004f58",
              "secondary-container": "#6f00be",
              "on-primary": "#0f3444",
              "outline-variant": "#42484b",
              "inverse-on-surface": "#313030",
              "secondary-fixed-dim": "#ddb7ff",
              "on-surface": "#e5e2e1",
              "tertiary": "#e1faff",
              "surface-tint": "#a9cbdf",
              "tertiary-container": "#6beaff",
              "primary": "#ecf7ff",
              "primary-fixed-dim": "#a9cbdf",
              "error": "#ffb4ab",
              "on-background": "#e5e2e1",
              "surface-container-low": "#1c1b1b",
              "on-error": "#690005",
              "surface-container": "#201f1f",
              "on-primary-container": "#416374",
              "inverse-primary": "#416374"
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .glass-card {
            background: rgba(28, 27, 27, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(66, 72, 75, 0.2);
        }
        .glow-border:hover {
            border-color: #bbdef2;
            box-shadow: 0 0 15px rgba(187, 222, 242, 0.1);
        }
        .premium-glow {
            box-shadow: 0 0 40px rgba(111, 0, 190, 0.1);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#42484b]/20 shadow-[0_0_15px_rgba(187,222,242,0.05)]">
<div class="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
<div class="text-xl font-bold tracking-tighter text-[#ecf7ff] uppercase font-headline">
                Neural OS
            </div>
<div class="hidden md:flex items-center space-x-8">
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Solutions</a>
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Developers</a>
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Network</a>
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Resources</a>
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#ecf7ff] border-b-2 border-[#ecf7ff] pb-1" href="#">Pricing</a>
</div>
<div class="flex items-center space-x-6">
<div class="hidden lg:flex items-center space-x-4">
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer" data-icon="terminal">terminal</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer" data-icon="settings">settings</span>
</div>
<button class="bg-primary text-on-primary px-5 py-2 rounded-lg font-semibold text-sm hover:scale-95 duration-150 transition-all">
                    Connect Node
                </button>
</div>
</div>
</nav>
<main class="pt-32 pb-20 px-8 max-w-[1440px] mx-auto">
<!-- Hero Section -->
<header class="mb-20">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div class="max-w-3xl">
<div class="flex items-center gap-3 mb-4">
<span class="w-12 h-[1px] bg-secondary"></span>
<span class="text-[0.6875rem] uppercase tracking-[0.2em] text-secondary font-label">Axiom Matrix Protocol</span>
</div>
<h1 class="text-5xl md:text-7xl font-bold tracking-tighter text-primary font-headline leading-tight">
                        Scalable Intelligence.<br/>
<span class="text-on-surface-variant">Deterministic Cost.</span>
</h1>
</div>
<div class="pb-2">
<p class="text-on-surface-variant max-w-xs text-sm leading-relaxed border-l border-outline-variant/30 pl-4">
                        Provisioning neural compute for autonomous agents and planetary-scale data synthesis. Select your operational tier.
                    </p>
</div>
</div>
</header>
<!-- Pricing Bento Grid -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
<!-- Basic Tier -->
<div class="md:col-span-4 glass-card p-8 flex flex-col justify-between group glow-border transition-all duration-300">
<div>
<div class="flex justify-between items-start mb-12">
<div class="p-2 bg-surface-container-highest rounded">
<span class="material-symbols-outlined text-tertiary" data-icon="biotech">biotech</span>
</div>
<span class="text-[0.6875rem] font-label text-outline uppercase tracking-widest">Sandbox</span>
</div>
<h3 class="text-2xl font-bold mb-2">Basic</h3>
<p class="text-on-surface-variant text-sm mb-8">For individual developers and testing environments.</p>
<div class="flex items-baseline gap-1 mb-10">
<span class="text-4xl font-bold text-primary">$0</span>
<span class="text-on-surface-variant text-xs uppercase tracking-tighter">/ per node</span>
</div>
<ul class="space-y-4 mb-12">
<li class="flex items-center gap-3 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-xs text-primary" data-icon="check">check</span>
                            1k Tokens per second
                        </li>
<li class="flex items-center gap-3 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-xs text-primary" data-icon="check">check</span>
                            Shared public nodes
                        </li>
<li class="flex items-center gap-3 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-xs text-primary" data-icon="check">check</span>
                            Community support
                        </li>
<li class="flex items-center gap-3 text-sm text-on-surface-variant opacity-40">
<span class="material-symbols-outlined text-xs" data-icon="lock">lock</span>
                            Advanced Guardrails
                        </li>
</ul>
</div>
<button class="w-full py-4 border border-outline-variant/30 text-sm font-semibold uppercase tracking-widest hover:bg-surface-container-high transition-colors">
                    Initialize Core
                </button>
</div>
<!-- Pro Tier (Highlighted) -->
<div class="md:col-span-4 bg-surface-container-low p-8 flex flex-col justify-between premium-glow relative overflow-hidden border border-secondary/20 transition-all duration-300">
<div class="absolute top-0 right-0 p-4">
<div class="bg-secondary-container text-secondary text-[10px] px-2 py-1 font-bold uppercase tracking-tighter rounded">Recommended</div>
</div>
<div>
<div class="flex justify-between items-start mb-12">
<div class="p-2 bg-secondary/10 rounded">
<span class="material-symbols-outlined text-secondary" data-icon="bolt">bolt</span>
</div>
<span class="text-[0.6875rem] font-label text-secondary uppercase tracking-widest">Enterprise</span>
</div>
<h3 class="text-2xl font-bold mb-2">Pro</h3>
<p class="text-on-surface-variant text-sm mb-8">Production ready clusters for scaling startups.</p>
<div class="flex items-baseline gap-1 mb-10">
<span class="text-4xl font-bold text-primary">$499</span>
<span class="text-on-surface-variant text-xs uppercase tracking-tighter">/ monthly cluster</span>
</div>
<ul class="space-y-4 mb-12">
<li class="flex items-center gap-3 text-sm text-on-surface">
<span class="material-symbols-outlined text-xs text-secondary" data-icon="check" style="font-variation-settings: 'FILL' 1;">check</span>
                            250k Tokens per second
                        </li>
<li class="flex items-center gap-3 text-sm text-on-surface">
<span class="material-symbols-outlined text-xs text-secondary" data-icon="check" style="font-variation-settings: 'FILL' 1;">check</span>
                            3 Dedicated inference nodes
                        </li>
<li class="flex items-center gap-3 text-sm text-on-surface">
<span class="material-symbols-outlined text-xs text-secondary" data-icon="check" style="font-variation-settings: 'FILL' 1;">check</span>
                            24/7 Priority sync
                        </li>
<li class="flex items-center gap-3 text-sm text-on-surface">
<span class="material-symbols-outlined text-xs text-secondary" data-icon="check" style="font-variation-settings: 'FILL' 1;">check</span>
                            SOC2 Security guardrails
                        </li>
</ul>
</div>
<button class="w-full py-4 bg-primary text-on-primary text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity">
                    Deploy Network
                </button>
</div>
<!-- Custom Tier -->
<div class="md:col-span-4 glass-card p-8 flex flex-col justify-between group glow-border transition-all duration-300">
<div>
<div class="flex justify-between items-start mb-12">
<div class="p-2 bg-surface-container-highest rounded">
<span class="material-symbols-outlined text-tertiary-fixed-dim" data-icon="hub">hub</span>
</div>
<span class="text-[0.6875rem] font-label text-outline uppercase tracking-widest">Planetary</span>
</div>
<h3 class="text-2xl font-bold mb-2">Custom</h3>
<p class="text-on-surface-variant text-sm mb-8">Bespoke infrastructure for global conglomerates.</p>
<div class="flex items-baseline gap-1 mb-10">
<span class="text-4xl font-bold text-primary">POA</span>
<span class="text-on-surface-variant text-xs uppercase tracking-tighter">/ price on application</span>
</div>
<ul class="space-y-4 mb-12">
<li class="flex items-center gap-3 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-xs text-primary" data-icon="check">check</span>
                            Unlimited token throughput
                        </li>
<li class="flex items-center gap-3 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-xs text-primary" data-icon="check">check</span>
                            Isolated bare-metal nodes
                        </li>
<li class="flex items-center gap-3 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-xs text-primary" data-icon="check">check</span>
                            Dedicated TAM &amp; Engineering
                        </li>
<li class="flex items-center gap-3 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-xs text-primary" data-icon="check">check</span>
                            Custom protocol layers
                        </li>
</ul>
</div>
<button class="w-full py-4 border border-outline-variant/30 text-sm font-semibold uppercase tracking-widest hover:bg-surface-container-high transition-colors">
                    Contact Synthesis
                </button>
</div>
</div>
<!-- Feature Comparison (Subtle Grid) -->
<section class="mt-40">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-outline-variant/20 pt-16">
<div class="lg:col-span-4">
<h2 class="text-3xl font-bold tracking-tight mb-6">Deep Technical<br/>Infrastructure</h2>
<p class="text-on-surface-variant text-sm leading-relaxed mb-8">
                        The Neural OS isn't just a layer—it's the core. Every node is optimized for ultra-low latency and verifiable computation.
                    </p>
<div class="flex items-center gap-4 group cursor-pointer">
<span class="text-[0.6875rem] font-label uppercase tracking-widest text-primary">View Documentation</span>
<span class="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
<div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 border border-outline-variant/20 overflow-hidden">
<!-- Feature Item -->
<div class="bg-background p-8">
<div class="text-secondary mb-4">
<span class="material-symbols-outlined" data-icon="memory">memory</span>
</div>
<h4 class="font-bold mb-2">Dedicated Inference</h4>
<p class="text-on-surface-variant text-xs leading-relaxed">Guaranteed hardware allocation for your agents. No noisy neighbors, no latency spikes.</p>
</div>
<!-- Feature Item -->
<div class="bg-background p-8">
<div class="text-secondary mb-4">
<span class="material-symbols-outlined" data-icon="security">security</span>
</div>
<h4 class="font-bold mb-2">Deterministic Security</h4>
<p class="text-on-surface-variant text-xs leading-relaxed">Cryptographic proof of execution for every token generated within your matrix.</p>
</div>
<!-- Feature Item -->
<div class="bg-background p-8">
<div class="text-secondary mb-4">
<span class="material-symbols-outlined" data-icon="lan">lan</span>
</div>
<h4 class="font-bold mb-2">Matrix Peering</h4>
<p class="text-on-surface-variant text-xs leading-relaxed">Direct connection to the Axiom backbone for &lt;1ms data transfer between agents.</p>
</div>
<!-- Feature Item -->
<div class="bg-background p-8">
<div class="text-secondary mb-4">
<span class="material-symbols-outlined" data-icon="query_stats">query_stats</span>
</div>
<h4 class="font-bold mb-2">Real-time Telemetry</h4>
<p class="text-on-surface-variant text-xs leading-relaxed">Monitor node health and token consumption via our high-fidelity terminal dashboard.</p>
</div>
</div>
</div>
</section>
<!-- CTA Section -->
<section class="mt-40 relative rounded-xl overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-r from-secondary-container/20 to-transparent z-0"></div>
<img class="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" data-alt="Abstract neural network matrix grid connections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3OYChdTV8EczXHUKaGiYxUaRGwMTY334q5wjIhPJ2u4I_bv6n3QPpoqZwlxsIj3v5EB3efLc5C4nlTl0yBFkccLNumcGWelx9D5DfAjVBVt6EBw38p8ZUkhH6yMcvf9eC4ZkjVard9UwJqBCEXj1eTtCPaIOfovfhu8qQ0sA5-Gu-eqL1j_503RmxVRnJZ5XIwIqnmVGzWvnkl8IMv9MUCsSIevbI21TLrHKuWf-BnWYcwcm3CMy5L_ITLxUrc_IOGSy0kLJyOocY"/>
<div class="relative z-10 p-12 md:p-24 flex flex-col items-center text-center">
<h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to sync with the matrix?</h2>
<div class="flex flex-col sm:flex-row gap-4">
<button class="px-10 py-4 bg-primary text-on-primary font-bold uppercase tracking-widest text-sm hover:scale-95 transition-transform">Initialize Now</button>
<button class="px-10 py-4 border border-outline text-on-surface font-bold uppercase tracking-widest text-sm hover:bg-surface-container transition-colors">Speak to an Architect</button>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="bg-[#0e0e0e] w-full py-12 px-8 border-t border-[#42484b]/10">
<div class="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto">
<div class="mb-6 md:mb-0">
<span class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#bbdef2]">
                    © 2024 Neural OS. All systems operational.
                </span>
</div>
<div class="flex space-x-8">
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 hover:translate-x-1" href="#">Privacy Policy</a>
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 hover:translate-x-1" href="#">Terms of Service</a>
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 hover:translate-x-1" href="#">Status</a>
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 hover:translate-x-1" href="#">Security</a>
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors duration-200 hover:translate-x-1" href="#">Docs</a>
</div>
</div>
</footer>
</body></html>


PAGE 2:
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Network | Neural OS</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary-fixed": "#c4e8fc",
              "on-secondary-container": "#d6a9ff",
              "primary-container": "#bbdef2",
              "on-error-container": "#ffdad6",
              "surface-dim": "#131313",
              "surface-container-highest": "#353534",
              "on-surface-variant": "#c2c7cc",
              "on-secondary-fixed": "#2c0051",
              "on-secondary": "#490080",
              "surface-variant": "#353534",
              "surface-container-lowest": "#0e0e0e",
              "error-container": "#93000a",
              "tertiary-fixed-dim": "#00daf3",
              "surface-bright": "#3a3939",
              "outline": "#8c9196",
              "on-tertiary": "#00363d",
              "surface-container-high": "#2a2a2a",
              "surface": "#131313",
              "secondary": "#ddb7ff",
              "on-secondary-fixed-variant": "#6900b3",
              "background": "#131313",
              "tertiary-fixed": "#9cf0ff",
              "on-tertiary-fixed": "#001f24",
              "on-primary-fixed-variant": "#294b5b",
              "secondary-fixed": "#f0dbff",
              "on-tertiary-container": "#006875",
              "inverse-surface": "#e5e2e1",
              "on-primary-fixed": "#001e2b",
              "on-tertiary-fixed-variant": "#004f58",
              "secondary-container": "#6f00be",
              "on-primary": "#0f3444",
              "outline-variant": "#42484b",
              "inverse-on-surface": "#313030",
              "secondary-fixed-dim": "#ddb7ff",
              "on-surface": "#e5e2e1",
              "tertiary": "#e1faff",
              "surface-tint": "#a9cbdf",
              "tertiary-container": "#6beaff",
              "primary": "#ecf7ff",
              "primary-fixed-dim": "#a9cbdf",
              "error": "#ffb4ab",
              "on-background": "#e5e2e1",
              "surface-container-low": "#1c1b1b",
              "on-error": "#690005",
              "surface-container": "#201f1f",
              "on-primary-container": "#416374",
              "inverse-primary": "#416374"
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .glass-panel {
            background: rgba(28, 27, 27, 0.7);
            backdrop-filter: blur(12px);
        }
        .glow-border {
            box-shadow: 0 0 15px rgba(187, 222, 242, 0.05);
        }
        .active-glow {
            box-shadow: 0 0 15px rgba(187, 222, 242, 0.2);
            border: 1px solid #ecf7ff;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#42484b]/20 shadow-[0_0_15px_rgba(187,222,242,0.05)]">
<div class="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
<div class="text-xl font-bold tracking-tighter text-[#ecf7ff] uppercase font-headline">Neural OS</div>
<div class="hidden md:flex items-center gap-8">
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Solutions</a>
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Developers</a>
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#ecf7ff] border-b-2 border-[#ecf7ff] pb-1" href="#">Network</a>
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Resources</a>
<a class="font-['Inter'] font-semibold tracking-tight text-sm text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Pricing</a>
</div>
<div class="flex items-center gap-4">
<button class="p-2 text-[#c2c7cc] hover:bg-[#1c1b1b] transition-all duration-300 rounded">
<span class="material-symbols-outlined">terminal</span>
</button>
<button class="p-2 text-[#c2c7cc] hover:bg-[#1c1b1b] transition-all duration-300 rounded">
<span class="material-symbols-outlined">settings</span>
</button>
<button class="bg-primary text-on-primary px-4 py-2 text-sm font-semibold rounded hover:scale-95 transition-all duration-150">
                    Connect Node
                </button>
</div>
</div>
</nav>
<main class="pt-24 pb-20 max-w-[1440px] mx-auto px-8">
<!-- Hero Section / Global Visualization -->
<section class="relative mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div class="lg:col-span-5 z-10">
<span class="inline-block bg-surface-container-highest text-secondary border-l-2 border-secondary px-3 py-1 text-[0.6875rem] font-bold tracking-[0.1em] uppercase mb-6">Global Backbone</span>
<h1 class="text-5xl lg:text-7xl font-semibold tracking-tight text-on-surface mb-8 leading-[1.1]">Planetary scale intelligence.</h1>
<p class="text-on-surface-variant text-lg max-w-lg mb-12">Neural OS operates across 48 global regions with sub-millisecond inter-node latency. A self-healing mesh designed for the next epoch of compute.</p>
<div class="grid grid-cols-2 gap-6">
<div class="bg-surface-container-low p-6 rounded-lg border-l border-primary/20">
<div class="text-primary text-3xl font-bold mb-1">99.999%</div>
<div class="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest">Network Uptime</div>
</div>
<div class="bg-surface-container-low p-6 rounded-lg border-l border-secondary/20">
<div class="text-secondary text-3xl font-bold mb-1">&lt;12ms</div>
<div class="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest">Global P99</div>
</div>
</div>
</div>
<div class="lg:col-span-7 relative h-[600px] rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant/10 group">
<div class="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 opacity-50"></div>
<!-- Abstract Map/Node Visualization -->
<div class="absolute inset-0 flex items-center justify-center p-8">
<img alt="Planetary data grid" class="w-full h-full object-cover opacity-60 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-[20s]" data-alt="Abstract 3D planetary digital network mesh with glowing nodes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRh5f_iyOLEQRPLh5mPcLCOtLXwuhtaCb4h0olwDYMz5Y9dKMDrdEi5VZ-_3JYMS1Brql16T9M67jtpIubb_mtXaqekhd4rRxcj47UUsTLERs1iN82rgEplkW_etoZw1Ni5JmbjifpHPs7t47DiGGh-UWqVuN8Msptutcs1huiocwsS9z63TyPQSLOhm4w-B7LLK_bFxCGqEuFOv_Clkpj397kk4wRrSb29gg-O7iszc8DCvThFXCwiSaJnnh4fBubTkrk536MOAsu"/>
<!-- Floating Data Pointers -->
<div class="absolute top-1/4 left-1/3 bg-surface-container-highest/80 backdrop-blur px-3 py-1 rounded-full border border-primary/30 flex items-center gap-2">
<span class="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
<span class="text-[0.6875rem] font-mono text-primary">US-EAST-1: ACTIVE</span>
</div>
<div class="absolute bottom-1/3 right-1/4 bg-surface-container-highest/80 backdrop-blur px-3 py-1 rounded-full border border-secondary/30 flex items-center gap-2">
<span class="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
<span class="text-[0.6875rem] font-mono text-secondary">EU-WEST-2: SYNCING</span>
</div>
<div class="absolute top-1/2 right-1/3 bg-surface-container-highest/80 backdrop-blur px-3 py-1 rounded-full border border-tertiary/30 flex items-center gap-2">
<span class="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span>
<span class="text-[0.6875rem] font-mono text-tertiary">AP-SOUTH-1: PEAK</span>
</div>
</div>
</div>
</section>
<!-- Bento Grid: Status and Metrics -->
<section class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
<!-- Node Latency -->
<div class="md:col-span-2 bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between group hover:border-primary/30 transition-all">
<div>
<div class="flex justify-between items-start mb-8">
<h3 class="text-xl font-semibold">Node Latency</h3>
<span class="material-symbols-outlined text-primary" data-icon="speed">speed</span>
</div>
<div class="space-y-6">
<div class="flex items-center gap-4">
<span class="w-24 text-[0.6875rem] uppercase tracking-tighter text-on-surface-variant">North America</span>
<div class="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary w-[92%]"></div>
</div>
<span class="text-[0.6875rem] font-mono text-primary">0.8ms</span>
</div>
<div class="flex items-center gap-4">
<span class="w-24 text-[0.6875rem] uppercase tracking-tighter text-on-surface-variant">Europe Central</span>
<div class="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary w-[88%]"></div>
</div>
<span class="text-[0.6875rem] font-mono text-primary">1.2ms</span>
</div>
<div class="flex items-center gap-4">
<span class="w-24 text-[0.6875rem] uppercase tracking-tighter text-on-surface-variant">Asia Pacific</span>
<div class="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div class="h-full bg-primary w-[74%]"></div>
</div>
<span class="text-[0.6875rem] font-mono text-primary">4.5ms</span>
</div>
</div>
</div>
<div class="mt-12 text-[0.6875rem] uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
<span class="material-symbols-outlined text-xs" data-icon="info">info</span>
                    Real-time cross-region pings
                </div>
</div>
<!-- Region Availability -->
<div class="bg-surface-container p-8 rounded-xl border border-outline-variant/10 group hover:bg-surface-container-high transition-all">
<h3 class="text-xl font-semibold mb-6">Region Status</h3>
<div class="space-y-4">
<div class="flex justify-between items-center py-2 border-b border-outline-variant/10">
<span class="text-sm font-medium">NYC-01</span>
<span class="text-[0.6875rem] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Operational</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-outline-variant/10">
<span class="text-sm font-medium">LON-04</span>
<span class="text-[0.6875rem] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Operational</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-outline-variant/10">
<span class="text-sm font-medium">TKY-02</span>
<span class="text-[0.6875rem] text-secondary bg-secondary/10 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Maintenance</span>
</div>
<div class="flex justify-between items-center py-2 border-b border-outline-variant/10">
<span class="text-sm font-medium">SIN-01</span>
<span class="text-[0.6875rem] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase font-bold tracking-wider">Operational</span>
</div>
</div>
<button class="w-full mt-8 py-3 text-[0.6875rem] font-bold uppercase tracking-widest border border-outline-variant/30 hover:bg-surface-container-highest transition-colors rounded">View All 48 Regions</button>
</div>
<!-- Compliance Card -->
<div class="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-between overflow-hidden relative">
<div class="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary/10 blur-3xl rounded-full"></div>
<div>
<span class="material-symbols-outlined text-secondary mb-6 text-3xl" data-icon="gavel">gavel</span>
<h3 class="text-xl font-semibold mb-2">Global Compliance</h3>
<p class="text-on-surface-variant text-sm leading-relaxed mb-6">Localized data sovereignty with automated regional routing.</p>
</div>
<div class="flex flex-wrap gap-2">
<span class="text-[0.6875rem] font-mono border border-outline-variant px-2 py-1">GDPR</span>
<span class="text-[0.6875rem] font-mono border border-outline-variant px-2 py-1">SOC2 TYPE II</span>
<span class="text-[0.6875rem] font-mono border border-outline-variant px-2 py-1">HIPAA</span>
<span class="text-[0.6875rem] font-mono border border-outline-variant px-2 py-1">ISO 27001</span>
</div>
</div>
</section>
<!-- Detailed Network Traffic / Uptime -->
<section class="mb-24">
<div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 class="text-3xl font-semibold tracking-tight mb-4">Historical Reliability</h2>
<p class="text-on-surface-variant max-w-md">Neural OS maintains transparent uptime metrics for all core routing protocols and edge gateways.</p>
</div>
<div class="flex gap-4">
<div class="text-right">
<div class="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest mb-1">Average Payload</div>
<div class="text-xl font-bold font-mono">24.8 GB/s</div>
</div>
<div class="text-right border-l border-outline-variant pl-4">
<div class="text-on-surface-variant text-[0.6875rem] uppercase tracking-widest mb-1">Active Nodes</div>
<div class="text-xl font-bold font-mono">12,402</div>
</div>
</div>
</div>
<!-- Graph Placeholder / Axiom Matrix Visual -->
<div class="w-full h-80 bg-surface-container-lowest rounded-xl border border-outline-variant/10 flex items-end p-8 gap-1 relative group overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
<!-- Mock Bar Chart for Uptime -->
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[80%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[75%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[85%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[90%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[88%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[95%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[82%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[89%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[92%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[98%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[91%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[85%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[70%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[75%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[90%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[94%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[88%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[82%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[85%] rounded-t-sm"></div>
<div class="flex-1 bg-primary/20 hover:bg-primary transition-colors h-[92%] rounded-t-sm"></div>
<!-- Overlay Label -->
<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
<div class="bg-surface-container-highest/90 border border-outline-variant/30 px-6 py-3 rounded-lg backdrop-blur">
<span class="text-primary font-mono font-bold">99.9997% AVERAGE RELIABILITY (LAST 365D)</span>
</div>
</div>
</div>
<div class="flex justify-between mt-6 px-2">
<span class="text-[0.6875rem] font-mono text-on-surface-variant">JAN 2023</span>
<span class="text-[0.6875rem] font-mono text-on-surface-variant">PRESENT DAY</span>
</div>
</section>
<!-- Node Distribution CTA -->
<section class="bg-surface-container-low rounded-xl p-12 border border-outline-variant/10 text-center relative overflow-hidden">
<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-tertiary"></div>
<h2 class="text-3xl font-semibold mb-6">Join the Decentralized Fabric</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto mb-10">Neural OS is expanding. Deploy your own high-performance compute node and contribute to the global planetary intelligence engine while earning protocol rewards.</p>
<div class="flex flex-col sm:flex-row gap-4 justify-center">
<button class="bg-primary text-on-primary px-8 py-3 font-semibold rounded hover:scale-105 transition-all">Download Node Client</button>
<button class="bg-transparent border border-outline-variant px-8 py-3 font-semibold rounded hover:bg-surface-container-high transition-all">Read Integration Docs</button>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-12 px-8 border-t border-[#42484b]/10 bg-[#0e0e0e]">
<div class="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto gap-8">
<div class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#bbdef2]">
                © 2024 Neural OS. All systems operational.
            </div>
<div class="flex gap-8">
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors hover:translate-x-1 duration-200" href="#">Privacy Policy</a>
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors hover:translate-x-1 duration-200" href="#">Terms of Service</a>
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors hover:translate-x-1 duration-200" href="#">Status</a>
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors hover:translate-x-1 duration-200" href="#">Security</a>
<a class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#c2c7cc] hover:text-[#ddb7ff] transition-colors hover:translate-x-1 duration-200" href="#">Docs</a>
</div>
</div>
</footer>
</body></html>


PAGE 3

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Resources | Neural OS</title>
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
              "primary-fixed": "#c4e8fc",
              "on-secondary-container": "#d6a9ff",
              "primary-container": "#bbdef2",
              "on-error-container": "#ffdad6",
              "surface-dim": "#131313",
              "surface-container-highest": "#353534",
              "on-surface-variant": "#c2c7cc",
              "on-secondary-fixed": "#2c0051",
              "on-secondary": "#490080",
              "surface-variant": "#353534",
              "surface-container-lowest": "#0e0e0e",
              "error-container": "#93000a",
              "tertiary-fixed-dim": "#00daf3",
              "surface-bright": "#3a3939",
              "outline": "#8c9196",
              "on-tertiary": "#00363d",
              "surface-container-high": "#2a2a2a",
              "surface": "#131313",
              "secondary": "#ddb7ff",
              "on-secondary-fixed-variant": "#6900b3",
              "background": "#131313",
              "tertiary-fixed": "#9cf0ff",
              "on-tertiary-fixed": "#001f24",
              "on-primary-fixed-variant": "#294b5b",
              "secondary-fixed": "#f0dbff",
              "on-tertiary-container": "#006875",
              "inverse-surface": "#e5e2e1",
              "on-primary-fixed": "#001e2b",
              "on-tertiary-fixed-variant": "#004f58",
              "secondary-container": "#6f00be",
              "on-primary": "#0f3444",
              "outline-variant": "#42484b",
              "inverse-on-surface": "#313030",
              "secondary-fixed-dim": "#ddb7ff",
              "on-surface": "#e5e2e1",
              "tertiary": "#e1faff",
              "surface-tint": "#a9cbdf",
              "tertiary-container": "#6beaff",
              "primary": "#ecf7ff",
              "primary-fixed-dim": "#a9cbdf",
              "error": "#ffb4ab",
              "on-background": "#e5e2e1",
              "surface-container-low": "#1c1b1b",
              "on-error": "#690005",
              "surface-container": "#201f1f",
              "on-primary-container": "#416374",
              "inverse-primary": "#416374"
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
            font-size: 20px;
        }
        .bento-glow:hover {
            box-shadow: 0 0 25px rgba(187, 222, 242, 0.15);
            border-color: rgba(221, 183, 255, 0.4);
        }
        .glass-nav {
            backdrop-filter: blur(12px);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-secondary/30">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#42484b]/20 shadow-[0_0_15px_rgba(187,222,242,0.05)]">
<div class="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
<div class="text-xl font-bold tracking-tighter text-[#ecf7ff] uppercase font-headline">
                Neural OS
            </div>
<div class="hidden md:flex items-center gap-8 font-['Inter'] font-semibold tracking-tight text-sm">
<a class="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Solutions</a>
<a class="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Developers</a>
<a class="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Network</a>
<a class="text-[#ecf7ff] border-b-2 border-[#ecf7ff] pb-1" href="#">Resources</a>
<a class="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors" href="#">Pricing</a>
</div>
<div class="flex items-center gap-6">
<div class="hidden lg:flex items-center gap-4">
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all duration-300">terminal</span>
<span class="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-all duration-300">settings</span>
</div>
<button class="bg-primary text-on-primary px-5 py-2 rounded font-semibold text-sm active:scale-95 duration-150 transition-all hover:bg-primary-container">
                    Connect Node
                </button>
</div>
</div>
</nav>
<main class="pt-32 pb-20 px-8 max-w-[1440px] mx-auto">
<!-- Hero Section -->
<header class="mb-20 max-w-3xl">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container-highest border-l border-secondary mb-6">
<span class="text-[0.6875rem] uppercase tracking-[0.1em] font-label text-secondary">Knowledge Base v4.02</span>
</div>
<h1 class="text-5xl md:text-7xl font-semibold tracking-tight text-primary mb-6 font-headline leading-tight">
                Architectural <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">Intelligence</span> Hub
            </h1>
<p class="text-lg text-on-surface-variant leading-relaxed">
                Access technical specifications, deployment frameworks, and market insights for the planetary-scale neural operating system.
            </p>
</header>
<!-- Bento Grid Sections -->
<div class="grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Featured: Documentation (Large Box) -->
<div class="md:col-span-8 group relative overflow-hidden bg-surface-container-low p-8 border border-outline-variant/20 rounded-xl bento-glow transition-all duration-500">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 blur-[100px] pointer-events-none"></div>
<div class="relative z-10 flex flex-col h-full justify-between">
<div>
<div class="flex items-center justify-between mb-8">
<span class="material-symbols-outlined text-primary scale-150" style="font-variation-settings: 'FILL' 1;">menu_book</span>
<span class="label-sm text-[0.6875rem] font-mono tracking-widest text-on-surface-variant">DOCS.ENV_STABLE</span>
</div>
<h2 class="text-3xl font-bold text-on-surface mb-4 font-headline">Developer Documentation</h2>
<p class="text-on-surface-variant max-w-md mb-8">
                            Complete API references, SDK implementations, and system architecture diagrams for building autonomous nodes on Neural OS.
                        </p>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<a class="flex flex-col p-4 bg-surface-container border border-outline-variant/10 rounded hover:border-primary/50 transition-all" href="#">
<span class="text-xs text-primary font-bold mb-1">GETTING STARTED</span>
<span class="text-sm">Quickstart Guide</span>
</a>
<a class="flex flex-col p-4 bg-surface-container border border-outline-variant/10 rounded hover:border-primary/50 transition-all" href="#">
<span class="text-xs text-primary font-bold mb-1">CORE API</span>
<span class="text-sm">Neural Engine v2</span>
</a>
<a class="flex flex-col p-4 bg-surface-container border border-outline-variant/10 rounded hover:border-primary/50 transition-all" href="#">
<span class="text-xs text-primary font-bold mb-1">PROTOCOL</span>
<span class="text-sm">L3 Connectivity</span>
</a>
<a class="flex flex-col p-4 bg-surface-container border border-outline-variant/10 rounded hover:border-primary/50 transition-all" href="#">
<span class="text-xs text-primary font-bold mb-1">SECURITY</span>
<span class="text-sm">Auth Handshakes</span>
</a>
</div>
</div>
</div>
<!-- Blog Highlight (Vertical Tall) -->
<div class="md:col-span-4 group bg-surface-container-low border border-outline-variant/20 rounded-xl bento-glow transition-all overflow-hidden flex flex-col">
<div class="h-48 bg-surface-container-highest relative overflow-hidden">
<img class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" data-alt="Abstract cyan and purple light waves on black background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvfDNEPOVEn-nLjsTqnVVKhHzp7xUPsFkS6EMsDjmysMkeZoUO1kxuDNtCnv-PQF1jR03Qv5vutEqtvWfKrXl9yAQ0mhEID5ptaPbkGD97_SI-0FDmFfNAnvGOsP-NNNWJBS5QbeWCb_W-REuJz_0SXMJsWCdICq16MtpKxjy69HbJXMCd5c-3SjWxHiUTPlCy0fRCE1rxADQHR3Tw4asYjjEPDso_RM71MQXD3BA7uUgCR330RzqE-O9h04peT1aNRN5n8M40Zm0_"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
</div>
<div class="p-8 flex flex-col flex-grow">
<span class="text-[0.6875rem] font-mono text-secondary mb-2 tracking-widest">LATEST UPDATES</span>
<h3 class="text-xl font-bold mb-4 font-headline">Scaling Neural Latency to sub-1ms</h3>
<p class="text-on-surface-variant text-sm leading-relaxed mb-6">
                        Explore our breakthrough in decentralized compute orchestration and how we solved the consensus bottleneck.
                    </p>
<div class="mt-auto flex items-center justify-between">
<span class="text-xs text-outline italic">5 min read</span>
<a class="text-primary flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all" href="#">
                            Read Post <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Whitepapers (Medium Square) -->
<div class="md:col-span-4 bg-surface-container-low p-8 border border-outline-variant/20 rounded-xl bento-glow transition-all">
<div class="mb-6">
<span class="material-symbols-outlined text-secondary text-3xl mb-4">description</span>
<h3 class="text-xl font-bold font-headline mb-3">Whitepapers</h3>
<p class="text-sm text-on-surface-variant">Deep dives into the mathematical foundation of the Neural OS core protocol.</p>
</div>
<ul class="space-y-4">
<li class="flex items-start gap-3 group cursor-pointer">
<span class="material-symbols-outlined text-primary text-sm mt-1">download</span>
<div>
<p class="text-sm group-hover:text-primary transition-colors">Neural OS Consensus V2</p>
<p class="text-[0.6rem] text-outline font-mono">PDF • 4.2 MB</p>
</div>
</li>
<li class="flex items-start gap-3 group cursor-pointer">
<span class="material-symbols-outlined text-primary text-sm mt-1">download</span>
<div>
<p class="text-sm group-hover:text-primary transition-colors">Sharding Intelligence</p>
<p class="text-[0.6rem] text-outline font-mono">PDF • 1.8 MB</p>
</div>
</li>
</ul>
</div>
<!-- Case Studies (Medium Square) -->
<div class="md:col-span-4 bg-surface-container-low p-8 border border-outline-variant/20 rounded-xl bento-glow transition-all relative overflow-hidden">
<div class="relative z-10">
<span class="material-symbols-outlined text-tertiary text-3xl mb-4">insights</span>
<h3 class="text-xl font-bold font-headline mb-3">Case Studies</h3>
<p class="text-sm text-on-surface-variant mb-6">Real-world implementation scenarios across enterprise sectors.</p>
<div class="space-y-3">
<div class="p-3 bg-surface-container-lowest rounded border border-outline-variant/10 flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
<span class="text-sm">Financial Fractals</span>
<span class="text-[0.6rem] bg-on-secondary-fixed-variant/20 text-secondary px-2 py-0.5 rounded uppercase">FinTech</span>
</div>
<div class="p-3 bg-surface-container-lowest rounded border border-outline-variant/10 flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
<span class="text-sm">Bio-Node Systems</span>
<span class="text-[0.6rem] bg-on-secondary-fixed-variant/20 text-secondary px-2 py-0.5 rounded uppercase">Health</span>
</div>
</div>
</div>
<div class="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 blur-3xl rounded-full"></div>
</div>
<!-- Assets / Branding (Medium Horizontal) -->
<div class="md:col-span-4 group relative overflow-hidden bg-[#0e0e0e] p-8 border border-outline-variant/20 rounded-xl bento-glow transition-all">
<div class="flex flex-col h-full">
<span class="material-symbols-outlined text-primary-fixed text-3xl mb-4">palette</span>
<h3 class="text-xl font-bold font-headline mb-3">Asset Library</h3>
<p class="text-sm text-on-surface-variant mb-6">Logo kits, UI components, and brand guidelines for ecosystem partners.</p>
<button class="mt-auto w-full py-3 border border-outline-variant/30 text-xs uppercase tracking-widest font-bold hover:bg-surface-container transition-all flex items-center justify-center gap-2">
                        Open Portal <span class="material-symbols-outlined text-xs">open_in_new</span>
</button>
</div>
</div>
</div>
<!-- Ecosystem Partners Section (Asymmetric) -->
<section class="mt-32">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<h2 class="text-3xl font-bold font-headline mb-6 text-on-surface">Built for the <br/><span class="text-primary">Next Intelligence Era</span></h2>
<p class="text-on-surface-variant leading-relaxed mb-8">
                        Our resources are crafted to accelerate the transition from static cloud services to dynamic neural environments. Every whitepaper and API reference is a building block for the decentralized web.
                    </p>
<div class="flex gap-4">
<div class="flex flex-col">
<span class="text-3xl font-bold text-secondary">240+</span>
<span class="text-[0.6875rem] uppercase tracking-wider text-outline">Open Repo Contributors</span>
</div>
<div class="w-px h-12 bg-outline-variant/30"></div>
<div class="flex flex-col">
<span class="text-3xl font-bold text-secondary">1.2M</span>
<span class="text-[0.6875rem] uppercase tracking-wider text-outline">Documentation Views</span>
</div>
</div>
</div>
<div class="relative bg-surface-container-low rounded-xl border border-outline-variant/20 p-1">
<div class="aspect-video rounded-lg overflow-hidden relative">
<img class="w-full h-full object-cover" data-alt="High tech circuit board with glowing blue lines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPvjLkVjU1o8UnItz1zIzSi17dGp2GOilYh_efJfOoyKYAN-fm-urtCZ5fnphKYZ3A1S1qZIfOGn4pDuRvsUBF4H_0Ygp8tBFGckc0kNJH8Pm384JBWW2xVnHDFCGV7I-ypqge4m738VPcHjy5g7xc9Gl-HE04V_rF89mnlLzdHwSkMbsr--nMxa11d9a7waInQ7p91zWHpeEWEAJvyiHxl55u4ANQ3xa1YQYFoKksxf-Pe8QitNC1fnLMSS9ZPeOaXijD-yqnE0r8"/>
<div class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm group cursor-pointer">
<div class="w-16 h-16 rounded-full border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
</div>
</div>
</div>
<div class="p-6">
<p class="text-xs font-mono text-outline uppercase tracking-[0.2em] mb-2">Internal Simulation v1.0</p>
<p class="text-sm font-medium">Visualizing the Axiom Matrix deployment sequence.</p>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-12 px-8 border-t border-[#42484b]/10 bg-[#0e0e0e]">
<div class="flex flex-col md:flex-row justify-between items-center w-full max-w-[1440px] mx-auto gap-8">
<div class="font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em] text-[#bbdef2]">
                © 2024 Neural OS. All systems operational.
            </div>
<div class="flex gap-8 font-['Inter'] text-[0.6875rem] uppercase tracking-[0.1em]">
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-all duration-200 hover:translate-x-1" href="#">Privacy Policy</a>
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-all duration-200 hover:translate-x-1" href="#">Terms of Service</a>
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-all duration-200 hover:translate-x-1" href="#">Status</a>
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-all duration-200 hover:translate-x-1" href="#">Security</a>
<a class="text-[#c2c7cc] hover:text-[#ddb7ff] transition-all duration-200 hover:translate-x-1" href="#">Docs</a>
</div>
<div class="flex gap-4">
<span class="material-symbols-outlined text-[#c2c7cc] hover:text-[#ecf7ff] cursor-pointer">language</span>
<span class="material-symbols-outlined text-[#c2c7cc] hover:text-[#ecf7ff] cursor-pointer">public</span>
</div>
</div>
</footer>
</body></html>