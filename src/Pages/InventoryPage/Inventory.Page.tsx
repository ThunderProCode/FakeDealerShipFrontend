import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.Component';
import CarCard from '../../Components/CarCard/CarCard.Component';
import './Inventory.Page.Styles.css';
import useCarsFetching from '../../Hooks/useCarsFetching';
import FilterBar from '../../Components/FiltersBar/FilterBar.Component';

const InventoryPage: React.FC =(): JSX.Element => {

    const { Cars, loading } = useCarsFetching();

    if(loading) {
        return <p>Loading.....</p>;
    }

    return(
        <div className="inventory-page">
            <Navbar/>
            <FilterBar/>
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