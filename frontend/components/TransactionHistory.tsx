"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import TransactionTooltip from "./TransactionTooltip"

interface Transaction {
  id: string
  amount: number
  date: string
  merchant?: string
  upiId?: string
}

interface TransactionHistoryProps {
  title: string
  type: "deposit" | "spend"
}

const mockTransactions: Transaction[] = [
  { id: "1", amount: 100, date: "2023-06-01", merchant: "Bank Transfer", upiId: "user@bank" },
  { id: "2", amount: 50, date: "2023-06-02", merchant: "Online Store", upiId: "store@upi" },
  { id: "3", amount: 75, date: "2023-06-03", merchant: "Mobile Recharge", upiId: "telecom@upi" },
]

export default function TransactionHistory({ title, type }: TransactionHistoryProps) {
  const [hoveredTransaction, setHoveredTransaction] = useState<Transaction | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>{type === "deposit" ? "Deposited" : "Spent"}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((transaction) => (
              <TableRow
                key={transaction.id}
                onMouseEnter={(e) => {
                  setHoveredTransaction(transaction)
                  setTooltipPosition({
                    x: e.clientX,
                    y: e.clientY,
                  })
                }}
                onMouseLeave={() => {
                  setHoveredTransaction(null)
                  setTooltipPosition(null)
                }}
                className="relative"
              >
                <TableCell className="py-2">{transaction.date}</TableCell>
                <TableCell className="py-2">
                  {transaction.amount} {type === "deposit" ? "INR" : "UniCoins"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      {/* Tooltip is outside the table */}
      {hoveredTransaction && tooltipPosition && (
        <div
          className="absolute z-50"
          style={{
            top: tooltipPosition.y + 10,
            left: tooltipPosition.x + 10,
          }}
        >
          <TransactionTooltip transaction={hoveredTransaction} />
        </div>
      )}
    </Card>
  )
}
