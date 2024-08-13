import React, { useState } from "react";
import { POST, TOKEN_KEY } from "../services/fetcher";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        const url = "/auth/register";
        POST(url, { email, password }).then((data) => {
            localStorage.setItem(TOKEN_KEY, data.token);
            alert("You registered successfully! Go check out some books now");
        });
    };

    return (
        <div>
            <h1>Registering</h1>
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
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;
