import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar.Component';
import CarCard from '../../Components/CarCard/CarCard.Component';
import './Inventory.Page.Styles.css';
import FilterBar from '../../Components/FiltersBar/FilterBar.Component';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchCars } from '../../features/carsSlice';
import { filterCarsBy } from '../../Services/carService';

const InventoryPage: React.FC =(): JSX.Element => {

    const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector((state: RootState) => state.cars.data);
    const carsStatus = useSelector((state: RootState) => state.cars.status); 
    const filterBy = useSelector((state: RootState) => state.filterBy.filterBy);

    useEffect(() => {
        if(carsStatus === 'idle') {
            dispatch(fetchCars());
        }

    },[carsStatus,dispatch]);

    const filteredCars = filterCarsBy(cars,filterBy);

    return(
        <>
            <Navbar/>
            <div className="inventory-page">
                <FilterBar/>
                <ul className="inventory-cards-container">
                    {
                        carsStatus === 'loading' ? <p>Loading....</p>:
                        filteredCars.map(Car => {
                            return (
                                <CarCard Car={Car} key={Car.id}/>
                            )}
                        )
                    }
                </ul>
            </div>
        </>
    );
}

export default InventoryPage;