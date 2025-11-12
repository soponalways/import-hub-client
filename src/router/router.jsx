import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/Login/ForgotPassword";

const router = createBrowserRouter([
    {
        path: '/', 
        Component: RootLayout, 
        children: [
            {
                index: true, 
                Component: Home
            }, 
            {
                path: '/login', 
                Component: Login
            }, 
            {
                path: "/forgot-password", 
                Component: ForgotPassword
            }
        ]
    }
]); 

export default router; 