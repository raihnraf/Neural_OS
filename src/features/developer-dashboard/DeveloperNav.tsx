import { Search, Terminal, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

export function DeveloperNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-[#42484b]/20 shadow-[0_0_15px_rgba(187,222,242,0.05)]">
      <div className="flex justify-between items-center h-16 px-6 max-w-[1440px] mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-[#ecf7ff] font-headline hover:text-primary transition-colors">
          Neural OS
        </Link>

        <div className="hidden md:flex items-center gap-8 font-['Inter'] font-semibold tracking-tight text-sm">
          <Link
            to="/solutions"
            className="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors"
          >
            Solutions
          </Link>
          <Link
            to="/developers"
            className="text-[#ecf7ff] border-b-2 border-[#bbdef2] pb-1"
          >
            Developers
          </Link>
          <Link
            to="/network"
            className="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors"
          >
            Network
          </Link>
          <Link
            to="/resources"
            className="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors"
          >
            Resources
          </Link>
          <Link
            to="/pricing"
            className="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/dashboard"
            className="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors"
          >
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center bg-surface-container-lowest px-3 py-1.5 rounded-lg border border-outline-variant/20">
            <Search className="w-4 h-4 text-[#c2c7cc] mr-2" />
            <input
              className="bg-transparent border-none text-xs focus:ring-0 text-on-surface-variant w-32 placeholder-[#c2c7cc]/50"
              placeholder="Search API..."
              type="text"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors active:scale-95 transition-transform">
              <Terminal className="w-5 h-5" />
            </button>
            <button className="text-[#c2c7cc] hover:text-[#ecf7ff] transition-colors active:scale-95 transition-transform">
              <Settings className="w-5 h-5" />
            </button>
            <button className="bg-primary text-on-primary px-4 py-2 text-xs font-bold rounded-lg hover:shadow-[0_0_15px_rgba(187,222,242,0.2)] transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
