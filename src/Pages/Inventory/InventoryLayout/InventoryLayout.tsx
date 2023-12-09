import React from 'react';
import './InventoryLayout.css';
import { Outlet } from 'react-router';
import Navbar from '../../../Shared/Navbar/Navbar.Component';

const InventoryLayout:React.FC = ():JSX.Element => {
    return(
        <>
            <Navbar admin={false} user={true}/>
            <div className="inventory-page">
                <Outlet/>
            </div>
        </>
    );
}

export default InventoryLayout;