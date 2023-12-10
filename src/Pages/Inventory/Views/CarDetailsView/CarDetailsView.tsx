import React, { useState } from "react";
import './CarDetailsView.css';
import { FaCheckSquare } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { getCarById } from "../../../../Services/carService";
import {  useSelector } from "react-redux";
import { RootState } from "../../../../store";
import CarDetailsCard from "../../../../Shared/CarDetailsCard/CarDetailsCard";
import PrimaryButton from "../../../../Shared/PrimaryButton/PrimaryButton";
import LikeButton from "../../../../Shared/LikeButton/LikeButton";

const CarDetailsView:React.FC = ():JSX.Element => {

    const { carId } = useParams();
    const cars = useSelector((state:RootState) => state.cars.data);
    const parsedCarId = carId? parseInt(carId,10) : undefined;
    const car = getCarById(cars,parsedCarId);
    const [ displayedImage, setDisplayedImage ] = useState(car?.images[0]);
    const navigate = useNavigate();

    if(car){

        const handleOrderClick = () => {
            navigate(`/inventory/order/${car.id}`);
        }

        const handleImageClick = (image: string) => {
            setDisplayedImage(image);
        }
        
        return(
            <>
                <div className="car-view-mobile">
                    <CarDetailsCard car={car}/>
                </div>
                <article className="car-view-container">  
                    <section className="car-images">
                            <div className="left-side">
                                <div className="displayed-image">
                                    <img src={displayedImage} alt="Car" />
                                </div>
                                <div className="buttons-container">
                                    <LikeButton width="8%" height="100%" fontSize="1em" car={car}/>
                                    <PrimaryButton width="80%" height="" fontSize="1.2em" label="Order This Car" onClick={handleOrderClick}/>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="available-images">
                                    {
                                        car.images.map((image) => <div className={`image-to-select ${displayedImage === image ? 'image-selected': ''}`} key={image} onClick={() => handleImageClick(image)}> <img src={image} alt="Car"/> </div>)
                                    }
                                </div>
                            </div>
                    </section>
                    <section className="car-info">
                            <div className="info-section info-details">
                                <h2>Details</h2>
                                <ul>
                                    <li><span>Make: </span>{ `${car.make}` }</li>
                                    <li><span>Mode: </span>{ `${car.model}` }</li>
                                    <li><span>Year: </span>{ `${car.year}` }</li>
                                    <li><span>Color: </span>{ `${car.color}` }</li>
                                    <li><span>Seats: </span>{ `${car.seats}` }</li>
                                    <li><span>Engine: </span>{ `${car.engine}` }</li>
                                    <li><span>Miles: </span>{ `${car.mileage}` }</li>
                                    <li><span>Mpg: </span>{ `${car.mpg}` }</li>
                                    <li><span>VIN: </span>{ `${car.vin}` }</li>
                                    <li><span>Price: </span>{ `${car.price}` }</li>
                                </ul>
                            </div>
                            <div className="info-section info-description">
                                <h2>Description</h2>
                                <p>{ `${car.description}` }</p>
                            </div>
                            <div className="info-section info-features">
                                <h2>Features</h2>
                                <ul>
                                    {
                                        car.features.map((feature) => <li>{ `${feature}` }<FaCheckSquare/></li>)
                                    }
                                </ul>
                            </div>
                    </section>
                </article>
            </>
        );
    }else {
        return (
            <>
                <h1>Car Not Found</h1>
            </>
        );
    }
}

export default CarDetailsView;