export interface MonthlyData {
    month: string;
    spendingInr: number;
    limitInr: number;
    coins: number;
  }
  
  export interface MonthlySpendingData {
    month: string;
    spending: number;
    average: number;
  }
  
  export interface MonthlyWalletData {
    month: string;
    added: number;
    saved: number;
  }
  
  export interface CategoryData {
    name: string;
    value: number;
    coins: number;
    percentage: number;
  }
  
  export interface SavingTip {
    tip: string;
    description: string;
    link: string;
    icon: string;
  }