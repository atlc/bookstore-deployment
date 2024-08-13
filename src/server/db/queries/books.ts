import { Query } from "../connection";
import { Book, NewBook } from "../../types";

const getAll = () => Query<Book[]>("SELECT * FROM Books");
const getOne = (id: number) => Query<Book[]>("SELECT * FROM Books WHERE id=?", [id]);
const create = (newBook: NewBook) => Query("INSERT INTO Books SET ?", [newBook]);
const update = (updatedBook: NewBook, id: number) => Query("UPDATE Books SET ? WHERE id=?", [updatedBook, id]);
const destroy = (id: number) => Query<Book[]>("DELETE FROM Books WHERE id=?", [id]);

export default {
    getAll,
    getOne,
    create,
    update,
    destroy,
};
