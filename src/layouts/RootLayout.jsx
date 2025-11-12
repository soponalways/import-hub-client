import React from 'react';
import NavBar from '../components/Hero/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;