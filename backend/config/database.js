import { Sequelize } from "sequelize";

const db = new Sequelize('multyUsers', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;