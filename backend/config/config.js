const config = {
    port: process.env.PORT || 5001,
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/auth-app',
  };
  
  export default config;