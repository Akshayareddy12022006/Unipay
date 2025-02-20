"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { User, ChevronDown, LogOut, Menu } from "lucide-react"

type UserType = {
  name: string
  type: "student" | "merchant"
} | null


const menuItems = [
    { name: "Home", path: "/LandingPage" },
    { name: "Convert", path: "/ConversionPage" },
    { name: "Stats", path: "/StatsPage" },
    { name: "Wallet", path: "/WalletPage" },
    { name: "Transfer", path: "/contact" }
  ]

interface NavbarProps {
  selectedMenuItem: string
}

export default function Navbar({ selectedMenuItem }: NavbarProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLoginOptions, setShowLoginOptions] = useState(false)
  const [user, setUser] = useState<UserType>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const handleLogin = (type: "student" | "merchant") => {
    setIsLoggedIn(true)
    setUser({ name: `Test ${type}`, type })
    setShowLoginOptions(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              className="rounded"
              src="https://unipay7781.s3.us-east-1.amazonaws.com/logo.png"
              alt="Logo"
              width={40}
              height={40}
            />
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {menuItems.map(({name, path}) => (
              <Link
                key={name}
                href={path}

                className={`text-gray-700 hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 mx-1 ${
                  selectedMenuItem === name ? "bg-black text-white" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* User Dropdown */}
          <div className="hidden md:flex items-center relative">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="text-gray-700 font-medium">{user?.name}</div>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowLoginOptions(!showLoginOptions)}
                  className="text-gray-700 hover:text-gray-900 flex items-center"
                >
                  <User className="h-5 w-5" />
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <AnimatePresence>
                  {showLoginOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-45 bg-white shadow-lg rounded-md z-50"
                    >
                      <button
                        onClick={() => handleLogin("student")}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Login as Student
                      </button>
                      <button
                        onClick={() => handleLogin("merchant")}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        Login as Merchant
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            {menuItems.map(({name, path}) => (
              <Link
                key={name}
                href={path}
                className={`block px-4 py-2 text-gray-700 hover:bg-black hover:text-white ${
                  selectedMenuItem === name ? "bg-black text-white" : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
