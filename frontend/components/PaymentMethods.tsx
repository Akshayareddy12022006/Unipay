import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Smartphone, Landmark } from "lucide-react"

export default function PaymentMethods() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods Accepted</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-center">
            <CreditCard className="mr-2 h-5 w-5 text-muted-foreground" />
            <span>Credit/Debit Card</span>
          </li>
          <li className="flex items-center">
            <Smartphone className="mr-2 h-5 w-5 text-muted-foreground" />
            <span>UPI</span>
          </li>
          <li className="flex items-center">
            <Landmark className="mr-2 h-5 w-5 text-muted-foreground" />
            <span>Net Banking</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}

