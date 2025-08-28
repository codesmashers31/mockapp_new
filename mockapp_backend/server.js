import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";   

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000; 
// Connect Database
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running successfully on http://localhost:${port}`);
});
