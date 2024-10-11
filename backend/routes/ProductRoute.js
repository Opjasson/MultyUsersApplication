import express from "express"
import {
    GetProducts,
    GetProductsById,
    CreateProducts,
    UpdateProducts,
    DeleteProducts
} from "../controllers/Products.js"

import { verifyUser } from "../middlewares/AuthMidlleware.js"

const router = express.Router()
router.get("/product", verifyUser,GetProducts)
router.get("/product/:id", verifyUser,GetProductsById)
router.post("/product", verifyUser,CreateProducts)
router.patch("/product/:id", verifyUser,UpdateProducts)
router.delete("/product/:id", verifyUser,DeleteProducts)




export default router;