import React, { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';
import Logo from '../../assets/svgs/Logo.svg';
import './Navbar.Component.Styles.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { logout } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

interface NavbarProps {
    admin: boolean;
    user: boolean;
}

const Navbar: React.FC<NavbarProps> = (props): JSX.Element => {

    const { admin, user } = props;
    const [ folded, setFolded ] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleMobileMenu = () => {
        setFolded(!folded);
    }

    const getNavLinksClass = ():string => {
        return folded ? 'nav-links-container' : 'nav-links-container show';
    }

    const getClassName = ({isActive}: {isActive:boolean}):string => {
        return isActive ? "nav-link selected" : "nav-link";
    }

    const clickLogout = () => {
        localStorage.removeItem("userData");
        dispatch(logout());
    }

    const getNavLinks = ():JSX.Element => {
        if(admin){
            return(
                <>
                    <li><NavLink to='inventory' className={getClassName}>Manage Inventory</NavLink></li>
                    <li><NavLink to='orders' className={getClassName}>Manage Orders</NavLink></li>
                </>
            );
        }else if (user){
            return(
                <>
                    <li><NavLink to='/' className={getClassName} onClick={handleMobileMenu} >Home</NavLink></li>
                    <li><NavLink to='/compare' className={getClassName} onClick={handleMobileMenu}>Compare</NavLink></li>
                    <li><NavLink to='/inventory/cars' className={getClassName} onClick={handleMobileMenu}>Inventory</NavLink></li>
                    <li><NavLink to='/mygarage' className={getClassName} onClick={handleMobileMenu}>MyGarage</NavLink></li>
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
    }

    const getInfoLinks = ():JSX.Element => {
        if(admin){
            return(
                <>
                    <PrimaryButton width="100%" padding=".5em" label="Logout" onClick={clickLogout} btnIcon={<><MdLogout/></>}/>
                </>
            );
        } else {
            return (
                <>
                    <li className="nav-info-link-container">
                        <FaPhoneAlt className="nav-icon"/>
                        <Link to='/' className="nav-info-link">+1-435-315-786</Link>
                    </li>
                </>
            );
        }
    }

    return(
        <>
            <nav className='nav-bar'>
                <div className="nav-bar-header">
                    <Link to='/' className="nav-logo">
                            <img src={Logo} alt="Page Logo" />
                    </Link>
                    <button className="menu-btn" onClick={handleMobileMenu}>
                        <IoMenu />
                    </button>
                </div>
                <div className={getNavLinksClass()}>
                    <ul className="nav-links">
                        {
                            getNavLinks()
                        }
                    </ul>
                    <ul className="nav-info-links">
                        {
                            getInfoLinks()
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;