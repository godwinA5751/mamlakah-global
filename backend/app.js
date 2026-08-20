import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import bioDataRoutes from "./routes/bioDataRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

const allowedOrigins = [
  process.env.DEV_URL,
  process.env.FRONTEND_URL,
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);


app.use(express.json());

app.use("/biodata", bioDataRoutes);
app.use("/auth", authRoutes);


export default app;