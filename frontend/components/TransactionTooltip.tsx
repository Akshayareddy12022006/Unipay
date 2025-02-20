interface Transaction {
    id: string
    amount: number
    date: string
    merchant?: string
    upiId?: string
  }
  
  interface TransactionTooltipProps {
    transaction: Transaction
  }
  
  export default function TransactionTooltip({ transaction }: TransactionTooltipProps) {
    return (
      <div className="p-3 bg-white border shadow-lg rounded-lg text-sm">
        <p>
          <strong>Date:</strong> {transaction.date}
        </p>
        <p>
          <strong>Amount:</strong> {transaction.amount}
        </p>
        {transaction.merchant && (
          <p>
            <strong>Merchant:</strong> {transaction.merchant}
          </p>
        )}
        {transaction.upiId && (
          <p>
            <strong>UPI ID:</strong> {transaction.upiId}
          </p>
        )}
      </div>
    )
  }
  