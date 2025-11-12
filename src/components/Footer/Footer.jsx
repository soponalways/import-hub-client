import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content p-4 md:p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-bold mb-2 text-primary">Import Export Co.</h2>
                    <p className="text-sm">
                        Empowering global trade through trusted import & export solutions.
                        Connecting businesses worldwide with ease and reliability.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to={'/'} className="link link-hover">Home</Link></li>
                        <li><Link to={'/about-us'} className="link link-hover">About Us</Link></li>
                        <li><Link to={'/my-imports'} className="link link-hover">My Imports</Link></li>
                        <li><Link to={'/my-exports'} className="link link-hover">My Exports</Link></li>
                        <li><Link to={'/add-export'} className="link link-hover">Add Export</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Contact Info</h3>
                    <p>Email: <a className="link link-hover">support@importexport.com</a></p>
                    <p>Phone: +880 1884 953 018</p>
                    <p>Address: Rangpur, Bangladesh</p>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" className="btn btn-circle btn-outline text-xl"><FaFacebookF /></a>
                        <a href="#" className="btn btn-circle btn-outline text-xl"><FaTwitter /></a>
                        <a href="#" className="btn btn-circle btn-outline text-xl"><FaLinkedinIn /></a>
                        <a href="#" className="btn btn-circle btn-outline text-xl"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <hr className="my-8 border-base-300" />

            {/* Copyright Section */}
            <div className="text-center">
                {/* | Developed by <span className="font-semibold text-primary">Sopon islam</span> */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Import Export Co. | All Rights Reserved 
                </p>
            </div>
        </footer>
    );
};

export default Footer;
