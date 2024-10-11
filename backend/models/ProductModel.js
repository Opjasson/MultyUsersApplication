import { Sequelize, UUID } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;
import Users from "./UsersModel.js";

// Membuat table DB dengan nama users
const Products = db.define(
    "product",
    {
        uuid: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 100],
            },
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        freezeTableName: true, // Opsi tambahan agar nama tabel dalam database tetap sama dengan nama model
    }
);

// relational table agar user bisa uploud lebih dari 1 product
Users.hasMany(Products);
Products.belongsTo(Users, { foreignKey: "userId" });

export default Products;
