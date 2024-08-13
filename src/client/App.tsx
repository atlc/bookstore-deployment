import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import AllBooks from "./views/AllBooks";
import CreateBook from "./views/CreateBook";
import BookDetails from "./views/BookDetails";
import EditBook from "./views/EditBook";
import PrivateWrapper from "./components/PrivateWrapper";

const App = () => {
    return (
        <BrowserRouter>
            <div className="bg-secondary">
                <Link
                    className="btn btn-danger m-2"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="btn btn-danger m-2"
                    to="/register"
                >
                    Register
                </Link>
                <Link
                    className="btn btn-danger m-2"
                    to="/login"
                >
                    Login
                </Link>
                <Link
                    className="btn btn-danger m-2"
                    to="/books"
                >
                    All Books
                </Link>
                <Link
                    className="btn btn-danger m-2"
                    to="/books/new"
                >
                    Create Books
                </Link>
            </div>

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/books"
                    element={<AllBooks />}
                />
                <Route
                    path="/books/new"
                    element={
                        <PrivateWrapper>
                            <CreateBook />
                        </PrivateWrapper>
                    }
                />
                <Route
                    path="/books/:id"
                    element={<BookDetails />}
                />
                <Route
                    path="/books/:id/edit"
                    element={
                        <PrivateWrapper>
                            <EditBook />
                        </PrivateWrapper>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
