import React, { useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar.Component';
import CarCard from '../../Components/CarCard/CarCard.Component';
import './Inventory.Page.Styles.css';
import FilterBar from '../../Components/FiltersBar/FilterBar.Component';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchCars } from '../../features/carsSlice';

const InventoryPage: React.FC =(): JSX.Element => {

    const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector((state: RootState) => state.cars.data);
    const carsStatus = useSelector((state: RootState) => state.cars.status);
    // const carsError = useSelector((state: RootState) => state.cars.error);

    useEffect(() => {
        if(carsStatus === 'idle') {
            dispatch(fetchCars());
        }
    },[carsStatus,dispatch]);


    return(
        <>
            <Navbar/>
            <div className="inventory-page">
                <FilterBar/>
                <ul className="cards-container">
                    {
                        carsStatus === 'loading' ? <p>Loading....</p>: 
                        cars.map(Car => {
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