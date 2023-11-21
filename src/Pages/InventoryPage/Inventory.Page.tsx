import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.Component';
import CarCard from '../../Components/CarCard/CarCard.Component';
import './Inventory.Page.Styles.css';
import useCarsFetching from '../../Hooks/useCarsFetching';

const InventoryPage: React.FC =(): JSX.Element => {

    const { Cars, loading } = useCarsFetching();

    if(loading) {
        return <p>Loading.....</p>;
    }

    return(
        <div className="inventory-page">
            <Navbar/>
            <ul className="cards-container">
                {
                    Cars.map(Car =>{
                        return (
                            <CarCard Car={Car} key={Car.id}/>
                        )}
                    )
                }
            </ul>
        </div>
    );
}

export default InventoryPage;