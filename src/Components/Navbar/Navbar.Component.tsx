import React from 'react';
import {NavLink,Link, Outlet} from 'react-router-dom';
import Logo from '../../assets/svgs/Logo.svg';
import './Navbar.Component.Styles.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";


const Navbar: React.FC = (): JSX.Element => {

    const getClassName = ({isActive}: {isActive:boolean}):string => {
        return isActive ? "nav-link selected" : "nav-link";
    }

    return(
        <>
            <nav className='nav-bar'>
                <Link to='/' className="nav-logo">
                        <img src={Logo} alt="Page Logo" />
                </Link>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li><NavLink to='/' className={getClassName} >Home</NavLink></li>
                        <li><NavLink to='/compare' className={getClassName}>Compare</NavLink></li>
                        <li><NavLink to='/inventory/cars' className={getClassName}>Inventory</NavLink></li>
                        <li><NavLink to='/mygarage' className={getClassName}>MyGarage</NavLink></li>
                    </ul>
                    <ul className="nav-info-links">
                        <li className="nav-info-link-container">
                            <IoLocationSharp className='nav-icon'/>
                            <Link to='/' className="nav-info-link">12 Giggle Gardens, Chuckletopia 98765</Link>
                        </li>
                        <li className="nav-info-link-container">
                            <FaPhoneAlt className="nav-icon"/>
                            <Link to='/' className="nav-info-link">+1-435-315-786</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default Navbar;