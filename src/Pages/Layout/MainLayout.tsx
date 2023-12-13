import React from 'react';
import './MainLayout.css';
import Navbar from '../../Shared/Navbar/Navbar.Component';
import { Outlet } from 'react-router';
import Footer from '../../Shared/Footer/Footer';

const MainLayout:React.FC = ():JSX.Element => {
    return(
        <>
            <Navbar admin={false} user={true}/>
            <Outlet />
            <Footer />
        </>
    );
}

export default MainLayout;