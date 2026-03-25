# NEURAL OS
The Data Engine for Secure AI

A modern dashboard interface for AI security monitoring and infrastructure management. Built as a frontend-only prototype with mock data.

**License:** MIT  
**Built with:** React TypeScript

## 🔗 Live Demo

[https://neural-os-zeta.vercel.app/](https://neural-os-zeta.vercel.app/)

## 📸 Screenshots

### Dashboard
![Dashboard](public/screenshots/Screenshot%20from%202026-03-25%2007-11-24.png)

### Workspace
![Workspace](public/screenshots/Screenshot%20from%202026-03-25%2007-11-50.png)

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Language | TypeScript |
| Routing | React Router v6 |
| State Management | Zustand |
| Styling | Tailwind CSS |
| UI Components | Radix UI |
| Animations | Framer Motion |
| Icons | Lucide React |
| Build Tool | Vite |
| Deployment | Vercel |

**Note:** This is a frontend-only prototype. All data is stored locally in mock data files - no backend or API connection required.

## ✨ Key Features

### 🎨 User Experience
- **Responsive Design** - Adapts to different screen sizes
- **Dark Theme** - Built-in dark mode with Tailwind CSS custom properties
- **Smooth Animations** - UI transitions powered by Framer Motion
- **Sidebar Navigation** - Multiple pages with consistent layout

### 📄 Pages
- **Dashboard** - Overview with metrics and activity feed
- **Workspace** - Workspace management interface
- **Vault** - File vault UI component
- **Files** - File browser interface
- **Settings** - Settings page layout
- **Audit** - Audit logs display
- **Security** - Security rules interface
- **History** - History/chronological view

### ⚡ Technical
- **TypeScript** - Type-safe codebase
- **Mock Data** - All data is local (no API required)
- **Component Architecture** - Reusable UI components
- **State Management** - Zustand for settings store

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/raihnraf/Neural_OS.git

# Navigate to project directory
cd Scale

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, fonts, global styles)
├── components/      # Reusable UI components
│   ├── layout/      # Layout components (Sidebar, Header, etc.)
│   └── ui/          # Base UI components (Buttons, Cards, etc.)
├── data/            # Mock data and constants
├── features/        # Feature-specific components
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries and configurations
├── pages/           # Route-based page components
│   ├── DashboardPage.tsx
│   ├── WorkspacePage.tsx
│   ├── VaultPage.tsx
│   ├── FilesPage.tsx
│   ├── SettingsPage.tsx
│   ├── AuditPage.tsx
│   ├── SecurityPage.tsx
│   └── HistoryPage.tsx
├── store/           # Zustand state management
├── utils/           # Helper functions and utilities
├── App.tsx          # Main application component
├── routes.tsx       # Route configuration
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Raihan Rafi**

- 💼 **LinkedIn:** [linkedin.com/in/raihnraf](https://linkedin.com/in/raihnraf)
- 🐙 **GitHub:** [@raihnraf](https://github.com/raihnraf)

## 🙏 Acknowledgments

- **Radix UI** for accessible UI primitives
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide Icons** for beautiful icon set

---

*Built with ❤️ using React + TypeScript + Vite + Tailwind CSS*
