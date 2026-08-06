import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
  verifyRazorpay,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
import { globalRateLimit } from "../middleware/globalRatelimiter.js";

const orderRouter = express.Router();

//admin features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//payment features
orderRouter.post(
  "/place",
  authUser,
  globalRateLimit(5, 60 * 60 * 1000),
  placeOrder,
);
orderRouter.post(
  "/stripe",
  authUser,
  globalRateLimit(5, 60 * 60 * 1000),
  placeOrderStripe,
);
orderRouter.post(
  "/razorpay",
  authUser,
  globalRateLimit(5, 60 * 60 * 1000),
  placeOrderRazorpay,
);

//user features
orderRouter.post("/userorders", authUser, userOrders);

// verify stripe payment
orderRouter.post(
  "/verifyStripe",
  authUser,
  globalRateLimit(10, 15 * 60 * 1000),
  verifyStripe,
);
orderRouter.post(
  "/verifyRazorpay",
  authUser,
  globalRateLimit(10, 15 * 60 * 1000),
  verifyRazorpay,
);

export default orderRouter;
