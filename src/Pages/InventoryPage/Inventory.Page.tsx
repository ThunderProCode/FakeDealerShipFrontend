import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.Component';
import './Inventory.Page.Styles.css';

const InventoryPage: React.FC =(): JSX.Element => {
    return(
        <div className="inventory-page">
            <Navbar/>
            <h1>Inventory Page</h1>
        </div>
    );
}

export default InventoryPage;