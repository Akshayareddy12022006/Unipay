"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter();


  const validatePasscode = (passcode) => {
    const regex = /^\d{6}$/;
    return regex.test(passcode);
  };

  const handleSignIn = async () => {
    // if (!validatePasscode(passcode)) {
    //   alert("Invalid passcode format. Password must be exactly 6 digits.");
    //   return;
    // }
  
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/business/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          businessName: username,
          password: passcode,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Sign in failed");
      }
      console.log("Sign in successful!", data);
      router.push("/Dashboard/BusinessDashboard");
    } catch (error: any) {
      console.error("Sign in failed:", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Business Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2"
          />
          <Input
            placeholder="Password"
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleSignIn} className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
          <div className="mt-4 text-center">
          <p className="text-center text-sm text-gray-600 mt-4">
          New User?{" "}
            <Link href="/auth/BusinessSignup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
