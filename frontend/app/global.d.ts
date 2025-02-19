export {}; // Ensures this file is treated as a module

declare global {
  interface Window {
    Razorpay?: {
      open: () => void;
    };
  }
}
