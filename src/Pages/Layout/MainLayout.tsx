import React from 'react';
import './MainLayout.css';
import Navbar from '../../Components/Navbar/Navbar.Component';
import { Outlet } from 'react-router';

const MainLayout:React.FC = ():JSX.Element => {
    return(
        <>
            <Navbar/>
            <Outlet />
        </>
    );
}

export default MainLayout;