import React from 'react';
import './CompareView.css';
import { IoMdAddCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CarMiniCard from '../../Components/CarMiniCard/CarMiniCard';
import { getCarById } from '../../Services/carService';

const CompareView: React.FC = (): JSX.Element => {

    const cars = useSelector((state:RootState) => state.cars.data);
    const likedCars = useSelector((state:RootState) => state.likedCars.likedCars);

    return(
        <>
            <article className="compare-page">
                <section className="compare-section">
                    <div className="drop-section">
                        <IoMdAddCircle/>
                        <h2>Drop a Car Here</h2>
                    </div>
                    <div className="drop-section">
                        <IoMdAddCircle/>
                        <h2>Drop a Car Here</h2>
                    </div>
                </section>
                <section className="liked-cars-section">
                    <div className="liked-cars-container">
                        <header className="liked-cars-header">
                            <h2>MyGarage</h2>
                        </header>
                        <div className="liked-cars-cards">
                        {
                            likedCars.length === 0 ? <p>You have not liked any Cars</p> :
                            likedCars.map((CarId) => {
                                return <CarMiniCard key={CarId} Car={ getCarById( cars, CarId) }/>
                            })
                        }
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}

export default CompareView;