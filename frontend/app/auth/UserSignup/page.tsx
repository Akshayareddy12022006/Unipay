"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const router = useRouter();

  // const handleSignUp = async () => {
  //   setIsLoading(true); // Set loading state to true
  //   try {
  //     // Simulate an API call for signup (replace with your actual API call)
  //     await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1-second delay

  //     // Check if passwords match
  //     if (password !== confirmPassword) {
  //       alert("Passwords do not match!");
  //       return;
  //     }

  //     console.log("Signing up with:", username, phone, password);
  //     router.push("/Dashboard/UserDashboard"); // Redirect to the dashboard
  //   } catch (error) {
  //     console.error("Sign up failed:", error);
  //     alert("Sign up failed. Please try again.");
  //   } finally {
  //     setIsLoading(false); // Reset loading state
  //   }
  // };


  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await fetch("http://localhost:5001/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, phone, password }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Sign-up failed");
      }
  
      console.log("User signed up:", data);
      router.push("/Dashboard/UserDashboard"); // Redirect on success
    } catch (error: any) {
      console.error("Sign up failed:", error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Username Field */}
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2"
          />

          {/* Phone Number Field */}
          <Input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mb-2"
          />

          {/* Password Field */}
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
          />

          {/* Confirm Password Field */}
          <Input
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-2"
          />

          {/* Sign Up Button */}
          <Button onClick={handleSignUp} className="w-full" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
          <div className="mt-4 text-center">
          <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
            <Link href="/auth/UserSignin" className="text-blue-500 hover:underline">
               Sign in
            </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}