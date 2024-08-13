import React, { useState, useEffect } from "react";
import { GET } from "../services/fetcher";
import { Book } from "../types";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState<Book>();

    useEffect(() => {
        GET(`/api/books/${id}`).then((book) => setBook(book));
    }, [id]);

    return (
        <div>
            <h1>
                "{book?.title}", by {book?.author}
            </h1>
            <p>
                {book?.category_name}, ${book?.price}
            </p>
            <Link to={`/books/${id}/edit`}>Edit me</Link>
        </div>
    );
};

export default BookDetails;
