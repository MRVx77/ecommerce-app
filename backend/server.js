import express from "express";
import cors from "cors";
import "dotenv/config";
import { connect } from "mongoose";
import connnectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import proudctRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartroute.js";
import orderRoute from "./routes/orderRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
connnectDb();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", proudctRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send("api is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
