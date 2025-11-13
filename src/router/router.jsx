import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/Login/ForgotPassword";
import Register from "../pages/Register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import AddExports from "../pages/AddExports/AddExports";
import AllProducts from "../pages/AllProducts/AllProducts";
import MyExports from "../pages/MyExports/MyExports";
import MyImports from "../pages/MyImports/MyImports";
import AboutUs from "../pages/AboutUs/AboutUs";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

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
                path: '/register', 
                Component: Register
            }, 
            {
                path: "/forgot-password", 
                Component: ForgotPassword
            }, 
            {
                path: '/add-export', 
                element: <PrivateRoute>
                    <AddExports/>
                </PrivateRoute>
            }, 
            {
                path: '/all-products', 
                Component: AllProducts
            }, 
            {
                path: '/my-exports', 
                element: <PrivateRoute>
                    <MyExports></MyExports>
                </PrivateRoute>
            }, 
            {
                path: "/my-imports", 
                element: <PrivateRoute>
                    <MyImports></MyImports>
                </PrivateRoute>
            }, 
            {
                path: "/about-us", 
                Component: AboutUs
            }, 
            {
                path: '/productDetails/:id',
                Component: ProductDetails
            }
        ]
    }
]); 

export default router; 