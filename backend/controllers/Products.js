import Products from "../models/ProductModel.js";
import Users from "../models/UsersModel.js";

export const GetProducts = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {
            response = await Products.findAll({
                include: [
                    {
                        model: Users,
                    },
                ],
            });
        } else {
            response = await Products.findAll({
                where: {
                    userId: req.userId,
                },
                include: [
                    {
                        model: Users,
                    },
                ],
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const GetProductsById = (req, res) => {};

export const CreateProducts = async (req, res) => {
    const { name, price } = req.body;
    try {
        await Products.create({
            name: name,
            price: price,
            userId: req.userId,
        });
        res.status(201).json({msg: "Product created succesfully"})
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const UpdateProducts = (req, res) => {};

export const DeleteProducts = (req, res) => {};
