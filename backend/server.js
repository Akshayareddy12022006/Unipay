import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import businessRoutes from "./routes/businessRoutes.js";

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Unipay API is running...");
});

app.use('/api/users', userRoutes);
app.use('/api/business',businessRoutes);

app.post('/order', async (request, response) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET
    });

    const { amount, currency } = request.body;
    const options = {
      amount: amount, // Amount in paise
      currency: currency,
      receipt: `receipt#${new Date().getTime()}`
    };
    
    const order = await razorpay.orders.create(options);

    if (!order) {
      return response.status(500).send("Error");
    }

    response.json(order);
  } catch (err) {
    console.log(err);
    response.status(500).send("Error");
  }
});

app.post('/order/validate', async (request, response) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = request.body;
  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");

  if (digest !== razorpay_signature) {
    return response.status(400).json({ msg: "Transaction is not legit!" });
  }

  response.json({
    msg: "Success!",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id
  });
});

app.listen(PORT, () => {
  console.log("Listening on Port", PORT)
})

