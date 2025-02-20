"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CoinConversionCard() {
  const [inr, setInr] = useState("")
  const [unicoins, setUnicoins] = useState("")

  const handleConvert = () => {
    const coins = Number.parseFloat(inr) / 100
    setUnicoins(coins.toFixed(2))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Check Conversion Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label htmlFor="inr" className="block text-sm font-medium text-gray-700">
              INR Amount
            </label>
            <Input
              id="inr"
              type="number"
              value={inr}
              onChange={(e) => setInr(e.target.value)}
              placeholder="Enter INR amount"
            />
          </div>
          <Button onClick={handleConvert}>Convert</Button>
          {unicoins && (
            <div className="mt-4">
              <p className="text-lg font-semibold">{unicoins} UniCoins</p>
              <p className="text-sm text-muted-foreground">Conversion rate: 100 INR = 1 UniCoin</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

