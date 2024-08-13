import express from "express";
import db from "../../db";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const categories = await db.categories.getAll();
        res.json(categories);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Can't get all categories, RIP" });
    }
});

export default router;
