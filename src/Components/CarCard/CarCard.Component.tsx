import React, { useState } from "react";
import './CarCard.Component.Styles.css';
import { ICar } from "../../interfaces/ICar.Interface";
import { FaRegHeart, FaHeart } from "react-icons/fa";

interface ICarCardProps {
    Car: ICar;
}

const CarCard: React.FC<ICarCardProps> = (props): JSX.Element => {

    const [ liked, setLiked ] = useState<boolean>(false);

    const selectHeart = () => {
        return liked ? <FaHeart/> : <FaRegHeart/>;
    }

    const handleLikeClick = () => {
        setLiked(!liked);
    }

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
                        <button onClick={handleLikeClick} className="card-like-btn">
                            {
                                selectHeart()
                            }
                        </button>
                    </section>
                    <div className="card-details">
                        <p><span>Year: </span>{`${Car.year}`}</p>
                        <p><span>Miles: </span>{`${Car.price}`}</p>
                    </div>
                    <p className="card-price">Price: {`${Car.price}`}$</p>
                </header>
                <div className="card-description">
                    <p>
                        {
                            `${Car.description}`
                        }
                    </p>
                </div>
                <div className="card-buttons-section">
                    <button type="button" className="card-btn">
                        Details
                    </button>
                    <button type="button" className="card-btn">
                        Order
                    </button>
                </div>
            </section>
        </article>
        
    );
}

export default CarCard;