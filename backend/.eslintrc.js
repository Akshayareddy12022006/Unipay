module.exports = {
    extends: [
      'eslint:recommended', 
      'plugin:prettier/recommended', // Enables Prettier integration
      'next', // Next.js specific linting
      'next/core-web-vitals' // Core Web Vitals for Next.js
    ],
    rules: {
      // Add any custom rules you want for Express (Node) or Next.js (React)
    },
    env: {
      node: true, // Enable Node.js environment for backend (Express)
      browser: true, // Enable Browser environment for frontend (Next.js)
      es2021: true, // Modern JavaScript features
    },
  };
  