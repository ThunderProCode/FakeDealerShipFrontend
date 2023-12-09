import React, { useEffect,useState } from 'react';
import './CardsView.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { fetchCars } from '../../../features/carsSlice';
import { filterCarsBy } from '../../../Services/carService';

import CarCard from '../Components/CarCard/CarCard.Component';
import FilterBar from '../Components/FiltersBar/FilterBar.Component';
import MakePanel from '../Components/MakePanel/MakePanel';

const CardsView:React.FC = ():JSX.Element => {

    const dispatch = useDispatch<AppDispatch>();
    const cars = useSelector((state:RootState) => state.cars.data);
    const carsStatus = useSelector((state:RootState) => state.cars.status);
    const filterBy = useSelector((state:RootState) => state.filterBy.filterBy);
    const [ showMakePanel, setShowMakePanel ] = useState(false);

    const handleMakeClick = () => {
        setShowMakePanel(true);
    }

    const handleCloseMakePanel = () => {
        setShowMakePanel(false);
    }

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
            <FilterBar handleMakeClick={handleMakeClick}/>
            <ul className="inventory-cards-container">
            {
                carsStatus === 'loading' ? <p>Loading....</p>:
                result()
            }
            </ul>
            { showMakePanel && <MakePanel onClose={handleCloseMakePanel}/> }
        </>
    );
}

export default CardsView;