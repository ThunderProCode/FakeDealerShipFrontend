import React from  'react';
import './MyGarage.Page.Styles.css';
import Navbar from '../../Components/Navbar/Navbar.Component';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CarCard from '../../Components/CarCard/CarCard.Component';
import { getCarById } from '../../Services/carService';

const MyGaragePage: React.FC = (): JSX.Element => {

    const cars = useSelector((state: RootState) => state.cars.data);
    const likedCars = useSelector((state:RootState) => state.likedCars.likedCars);

    return(
        <>
            <Navbar/>
            <div className="mygarage-page">
                <ul className="cards-container">
                    {
                        likedCars.length === 0 ? <p>You have not liked any Cars</p> :
                        likedCars.map((CarId) => {
                            return <CarCard Car ={ getCarById( cars, CarId) }/>
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default MyGaragePage;