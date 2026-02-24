import { Routes, Route } from 'react-router-dom'
import AuthForm from '@/pages/AuthForm'
import Layout from '@/components/Layout'
import Dashboard from '@/pages/Dashboard'
import Accounts from '@/pages/Accounts'
import AddAccount from '@/pages/AddAccount'
import AccountDetail from '@/pages/AccountDetail'
import EditAccount from '@/pages/EditAccount'
import Goals from '@/pages/Goals'
import Transactions from '@/pages/Transactions'
import Profile from '@/pages/Profile'
import Settings from '@/pages/Settings'
import AddTransaction from '@/pages/AddTransaction'
import AddGoal from '@/pages/AddGoal'
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthForm />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Accounts */}
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/accounts/:id" element={<AccountDetail />} />
          <Route path="/accounts/:id/edit" element={<EditAccount />} />
          <Route path="/accounts/add-account" element={<AddAccount />} />

          <Route path="/goals" element={<Goals />} />
          <Route path="/goals/:id" element={<Goals />} />
          <Route path="/goals/:id/edit" element={<Goals />} />
          <Route path="/goals/add-goal" element={<AddGoal />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/add-transaction" element={<AddTransaction />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
