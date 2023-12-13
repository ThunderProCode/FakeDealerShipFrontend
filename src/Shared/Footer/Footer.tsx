import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaCopyright } from "react-icons/fa";

const Footer:React.FC = ():JSX.Element => {
    return(
        <footer className="page-footer">
                
            <section className="social-media-container">
                <h3>Find Us:</h3>
                <div className="social-media-icons">
                    <a href="https://www.facebook.com"> <FaFacebook/> </a>
                    <a href="https://www.instagram.com"> <FaInstagramSquare/> </a>
                    <a href="https://www.x.com"> <FaSquareXTwitter/> </a>
                </div>
            </section>
            <section className="copyright-container">
                <p><FaCopyright/> ThunderProCode All Rights Reserved 2023</p>
            </section>
            <section className="footer-links-container">
                <li className="nav-info-link-container">
                    <FaLocationDot className="nav-icon"/>
                    <Link to='/' className="nav-info-link">12 Giggle Gardens, Chuckletopia  98765</Link>
                </li>
            </section>
        </footer>
    );
}

export default Footer;