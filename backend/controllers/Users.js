import Users from "../models/UsersModel.js";
import argon2 from "argon2";

export const GetUser = async (req, res) => {
    try {
        const response = await Users.findAll({
            attributes: ["uuid", "name", "email", "role"],
        });
        res.status(200).json(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
};

export const GetUserById = async (req, res) => {
    try {
        const response = await Users.findOne({
            attributes: ["uuid", "name", "email", "role"],
            where: {
                uuid: req.params.id,
            },
        });
        res.status(200).json(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
};

export const CreateUser = async (req, res) => {
    const { name, email, password, confPassword, role } = req.body;
    if (password !== confPassword)
        return res
            .status(400)
            .json({ msg: "password dan confPassword tidak cocok" });
    const HashPassword = await argon2.hash(password);
    try {
        await Users.create({
            name: name,
            email: email,
            password: HashPassword,
            role: role,
        });
        res.status(201).json({ msg: "Register berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const UpdateUser = async (req, res) => {
    const user = await Users.findOne({
        attributes: ["uuid", "id", "name", "email", "password", "role"],
        where: {
            uuid: req.params.id,
        },
    });
    if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
    const { name, email, password, confPassword, role } = req.body;


    // Proses hash password
    let hashPassword;

    if (password === "" || password === null) {
        hashPassword = user.password;
    } else {
        hashPassword = await argon2.hash(password);
    }
    if (password !== confPassword)
        return res
            .status(400)
            .json({ msg: "password dan confPassword tidak cocok" });


    // Proses update yang sesuai user.id
    try {
        await Users.update(
            {
                name: name,
                email: email,
                password: hashPassword,
                role: role,
            },
            {
                where: {
                    id: user.id,
                },
            }
        );
        res.status(200).json({ msg: "User Updated" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const DeleteUser = async (req, res) => {
    const user = await Users.findOne({
        attributes: ["uuid", "id", "name", "email", "role"],
        where: {
            uuid: req.params.id,
        },
    });
    if (!user) return res.status(404).json({ msg: "User Tidak Ditemukan" });
    try {
        await Users.destroy(
            {
                where: {
                    id: user.id,
                },
            }
        );
        res.status(200).json({ msg: "User Deleted" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
