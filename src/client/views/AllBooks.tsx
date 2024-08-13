import React, { useState, useEffect } from "react";
import { GET } from "../services/fetcher";
import { Book } from "../types";
import { Link } from "react-router-dom";

const AllBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        GET("/api/books").then((books) => setBooks(books));
    }, []);

    return (
        <h1>
            {books.map((book) => (
                <div key={`book-${book.id}-overview`}>
                    <h2>
                        "{book.title}" - {book.author}
                    </h2>
                    <p>
                        See my <Link to={`/books/${book.id}`}>details here</Link>
                    </p>
                </div>
            ))}
        </h1>
    );
};

export default AllBooks;
