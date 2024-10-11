import Users from "../models/UsersModel.js"
import argon2 from "argon2"

export const GetUser = async(req,res) => {
    try {
        const response = await Users.findAll();
        res.status(200).json(response)
    } catch (error) {
        response.status(500).json({msg : error.message})
    }
}

export const GetUserById = async(req,res) => {
    try {
        const response = await Users.findOne({
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        response.status(500).json({msg : error.message})
    }
}

export const CreateUser = (req,res) => {
    
}

export const UpdateUser = async(req,res) => {
    const { name, email, password, confPassword, role} = req.body
    if(password !== confPassword) return res.status(400).json({msg: "password dan confPassword tidakk cocok"});
    const HashPassword = await argon2.hash(password)
    try {
        await Users.create({
            name : name,
            email : email,
            password : HashPassword,
            role : role
        });
        res.status(201).json({msg: "Register berhasil"})
    } catch (error) {
        response.status(400).json({msg : error.message})
    }
}

export const DeleteUser = (req,res) => {
    
}