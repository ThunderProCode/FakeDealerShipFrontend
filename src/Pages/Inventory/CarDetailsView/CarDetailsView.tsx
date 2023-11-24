import React from "react";
import './CarDetailsView.css';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { useParams } from "react-router";
import { getCarById } from "../../../Services/carService";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const CarDetailsView:React.FC = ():JSX.Element => {

    const { carId } = useParams();
    const cars = useSelector((state:RootState) => state.cars.data);

    const parsedCarId = carId? parseInt(carId,10) : undefined;
    const car = getCarById(cars,parsedCarId);

    if(car){
        return(
            <article className="car-view-container">
               <section className="car-images">
                    <div className="left-side">
                        <div className="displayed-image">
                            <img src={car.images[0]} alt="" />
                        </div>
                        <div className="buttons-container">
                            <button className="like-btn"><FaRegHeart/></button>
                            <button className="order-btn">Order This Car</button>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="available-images">
                            {
                                car.images.map((image) => <div className="image-to-select"> <img src={image} /> </div>)
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