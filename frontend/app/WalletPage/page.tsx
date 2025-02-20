import WalletOverview from "@/components/WalletOverview"
import CoinStatsCard from "@/components/CoinStatsCard"
import CoinConversionCard from "@/components/CoinConversionCard"
import SavingsDisplay from "@/components/SavingsDisplay"
import TransactionHistory from "@/components/TransactionHistory"
import PaymentMethods from "@/components/PaymentMethods"
import RecentActivity from "@/components/RecentActivity"
import TermsAndConditions from "@/components/TermsAndConditions"

import Navbar from "@/components/Navbar"

export default function WalletPage() {
    return (
    <>
        <Navbar selectedMenuItem="Wallet" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Wallet</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <WalletOverview />
          <CoinStatsCard />
          <CoinConversionCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SavingsDisplay />
          <PaymentMethods />
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Transaction History</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TransactionHistory title="Money to Coins" type="deposit" />
            <TransactionHistory title="Coins Spent" type="spend" />
          </div>
        </div>
        <RecentActivity />
        <TermsAndConditions />
      </div>
      </>
    )
}

