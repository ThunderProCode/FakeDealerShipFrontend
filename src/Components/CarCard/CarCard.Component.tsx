import React from "react";
import './CarCard.Component.Styles.css';
import { ICar } from "../../interfaces/ICar.Interface";
import { FaRegHeart } from "react-icons/fa";

interface ICarCardProps {
    Car: ICar;
}

const CarCard: React.FC<ICarCardProps> = (props): JSX.Element => {

    const Car = props.Car;
    console.log(Car);

    return(
        <article className="car-card">
            <figure className="card-image">
                <img src={Car.images[0]} alt="Toyota Camry" />
            </figure>
            <section className="card-info">
                <header className="card-header">
                    <section className="card-title-section">
                        <h2 className="card-title">{`${Car.make} ${Car.model}`}</h2>
                        <p className="card-price">Price: {`${Car.price}`}$</p>
                        <button className="card-like-btn">
                            <FaRegHeart/>
                        </button>
                    </section>
                    <div className="card-details">
                        <p><span>Year: </span>{`${Car.year}`}</p>
                        <p><span>Miles: </span>{`${Car.price}`}</p>
                    </div>
                </header>
                <div className="card-description">
                    <p>
                        {
                            `${Car.description}`
                        }
                    </p>
                </div>
                <div className="card-buttons-section">
                    <button className="card-btn">
                        View Details
                    </button>
                    <button className="card-btn">
                        Order This Car
                    </button>
                </div>
            </section>
        </article>
        
    );
}

export default CarCard;