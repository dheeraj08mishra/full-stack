import express from "express";
import {
  getUserDetails,
  deleteUserDetails,
  updateUserDetails,
  createUserDetails,
} from "../controller/userController.js";
const router = express.Router();
/// Get user route
router.get("/:userId", getUserDetails); // default route

/// {post user route}
router.post("/", createUserDetails);

// {put user route}
router.put("/:userId", updateUserDetails);
/// {delete user route}
router.delete("/:userId", deleteUserDetails);

export default router;
