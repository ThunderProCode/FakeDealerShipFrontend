import React from 'react';
import './InventoryLayout.css';
import { Outlet } from 'react-router';
import Navbar from '../../../Components/Navbar/Navbar.Component';

const InventoryLayout:React.FC = ():JSX.Element => {
    return(
        <>
            <Navbar />
            <div className="inventory-page">
                <Outlet/>
            </div>
        </>
    );
}

export default InventoryLayout;