"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter();

  const handleSignIn = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      // Simulate an API call for authentication (replace with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1-second delay

      // Check if username and passcode are valid (replace with your actual validation logic)
      if (username === "user123" && passcode === "password123") {
        console.log("Sign in successful!");
        router.push("/userdashboard"); // Redirect to the user dashboard
      } else {
        alert("Invalid username or passcode. Please try again.");
      }
    } catch (error) {
      console.error("Sign in failed:", error);
      alert("Sign in failed. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            placeholder="Roll No"
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
        </CardContent>
      </Card>
    </div>
  );
}