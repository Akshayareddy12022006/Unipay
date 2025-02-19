"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Coins, TrendingDown, Wallet, ArrowDownRight, ArrowUpRight, IndianRupee, ExternalLink } from 'lucide-react';
import { monthlySpendingData, monthlyWalletData, categoryData, savingTips, COLORS } from '../Data/financeData';
import type { SavingTip } from '../types/finance';

const FinanceDashboard: React.FC = () => {
  return (
    <>
    <Navbar selectedMenuItem="Stats" />
    <div className="p-6 space-y-6 bg-gray-50">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <IndianRupee className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Spending</p>
                <h3 className="text-2xl font-bold">₹26,000</h3>
                <p className="text-sm text-gray-600">(260 coins)</p>
                <p className="text-sm text-green-600 flex items-center">
                  <ArrowDownRight className="h-4 w-4" />
                  13% vs last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Coins className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Balance</p>
                <h3 className="text-2xl font-bold">260 coins</h3>
                <p className="text-sm text-gray-600">(₹26,000)</p>
                <p className="text-sm text-red-600 flex items-center">
                  <ArrowDownRight className="h-4 w-4" />
                  40 coins spent
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <TrendingDown className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Monthly Limit</p>
                <h3 className="text-2xl font-bold">300 coins</h3>
                <p className="text-sm text-gray-600">(₹30,000)</p>
                <p className="text-sm text-yellow-600">40 coins remaining</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Wallet className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Savings Target</p>
                <h3 className="text-2xl font-bold">50 coins</h3>
                <p className="text-sm text-gray-600">(₹5,000)</p>
                <p className="text-sm text-green-600 flex items-center">
                  <ArrowUpRight className="h-4 w-4" />
                  20 coins saved
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Spending Line Graph */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Spending Trends</CardTitle>
          <CardDescription>
            Track your monthly spending patterns against moving average
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 lg:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={monthlySpendingData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  label={{ value: 'Months', position: 'bottom', offset: 0 }}
                />
                <YAxis 
                  label={{ value: 'Amount (₹)', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value: number) => `₹${value/1000}k`}
                />
                <Tooltip 
                  formatter={(value: number) => [`₹${value.toLocaleString()} (${value/100} coins)`, 'Amount']}
                  labelFormatter={(label: string) => `Month: ${label}`}
                />
                <Legend verticalAlign="top" height={36}/>
                <Line 
                  type="monotone" 
                  dataKey="spending" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  name="Monthly Spending"
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="average" 
                  stroke="#82ca9d" 
                  strokeWidth={2}
                  name="Moving Average"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Wallet Bar Graph */}
      <Card>
        <CardHeader>
          <CardTitle>Wallet Additions vs Savings</CardTitle>
          <CardDescription>
            Monthly comparison of wallet deposits and achieved savings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 lg:h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={monthlyWalletData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month"
                  label={{ value: 'Months', position: 'bottom', offset: 0 }}
                />
                <YAxis 
                  label={{ value: 'Amount (₹)', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value: number) => `₹${value/1000}k`}
                />
                <Tooltip 
                  formatter={(value: number) => [`₹${value.toLocaleString()} (${value/100} coins)`, 'Amount']}
                  labelFormatter={(label: string) => `Month: ${label}`}
                />
                <Legend verticalAlign="top" height={36}/>
                <Bar 
                  dataKey="added" 
                  fill="#8884d8" 
                  name="Added to Wallet"
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="saved" 
                  fill="#82ca9d" 
                  name="Amount Saved"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Category Spending Pie Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Spending by Category</CardTitle>
          <CardDescription>
            Breakdown of your spending across different categories in both INR and coins
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }: { name: string; percentage: number }) => `${name} (${percentage}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number, name: string, props: any) => [
                      `₹${value.toLocaleString()} (${value/100} coins)`,
                      props.payload.name
                    ]}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Essential Needs (50%)</h4>
                <p className="text-sm text-gray-600 mb-2">₹15,000 (150 coins)</p>
                <ul className="list-disc pl-4 text-sm text-gray-600">
                  <li>Groceries and household items</li>
                  <li>Utilities and bills</li>
                  <li>Transportation</li>
                  <li>Healthcare</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">Lifestyle (30%)</h4>
                <p className="text-sm text-gray-600 mb-2">₹9,000 (90 coins)</p>
                <ul className="list-disc pl-4 text-sm text-gray-600">
                  <li>Entertainment and dining</li>
                  <li>Shopping and personal care</li>
                  <li>Hobbies and recreation</li>
                  <li>Subscriptions</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-700 mb-2">Savings (20%)</h4>
                <p className="text-sm text-gray-600 mb-2">₹6,000 (60 coins)</p>
                <ul className="list-disc pl-4 text-sm text-gray-600">
                  <li>Emergency fund</li>
                  <li>Future goals</li>
                  <li>Investments</li>
                  <li>Debt reduction</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Smart Saving Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Saving Tips</CardTitle>
          <CardDescription>
            Expert tips to help you save more coins effectively
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {savingTips.map((tip: SavingTip, index: number) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-3 animate-bounce">{tip.icon}</div>
                <h3 className="font-semibold mb-2">{tip.tip}</h3>
                <p className="text-sm text-gray-600 mb-4">{tip.description}</p>
                <a 
                  href={tip.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  );
};

export default FinanceDashboard;