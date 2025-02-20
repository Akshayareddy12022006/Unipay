"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Navbar from "@/components/Navbar";

 
declare global {
  interface Window {
    Razorpay: any;
  }
}
 



function ConversionPage() {
  const [rupees, setRupees] = useState<string>("");
  const [coins, setCoins] = useState<string>("");
  const [agreed, setAgreed] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    if (rupees !== "") {
      const coinValue = Number.parseFloat(rupees) / 100;
      setCoins(coinValue.toFixed(2));
    } else if (coins !== "") {
      const rupeeValue = Number.parseFloat(coins) * 100;
      setRupees(rupeeValue.toFixed(2));
    }
  }, [rupees, coins]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handleRupeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRupees(e.target.value);
    setCoins((Number.parseFloat(e.target.value) / 100).toFixed(2));
  };

  const handleCoinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoins(e.target.value);
    setRupees((Number.parseFloat(e.target.value) * 100).toFixed(2));
  };

  const initiatePayment = async () => {
    try {
      if (!window.Razorpay) {
        console.error("Razorpay SDK not loaded");
        return;
      }

      const response = await fetch("http://localhost:5001/order", {
        method: "POST",
        body: JSON.stringify({
          amount: parseFloat(rupees) * 100,
          currency: "INR"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const order = await response.json();
      const options = {
        key: "rzp_test_EcrX4XU7WDLamn",
        amount: order.amount,
        currency: "INR",
        name: "UniPay",
        description: "Test Transaction",
        order_id: order.id,
        handler: async function (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) {
          const body = { ...response };

          const validateResponse = await fetch("http://localhost:5001/order/validate", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json"
            }
          });
          const jsonResponse = await validateResponse.json();
          console.log(jsonResponse);
        },
        prefill: {
          name: "Sudharshan",
          email: "example@gmail.com",
          contact: "9000000000"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };

       
      const Razorpay = window.Razorpay as any;

      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment initiation failed", error);
    }
  };

  return (
    <>
      <Head>
        <title>Conversion Page</title>
      </Head>
      <Navbar selectedMenuItem="Convert" />
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        <div className="md:w-2/3 p-4 overflow-y-auto h-[50vh] md:h-screen">
          <h2 className="text-2xl font-bold mb-4">UniPay Terms and Conditions</h2>
          <div className="space-y-4 text-md">
            <p>1. <strong>Acceptance of Terms:</strong> By using Razorpay’s payment gateway, you agree to comply with these terms and conditions. If you do not agree, you should not proceed with the payment.</p>
            <p>2. <strong>Payment Processing:</strong> All transactions processed through Razorpay are subject to approval by the respective banks or payment providers. Razorpay is not responsible for payment failures due to incorrect details or insufficient funds.</p>
            <p>3. <strong>Refund Policy:</strong> Refunds are subject to the policies of the merchant or service provider. Razorpay only facilitates payments and does not handle refund requests directly.</p>
            <p>4. <strong>Transaction Fees:</strong> Additional transaction charges may be applied based on the payment method used. These charges are non-refundable.</p>
            <p>5. <strong>Fraud Prevention:</strong> Razorpay reserves the right to reject or hold payments if fraudulent activity is suspected. Users must provide valid identification if requested.</p>
            <p>6. <strong>Data Security:</strong> Razorpay ensures data security through encryption and compliance with PCI-DSS standards. However, users are responsible for safeguarding their credentials.</p>
            <p>7. <strong>Liability Limitation:</strong> Razorpay is only a payment facilitator and is not liable for service issues related to the merchant, delayed transactions, or technical failures beyond its control.</p>
            <p>8. <strong>Chargebacks and Disputes:</strong> Users can raise chargebacks with their banks for unauthorized transactions. Razorpay will work with the merchant and bank to resolve disputes.</p>
            <p>9. <strong>Service Availability:</strong> Razorpay does not guarantee uninterrupted service and may temporarily suspend payment processing for maintenance or security reasons.</p>
            <p>10. <strong>Governing Law:</strong> These terms and conditions are governed by the laws of India, and any disputes will be resolved under Indian jurisdiction.</p>
            <p>11. <strong>User Responsibilities:</strong> Users must ensure that all payment details, including card information and UPI IDs, are accurate and up to date to avoid transaction failures.</p>
            <p>12. <strong>Unauthorized Transactions:</strong> If a user detects an unauthorized transaction, they must report it to their bank and Razorpay immediately for investigation.</p>
            <p>13. <strong>Payment Confirmation:</strong> A payment is considered successful only after the user receives a confirmation from Razorpay and the merchant.</p>
            <p>14. <strong>Merchant Policies:</strong> Users acknowledge that Razorpay is not responsible for the quality, delivery, or refund policies of merchants.</p>
            <p>15. <strong>Auto-Debit & Subscriptions:</strong> Users opting for auto-debit or recurring payments must ensure they have sufficient funds, and cancellations should be done as per the merchant’s policy.</p>
            <p>16. <strong>Account Suspension:</strong> Razorpay reserves the right to suspend or terminate user access if suspicious activity, policy violations, or legal issues are detected.</p>
            <p>17. <strong>Delayed Settlements:</strong> In some cases, payments may be held for verification before settlement. Razorpay will notify users if such action is taken.</p>
            <p>18. <strong>International Transactions:</strong> Users making international payments should ensure their cards or banks support foreign transactions. Additional currency conversion fees may apply.</p>
            <p>19. <strong>Third-Party Services:</strong> Razorpay may integrate with third-party services for fraud detection, analytics, and payment processing. Users agree to these integrations as part of the service.</p>
            <p>20. <strong>Policy Updates:</strong> Razorpay reserves the right to modify these terms and conditions at any time. Users should review the policies periodically to stay informed.</p>
          </div>
        </div>

        <div className="md:w-1/3 p-4 h-[50vh] md:h-screen overflow-y-auto">
          <Card>
            <CardHeader>
              <CardTitle>Convert Money to Coins</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="rupees">Indian Rupees</Label>
                <Input
                  id="rupees"
                  type="number"
                  placeholder="Enter amount in Rupees"
                  value={rupees}
                  onChange={handleRupeeChange}
                />
              </div>
              <div>
                <Label htmlFor="coins">Coins</Label>
                <Input
                  id="coins"
                  type="number"
                  placeholder="Enter number of Coins"
                  value={coins}
                  onChange={handleCoinChange}
                />
              </div>
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">Conversion Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Amount in Rupees: ₹{rupees || "0.00"}</p>
                  <p>Equivalent Coins: {coins || "0.00"}</p>
                  <p>Conversion Rate: 1 Coin = ₹100</p>
                </CardContent>
              </Card>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the Terms and Conditions
                </label>
              </div>
              <Button disabled={!agreed || !razorpayLoaded} className="w-full" onClick={initiatePayment}>
                {razorpayLoaded ? "Proceed to Convert" : "Loading Payment..."}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ConversionPage;
