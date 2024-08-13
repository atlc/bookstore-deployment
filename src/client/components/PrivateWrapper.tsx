import React from "react";
import { TOKEN_KEY } from "../services/fetcher";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
        return <Navigate to={"/login"} />;
    }
    return <>{children}</>;
};

export default PrivateRoute;
