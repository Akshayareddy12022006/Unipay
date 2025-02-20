"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserIcon, BriefcaseIcon } from "lucide-react";

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  
  // Determine if we're on a signup or signin page
  const isSignUp = pathname.includes("SignUp");
  const actionText = isSignUp ? "Sign Up" : "Sign In";
  
  // Determine which user type is active (if any)
  const isStudent = pathname.includes("User");
  const isBusiness = pathname.includes("Business");
  
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">{actionText} as</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button 
                variant={isStudent ? "default" : "outline"}
                className="flex-1 h-20 flex flex-col items-center justify-center gap-2"
                asChild
              >
                <Link href={isSignUp ? "/auth/UserSignUp" : "/auth/UserSignin"}>
                  <UserIcon className="h-6 w-6" />
                  <span>Student</span>
                </Link>
              </Button>
              
              <Button 
                variant={isBusiness ? "default" : "outline"}
                className="flex-1 h-20 flex flex-col items-center justify-center gap-2"
                asChild
              >
                <Link href={isSignUp ? "/auth/BusinessSignUp" : "/auth/BusinessSignin"}>
                  <BriefcaseIcon className="h-6 w-6" />
                  <span>Business</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {children}
    </div>
  );
}