import { MonthlyData, MonthlySpendingData, MonthlyWalletData, CategoryData, SavingTip } from '../types/finance';

export const monthlyData: MonthlyData[] = [
  { month: 'Jan', spendingInr: 24000, limitInr: 30000, coins: 240 },
  { month: 'Feb', spendingInr: 32000, limitInr: 30000, coins: 320 },
  { month: 'Mar', spendingInr: 28000, limitInr: 30000, coins: 280 },
  { month: 'Apr', spendingInr: 26000, limitInr: 30000, coins: 260 }
];

export const monthlySpendingData: MonthlySpendingData[] = [
  { month: 'Jan', spending: 24000, average: 25000 },
  { month: 'Feb', spending: 32000, average: 26000 },
  { month: 'Mar', spending: 28000, average: 27000 },
  { month: 'Apr', spending: 26000, average: 26500 },
  { month: 'May', spending: 29000, average: 27000 },
  { month: 'Jun', spending: 23000, average: 26000 }
];

export const monthlyWalletData: MonthlyWalletData[] = [
  { month: 'Jan', added: 30000, saved: 6000 },
  { month: 'Feb', added: 35000, saved: 3000 },
  { month: 'Mar', added: 32000, saved: 4000 },
  { month: 'Apr', added: 33000, saved: 7000 },
  { month: 'May', added: 34000, saved: 5000 },
  { month: 'Jun', added: 31000, saved: 8000 }
];

export const categoryData: CategoryData[] = [
  { name: 'Essential Needs', value: 15000, coins: 150, percentage: 50 },
  { name: 'Lifestyle', value: 9000, coins: 90, percentage: 30 },
  { name: 'Savings', value: 6000, coins: 60, percentage: 20 }
];

export const savingTips: SavingTip[] = [
  {
    tip: "Use the 50/30/20 budgeting rule",
    description: "Split your coins: 50 for needs, 30 for wants, 20 for savings",
    link: "/StatsPage",
    icon: "💰"
  },
  {
    tip: "Daily coin tracking",
    description: "Track coins spent daily to build better spending habits",
    link: "/StatsPage",
    icon: "📊"
  },
  {
    tip: "Automated coin savings",
    description: "Set up auto-conversion of INR to coins for savings",
    link: "/StatsPage",
    icon: "🏦"
  },
  {
    tip: "Zero-coin entertainment",
    description: "Find free activities to save your coins for important goals",
    link: "/StatsPage",
    icon: "🎯"
  }
];

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];