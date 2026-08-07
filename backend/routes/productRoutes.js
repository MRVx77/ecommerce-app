import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
import { globalRateLimit } from "../middleware/globalRatelimiter.js";

const proudctRouter = express.Router();

proudctRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct,
);
proudctRouter.post("/remove", adminAuth, removeProduct);
proudctRouter.post(
  "/single",
  globalRateLimit(60, 15 * 60 * 1000, "product-single"),
  singleProduct,
);
proudctRouter.get("/list", globalRateLimit(60, 15 * 60 * 1000, "product-list"), listProducts);

export default proudctRouter;
