import express from "express";
import {
  forgotPassword,
  loginUser,
  register,
  resetPassword,
} from "../Controllers/authControllers.js";

const router = express.Router();

// User registration route
router.post("/register", register);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
