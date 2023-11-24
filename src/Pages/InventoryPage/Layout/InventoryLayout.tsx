import React from 'react';
import './InventoryLayout.css';
import Navbar from '../../../Components/Navbar/Navbar.Component';

const InventoryLayout:React.FC = ():JSX.Element => {
    return(
        <>
            <Navbar/>
            <div className="inventory-page">
                
            </div>
        </>
    );
}

export default InventoryLayout;