import React from "react";
import './CarCard.Component.Styles.css';
import { ICar } from "../../interfaces/ICar.Interface";
import { useNavigate } from "react-router";
import LikeButton from "../LikeButton/LikeButton";

interface ICarCardProps {
    Car: ICar | undefined;
}

const CarCard: React.FC<ICarCardProps> = (props): JSX.Element => {

    const { Car } = props;
    const navigate = useNavigate();

    if(Car) {
        const handleDetailsClick = () => {
            navigate(`/inventory/car/${Car.id}`);
        }
    
        return(
            <article className="car-card">
                <figure className="card-image">
                    <img src={Car.images[0]} alt="Toyota Camry" />
                </figure>
                <section className="card-info">
                    <header className="card-header">
                        <section className="card-title-section">
                            <h2 className="card-title">{`${Car.make} ${Car.model}`}</h2>
                            <LikeButton car={Car}/>
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
                        <button type="button" className="card-btn" onClick={handleDetailsClick}>
                            Details
                        </button>
                        <button type="button" className="card-btn">
                            Order
                        </button>
                    </div>
                </section>
            </article>
            
        );
    }else {
        return(
            <>
            </>
        );
    }
}

export default CarCard;