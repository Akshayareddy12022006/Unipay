"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ConversionPage() {
  const [rupees, setRupees] = useState<string>("");
  const [coins, setCoins] = useState<string>("");
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (rupees !== "") {
      const coinValue = Number.parseFloat(rupees) / 100;
      setCoins(coinValue.toFixed(2));
    } else if (coins !== "") {
      const rupeeValue = Number.parseFloat(coins) * 100;
      setRupees(rupeeValue.toFixed(2));
    }
  }, [rupees, coins]);

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
        handler: async function (response) {
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

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment initiation failed", error);
    }
  };

  return (
    <>
      <Head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </Head>

      <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-b from-white to-gray-900">
        <div className="md:w-2/3 p-4 overflow-y-auto h-[50vh] md:h-screen">
          <h2 className="text-2xl font-bold mb-4">Razorpay Terms and Conditions</h2>
          <div className="space-y-4 text-md">
          <p>
            1. Acceptance of Terms: By using Razorpays services, you agree to be bound by these Terms and Conditions.
          </p>
          <p>2. Service Description: Razorpay provides payment gateway services to facilitate online transactions.</p>
          <p>3. Account Registration: Users must provide accurate and complete information when creating an account.</p>
          <p>
            4. Payment Processing: Razorpay processes payments on behalf of merchants and is not responsible for the
            goods or services provided by merchants.
          </p>
          <p>5. Fees: Razorpay charges fees for its services as outlined in the pricing section of the website.</p>
          <p>6. Prohibited Activities: Users must not use Razorpay for any illegal or unauthorized purpose.</p>
          <p>7. Data Privacy: Razorpay collects and processes personal data in accordance with its Privacy Policy.</p>
          <p>
            8. Intellectual Property: All content and trademarks on the Razorpay website are the property of Razorpay or
            its licensors.
          </p>
          <p>
            9. Limitation of Liability: Razorpay is not liable for any indirect, incidental, or consequential damages
            arising from the use of its services.
          </p>
          <p>10. Termination: Razorpay reserves the right to terminate or suspend accounts at its discretion.</p>
          <p>11. Governing Law: These terms are governed by the laws of India.</p>
          <p>
            12. Changes to Terms: Razorpay may modify these terms at any time, with changes effective upon posting to
            the website.
          </p>
          <p>13. Contact Information: For any questions about these terms, please contact Razorpay support.</p>
          <p>
            14. Refunds and Cancellations: Refund and cancellation policies are set by individual merchants and not by
            Razorpay.
          </p>
          <p>15. Security: Users are responsible for maintaining the confidentiality of their account information.</p>
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
              <Button disabled={!agreed} className="w-full" onClick={initiatePayment}>
                Proceed to Convert
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ConversionPage;
