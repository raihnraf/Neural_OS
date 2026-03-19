# NEURAL_OS Portfolio

A high-performance portfolio landing page built with React, Vite, and Tailwind CSS. Designed with a sleek, futuristic dark theme inspired by modern AI/tech companies.

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **State Management** | Zustand |
| **Data Fetching** | TanStack Query |
| **Icons** | Lucide React |
| **Deployment** | Vercel |

## ✨ Features

- **🎨 Custom Design System**: Complete NEURAL_OS theme with 40+ custom colors
- **🎯 Feature-Based Architecture**: Scalable folder structure for easy maintenance
- **⚡ Performance Optimized**: 
  - Code splitting with manual chunks
  - Image optimization with vite-plugin-imagemin
  - Tree-shakable components
- **🎭 Smooth Animations**: Framer Motion for buttery-smooth interactions
- **📱 Fully Responsive**: Mobile-first design
- **🌙 Dark Theme**: Professional dark mode by default

## 📁 Project Structure

```
src/
├── assets/          # Images, SVGs, global styles
├── components/      # Reusable UI components (Button, Badge, etc.)
├── data/            # Mock data and constants
├── features/        # Feature-based modules
│   ├── hero/              # Hero section with network animation
│   ├── product-showcase/  # Bento grid product cards
│   ├── developer-terminal/# Code terminal section
│   └── metrics/           # Statistics section
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── store/           # Zustand state management
├── utils/           # Helper functions
└── App.tsx          # Main app component
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd neural-os-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Customization

### Theme Colors

All theme colors are defined in `tailwind.config.js`. Modify the `colors` object to customize:

```js
colors: {
  "primary": "#ecf7ff",
  "secondary": "#ddb7ff",
  "tertiary": "#e1faff",
  // ... more colors
}
```

### Adding New Features

1. Create a new folder in `src/features/`
2. Add components, hooks, and types
3. Export from `index.ts`
4. Import in your pages

## 🚀 Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 3: Vercel Dashboard

1. Install Vercel CLI
2. Run `vercel login`
3. Run `vercel --prod`

## 📊 Performance Tips

- **Images**: Use WebP format, optimize with `vite-plugin-imagemin`
- **Fonts**: Preload critical fonts (already configured)
- **Code Splitting**: Automatic with Vite + manual chunks configured
- **CSS**: Tailwind purges unused styles automatically

## 🎯 Best Practices Implemented

✅ **Industry-standard folder structure**
✅ **TypeScript for type safety**
✅ **Component-based architecture**
✅ **Reusable UI components**
✅ **State management with Zustand**
✅ **Optimized for Vercel free tier**
✅ **SEO-friendly meta tags**
✅ **Accessibility considerations**

## 📝 Environment Variables

Create a `.env` file for API keys:

```env
VITE_API_KEY=your_api_key_here
VITE_SITE_URL=https://your-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - feel free to use this project for your portfolio!

## 🙏 Acknowledgments

- Design inspired by modern AI/tech landing pages
- Built with best practices from the React community
- Optimized for Vercel's edge network

---

**Built with ❤️ using React + Vite + Tailwind CSS**
