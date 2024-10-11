import { Sequelize, UUID } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

// Membuat table DB dengan nama users
const Users = db.define(
    "users",
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    },
    {
        freezeTableName: true, // Opsi tambahan agar nama tabel dalam database tetap sama dengan nama model
    }
);

export default Users;
