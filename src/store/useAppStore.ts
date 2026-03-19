import { create } from 'zustand'

interface AppState {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  activeSection: string
  setActiveSection: (section: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
}))
