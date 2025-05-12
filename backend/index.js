import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import dbConnection from "./config/dbConnect.js";
dbConnection();
import authRouter from "./routes/authRouter.js";
import cors from "cors";
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
