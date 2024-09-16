import express from "express";
import {
  forgotPassword,
  loginUser,
  register,
  resetPassword,
} from "../Controllers/authControllers.js";
import {
  createUser,
  deleteUser,
  editUser,
} from "../Controllers/userController.js";

const router = express.Router();

// User registration route
router.post("/register", register);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/create", createUser);
router.get("/get-user", editUser);
router.put("/update", editUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
