import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const protect = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, config.jwtSecret);
      req.user = decoded.id;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized, invalid token" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};
