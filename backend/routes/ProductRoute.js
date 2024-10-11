import express from "express"
import {
    GetProducts,
    GetProductsById,
    CreateProducts,
    UpdateProducts,
    DeleteProducts
} from "../controllers/Products.js"

const router = express.Router()
router.get("/product",GetProducts)
router.get("/product/:id",GetProductsById)
router.post("/product",CreateProducts)
router.patch("/product/:id",UpdateProducts)
router.delete("/product/:id",DeleteProducts)




export default router;