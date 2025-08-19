import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { CorsOptions } from "cors";
import connectDB from "./config/database";
import messageRoute from "./routes/messageRoute";

dotenv.config();

const app: Application = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors
const corsOption: CorsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

// Routes
app.use("/api/v1/message", messageRoute);

// Start server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
