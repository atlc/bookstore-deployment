import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "../../db";
import config from "../../config";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const [user] = await db.users.find("email", email);

        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        const passwordsMatched = bcrypt.compareSync(password, user.password);

        if (!passwordsMatched) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user.id, email }, config.jwt.secret, { expiresIn: config.jwt.expiration });
        res.status(201).json({ message: "You successfully logged in!", token });
    } catch (error) {
        res.status(500).json({ message: "There was an issue with logging in, please try again later" });
        console.log(error);
    }
});

export default router;
