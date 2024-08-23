import dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";

import connectDB from "../config/db";
import appRoutes from "../routes/index";

dotenv.config();

const app = express();

// Cross-Origin Resource Sharing
const allowedOrigins: string[] = [
  "https://store101-frontend.vercel.app",
  "https://store101-admin.vercel.app",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5173",
];

const options: CorsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};

app.use(cors(options));

// db connection
connectDB();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));

// routes
app.get("/", (req: Request, res: Response) => {
  res.json({ success: true, message: "Hello! Welcome to Store101😊" });
});
app.use("/api/v1", appRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
