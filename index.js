// Import necessary modules using ES Module syntax
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoDB } from "./Database/config.js"; // Add ".js" extension here
import router from "./Routers/authRouter.js";

// Load environment variables from the .env file
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*", // Fixed origin, use "*" or specific URL instead of "#"
    credentials: true,
  })
);

// DB connectivity
MongoDB();

// Access the environment variables
const port = process.env.PORT || 4000;
const message = process.env.MESSAGE || "Hello, World!";

// default Routes
app.get("/", (req, res) => {
  res.status(200).send(message);
});

//API Routes

app.use("/api/auth", router);

// Listen
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
