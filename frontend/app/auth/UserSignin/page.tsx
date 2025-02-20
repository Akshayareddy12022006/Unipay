"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter();

  // const handleSignIn = async () => {
  //   setIsLoading(true); // Set loading state to true
  //   try {
  //     // Simulate an API call for authentication (replace with your actual API call)
  //     await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1-second delay

  //     // Check if username and passcode are valid (replace with your actual validation logic)
  //     if (username === "user123" && passcode === "password123") {
  //       console.log("Sign in successful!");
  //       router.push("/Dashboard/UserDashboard"); // Redirect to the user dashboard
  //     } else {
  //       alert("Invalid username or passcode. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Sign in failed:", error);
  //     alert("Sign in failed. Please try again.");
  //   } finally {
  //     setIsLoading(false); // Reset loading state
  //   }
  // };


  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Adjust the payload below to match what your backend expects
        body: JSON.stringify({ username: username, password: passcode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Sign in failed");
      }

      console.log("Sign in successful!", data);
      // Optionally, you might want to store a JWT token in local storage or cookie here:
      // localStorage.setItem("token", data.token);
      router.push("/Dashboard/UserDashboard");
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
          <div className="mt-4 text-center">
          <p className="text-center text-sm text-gray-600 mt-4">
          New User?{" "}
            <Link href="/auth/UserSignup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
