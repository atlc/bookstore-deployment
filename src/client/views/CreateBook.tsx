import React, { useState, useEffect } from "react";
import { Category } from "../types";
import { GET, POST } from "../services/fetcher";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
    const yeehaw = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);
    const [categoryId, setCategoryId] = useState(0);

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        GET("/api/categories").then(setCategories);
    }, []);

    const handleButtonClick = () => {
        POST("/api/books", { title, author, price, category_id: categoryId }).then((data) => {
            yeehaw(`/books/${data.id}`);
        });
    };

    return (
        <div>
            <h1>Create Book!</h1>
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

export default CreateBook;
