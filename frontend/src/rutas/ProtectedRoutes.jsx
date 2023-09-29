import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    const [isAuth, setAuth] = useState(false);

    return isAuth ? <Outlet /> : <Navigate to='/login' />
}