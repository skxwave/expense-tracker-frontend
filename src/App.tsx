import { Routes, Route } from 'react-router-dom'
import Login from '@/pages/Login'
import Layout from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
import Accounts from '@/pages/Accounts'
import Goals from '@/pages/Goals'
import Transactions from '@/pages/Transactions'
import Profile from '@/pages/Profile'
import Settings from '@/pages/Settings'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App
