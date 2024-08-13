import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "../../db";
import config from "../../config";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        const hashed = bcrypt.hashSync(password, 12);

        const results = await db.users.register({ email, password: hashed });

        const token = jwt.sign({ id: results.insertId, email }, config.jwt.secret, { expiresIn: config.jwt.expiration });

        res.status(201).json({ message: "You successfully registered!", token });
    } catch (error) {
        res.status(500).json({ message: "There was an issue with registering, please try again later" });
        console.log(error);
    }
});

export default router;
