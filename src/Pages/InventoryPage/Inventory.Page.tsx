import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.Component';
import CarCard from '../../Components/CarCard/CarCard.Component';
import './Inventory.Page.Styles.css';

const InventoryPage: React.FC =(): JSX.Element => {
    return(
        <div className="inventory-page">
            <Navbar/>
            <CarCard/>
        </div>
    );
}

export default InventoryPage;