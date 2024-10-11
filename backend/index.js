import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import UserRoute from "./routes/UserRoute.js"
import ProductRoute from "./routes/ProductRoute.js"
// import db from "./config/database.js";
dotenv.config();

const app = express();

// migrate DB otomatis
// (async ()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}))

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.use(express.json());
app.use(UserRoute)
app.use(ProductRoute)

app.listen(process.env.APP_PORT, () => {
    console.log(
        `SERVER RUNNING ON PORT http://localhost/${process.env.APP_PORT}`
    );
});
