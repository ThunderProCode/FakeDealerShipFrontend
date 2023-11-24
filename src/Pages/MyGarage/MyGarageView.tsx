import React from  'react';
import './MyGarageView.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CarCard from '../../Components/CarCard/CarCard.Component';
import { getCarById } from '../../Services/carService';

const MyGarageView: React.FC = (): JSX.Element => {

    const cars = useSelector((state: RootState) => state.cars.data);
    const likedCars = useSelector((state:RootState) => state.likedCars.likedCars);

    return(
        <>
            <div className="mygarage-page">
                <ul className="mygarage-cards-container">
                    {
                        likedCars.length === 0 ? <p>You have not liked any Cars</p> :
                        likedCars.map((CarId) => {
                            return <CarCard key={CarId} Car ={ getCarById( cars, CarId) }/>
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default MyGarageView;