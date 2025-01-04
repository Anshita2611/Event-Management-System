import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(
  cors({
    origin: ["https://vercel.com/anshita-jains-projects/event-management-system-v7wd"],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Call the dbConnection function to establish the connection
dbConnection();

app.use("/api/v1/message", messageRouter);

export default app;
