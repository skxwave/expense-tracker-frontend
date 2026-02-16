# 💰 Expense Tracker

A modern, feature-rich expense tracking application built with React, TypeScript, and Material-UI. Track your finances, manage accounts, set goals, and visualize your spending habits.

## ✨ Features

### 📊 Dashboard
- **Revenue Charts** - Visual overview of your income and expenses
- **Recent Transactions** - Quick view of latest transactions
- **Payment Gateways** - Track payments across different platforms
- **Goals Overview** - Monitor your financial goals at a glance

### 💳 Accounts Management
- Create and manage multiple accounts
- View account details with balance information
- Edit and delete accounts
- Support for various account types (Digital Wallets, Bank Accounts, etc.)

### 🎯 Goals Tracking
- Set financial goals with target amounts
- Track progress with visual indicators
- Monitor goal completion percentage
- View detailed goal information

### 📈 Transactions
- Record and categorize transactions
- View transaction history
- Track spending patterns
- Detailed transaction analytics

### 👤 User Management
- Secure authentication (Login/Register)
- Protected routes with ProtectedRoute component
- User profile management
- Account settings

### 🌓 Theme Support
- Light and Dark mode toggle
- Theme persistence
- Material-UI theme integration

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **UI Library**: Material-UI (MUI) v7
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **Forms**: React Hook Form
- **HTTP Client**: Axios
- **Charts**: Chart.js, ApexCharts
- **Build Tool**: Vite
- **Styling**: Emotion (MUI styled)
- **Icons**: React Icons

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── api/              # API calls (auth, axios config)
├── components/       # Reusable UI components
│   ├── account/     # Account-related components
│   ├── auth/        # Authentication components
│   ├── base/        # Base UI components (Button, Input, etc.)
│   ├── dashboard/   # Dashboard components
│   └── goals/       # Goals components
├── pages/           # Route pages
├── context/         # React context (if used)
├── hooks/           # Custom hooks
├── redux/           # Redux store and slices
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── assets/          # Static assets
```

## 🔐 Authentication

The app includes protected routes that require authentication. Users must log in to access the dashboard and other features.

## 📝 License

<TODO>

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
