import React, { useEffect } from 'react';
import './CardsView.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchCars } from '../../../features/carsSlice';
import { filterCarsBy } from '../../../Services/carService';

import CarCard from '../../../Components/CarCard/CarCard.Component';
import FilterBar from '../../../Components/FiltersBar/FilterBar.Component';

const CardsView:React.FC = ():JSX.Element => {

    const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector((state:RootState) => state.cars.data);
    const carsStatus = useSelector((state:RootState) => state.cars.status);
    const filterBy = useSelector((state:RootState) => state.filterBy.filterBy);

    useEffect(() => {
        if(carsStatus === 'idle'){
            dispatch(fetchCars());
        }
    },[carsStatus,dispatch])

    const filteredCars = filterCarsBy(cars,filterBy);
    
    const result = () => {
        if(filteredCars.length > 0){
            return (
                filteredCars.map(Car => (
                    <CarCard Car={Car} key={Car.id}/>
                ))
            )
        } else {
            return(
                <p>No Cars Found</p>
            )
        }
    }


    return(
        <>
            <FilterBar/>
            <ul className="inventory-cards-container">
            {
                carsStatus === 'loading' ? <p>Loading....</p>:
                result()
            }
            </ul>
        </>
    );
}

export default CardsView;