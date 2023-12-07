import React from 'react';
import './CarDetailsCard.css';
import { ICar } from '../../interfaces/ICar.Interface';
import LikeButton from '../LikeButton/LikeButton';
import { FaCheckSquare } from "react-icons/fa";

interface CarDetailsCardProps {
    car:ICar;
}

const CarDetailsCard:React.FC<CarDetailsCardProps> = (props):JSX.Element => {
    return(
        <div className="car-details-card">
            <section className="details-card-image">
                <img src={props.car.images[0]} alt="Car Image" />
            </section>
            <section className="details-card-header">
                <h2 className="details-card-title">{`${props.car.make} ${props.car.model}`}</h2>
                <LikeButton car={props.car}/>
            </section>
            <section className="details-card-car-info">

                <h3>Details</h3>
                <article className="details-card-details">
                    <ul className="details-card-left">
                        <li><span>Make: </span>{`${props.car.make}`}</li>
                        <li><span>Model: </span>{`${props.car.model}`}</li>
                        <li><span>Year: </span>{`${props.car.year}`}</li>
                        <li><span>Color: </span>{`${props.car.color}`}</li>
                        <li><span>Seats: </span>{`${props.car.seats}`}</li>
                        <li className="details-card-price"><span>Price: </span>{`$${props.car.price}`}</li>
                    </ul>
                    <ul className="details-card-right">
                        <li><span>Engine: </span>{`${props.car.engine}`}</li>
                        <li><span>Miles: </span>{`${props.car.mileage}`}</li>
                        <li><span>Mpg: </span>{`${props.car.mpg}`}</li>
                        <li><span>VIN: </span>{`${props.car.vin}`}</li>
                    </ul>
                </article>

                <ul className="details-card-features">
                    <h3>Features</h3>
                    {
                        props.car.features.map((feature) => {
                            return(
                                <li>{`${feature}`}<FaCheckSquare/></li>
                            );
                        })
                    }
                </ul>
            </section>
            <button className="details-card-button">Order This Car</button>
        </div>
    );
}

export default CarDetailsCard;