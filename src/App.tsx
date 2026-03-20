import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HomePage from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import DevelopersPage from './pages/DevelopersPage'
import NetworkPage from './pages/NetworkPage'
import PricingPage from './pages/PricingPage'
import DashboardPage from './pages/Dashboard'
import ResourcesPage from './pages/ResourcesPage'
import './App.css'

const QUERY_STALE_TIME = 1000 * 60 * 5 // 5 minutes
const QUERY_RETRY_COUNT = 1

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QUERY_STALE_TIME,
      retry: QUERY_RETRY_COUNT,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
