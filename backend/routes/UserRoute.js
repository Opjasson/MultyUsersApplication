import express from "express"
import {
    GetUser,
    GetUserById,
    CreateUser,
    UpdateUser,
    DeleteUser
} from "../controllers/Users.js"

const router = express.Router()
router.get("/users",GetUser)
router.get("/users/:id",GetUserById)
router.post("/users",CreateUser)
router.patch("/users/:id",UpdateUser)
router.delete("/users/:id",DeleteUser)




export default router;