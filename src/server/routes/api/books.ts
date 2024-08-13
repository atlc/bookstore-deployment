import express from "express";
import db from "../../db";
import tokenCheck from "../../middlewares/tokenCheck";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const books = await db.books.getAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Couldn't get all books at this time - internal server error lmao" });
        console.log(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const [book] = await db.books.getOne(id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Couldn't get that book at this time - internal server error lmao" });
        console.log(error);
    }
});

router.post("/", tokenCheck, async (req, res) => {
    try {
        const { title, price, author, category_id } = req.body;

        if (!title || !price || !author || !category_id) {
            return res.status(400).json({ message: "Missing one or more of: 'author', 'title', 'category_id', 'price'" });
        }

        const results = await db.books.create({ title, price, author, category_id });
        res.status(201).json({ message: "HELL YEAH BROTHERRRR", id: results.insertId });
    } catch (error) {
        res.status(500).json({ message: "Couldn't create book at this time - internal server error lmao" });
        console.log(error);
    }
});

router.put("/:id", tokenCheck, async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, price, author, category_id } = req.body;

        if (!title || !price || !author || !category_id) {
            return res.status(400).json({ message: "Missing one or more of: 'author', 'title', 'category_id', 'price'" });
        }

        await db.books.update({ title, price, author, category_id }, id);
        res.status(201).json({ message: "HELL YEAH BROTHERRRR" });
    } catch (error) {
        res.status(500).json({ message: "Couldn't update book at this time - internal server error lmao" });
        console.log(error);
    }
});

router.delete("/:id", tokenCheck, async (req, res) => {
    try {
        const id = Number(req.params.id);
        await db.books.destroy(id);
        res.json({ message: "Sucessfully deleted book" });
    } catch (error) {
        res.status(500).json({ message: "Couldn't get that book at this time - internal server error lmao" });
        console.log(error);
    }
});

export default router;
