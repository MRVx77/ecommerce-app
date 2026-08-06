import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  getUserProfile,
} from "../controllers/userController.js";
import { globalRateLimit } from "../middleware/globalRatelimiter.js";

const userRouter = express.Router();

userRouter.post("/register", globalRateLimit(5, 15 * 60 * 1000), registerUser);
userRouter.post("/login", globalRateLimit(10, 15 * 60 * 1000), loginUser);
userRouter.post("/admin", globalRateLimit(5, 15 * 60 * 1000), adminLogin);
userRouter.get("/profile", getUserProfile);

export default userRouter;
