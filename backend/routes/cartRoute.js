import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";
import { globalRateLimit } from "../middleware/globalRatelimiter.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getUserCart);
cartRouter.post(
  "/add",
  authUser,
  globalRateLimit(30, 15 * 60 * 1000),
  addToCart,
);
cartRouter.post(
  "/update",
  authUser,
  globalRateLimit(30, 15 * 60 * 1000),
  updateCart,
);

export default cartRouter;
