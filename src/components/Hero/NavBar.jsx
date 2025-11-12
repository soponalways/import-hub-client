import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    const ListItems = () => {
        return <>
            <li><Link to='all-products'>All Products</Link></li>
            <li><Link to='my-exports'>My Exports</Link></li>
            <li><Link to='my-imports'>My Imports</Link></li>
            <li><Link to='add-export'>Add Export</Link></li>
            <li><Link to='about-us'>About us</Link></li>
        </>
    }; 

    const NavEnd = () => {
        return <>
            <Link to={'/login'} className="btn mr-2">Login</Link>
            <Link to={'/register'} className="btn mr-2">Register</Link>
        </>

    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <ListItems></ListItems>
                            </ul>
                        </div>
                        <Link to={'/'} className="btn btn-ghost text-xl">Import Hub</Link>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <ListItems />
                        </ul>
                    </div>
                </div>
                
                <div className="navbar-end">
                    <NavEnd />
                </div>
            </div>
        </div>
    );
};

export default NavBar;