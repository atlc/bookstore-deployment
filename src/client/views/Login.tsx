import React, { useState } from "react";
import { POST, TOKEN_KEY } from "../services/fetcher";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const url = "/auth/login";
        POST(url, { email, password }).then((data) => {
            localStorage.setItem(TOKEN_KEY, data.token);
            alert("You logged in successfully! Go check out some books now");
        });
    };

    return (
        <div>
            <h1>Logging in</h1>

            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
