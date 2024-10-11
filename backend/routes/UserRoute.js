import express from "express";
import {
    GetUser,
    GetUserById,
    CreateUser,
    UpdateUser,
    DeleteUser,
} from "../controllers/Users.js";

// Tidak bisa mengakses users jika belum login
import {verifyUser, adminOnly} from "../middlewares/AuthMidlleware.js";

const router = express.Router();
router.get("/users", verifyUser, adminOnly, GetUser);
router.get("/users/:id", verifyUser, adminOnly, GetUserById);
router.post("/users", verifyUser, adminOnly, CreateUser);
router.patch("/users/:id", verifyUser, adminOnly, UpdateUser);
router.delete("/users/:id", verifyUser, adminOnly, DeleteUser);

export default router;
