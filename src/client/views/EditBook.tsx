import React, { useState, useEffect } from "react";
import { Book, Category } from "../types";
import { GET, POST, PUT } from "../services/fetcher";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);
    const [categoryId, setCategoryId] = useState(0);

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        GET<Book>(`/api/books/${id}`).then((book) => {
            setTitle(book.title);
            setAuthor(book.author);
            setPrice(book.price);
            setCategoryId(book.category_id);
        });

        GET("/api/categories").then(setCategories);
    }, []);

    const handleButtonClick = () => {
        PUT("/api/books/" + id, { title, author, price, category_id: categoryId });
    };

    return (
        <div>
            <h1>Updating Book #{id}!</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
            />

            <select
                value={categoryId}
                onChange={(e) => setCategoryId(Number(e.target.value))}
            >
                <option value={0}>Please select a category</option>
                {categories.map((cat) => (
                    <option value={cat.id}>{cat.name}</option>
                ))}
            </select>
            <button onClick={handleButtonClick}>Add Book Pls</button>
        </div>
    );
};

export default EditBook;
