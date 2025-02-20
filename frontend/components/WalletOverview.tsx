import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Coins } from "lucide-react"

export default function WalletOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Coins className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-2xl font-bold">1,234</span>
          </div>
          <span className="text-sm text-muted-foreground">UniCoins</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">This Month</span>
            <div className="flex items-center text-green-600">
              <ArrowUpRight className="mr-1 h-4 w-4" />
              <span>+250 UniCoins</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">This Week</span>
            <div className="flex items-center text-red-600">
              <ArrowDownRight className="mr-1 h-4 w-4" />
              <span>-50 UniCoins</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

