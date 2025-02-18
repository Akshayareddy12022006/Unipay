// app/business-signin/page.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define the form schema using Zod
const formSchema = z.object({
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function BusinessSignInPage() {
  const router = useRouter(); // Initialize the router
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true); // Set loading state to true
    try {
      // Simulate an API call for authentication (replace with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate 1-second delay

      // Check if phone number and password are valid (replace with your actual validation logic)
      if (values.phoneNumber === "1234567890" && values.password === "password123") {
        console.log("Sign in successful!");
        router.push("/business-dashboard"); // Redirect to the business dashboard
      } else {
        alert("Invalid phone number or password. Please try again.");
      }
    } catch (error) {
      console.error("Sign in failed:", error);
      alert("Sign in failed. Please try again.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Business Sign In</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Phone Number Field */}
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}