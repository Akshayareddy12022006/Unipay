import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsAndConditions() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Terms and Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>UniCoins are a virtual currency and have no cash value.</li>
          <li>The conversion rate of 100 INR to 1 UniCoin is subject to change without notice.</li>
          <li>UniCoins cannot be transferred between users or redeemed for cash.</li>
          <li>We reserve the right to modify or terminate the UniCoin program at any time.</li>
          <li>Fraudulent activities will result in the forfeiture of all UniCoins and possible account suspension.</li>
          <li>Users are responsible for maintaining the security of their account and UniCoins.</li>
          <li>All transactions are final and non-refundable.</li>
        </ul>
      </CardContent>
    </Card>
  )
}

