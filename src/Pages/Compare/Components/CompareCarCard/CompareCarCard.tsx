import React from 'react';
import './CompareCarCard.css';
import { ICar } from '../../../../interfaces/ICar.Interface';
import { useNavigate } from 'react-router';

interface CompareCarCardProps {
    Car:ICar;
    resetFunction: () => void;
}

const CompareCarCard:React.FC<CompareCarCardProps> = (props):JSX.Element => {

    const { Car, resetFunction } = props;
    const navigate = useNavigate();

    const handleOrderClick = ():void => {
        navigate(`/inventory/order/${Car.id}`);
    }

    return(
        <div className="compare-car-card">
            <section className="compare-image">
                <img src={Car.images[0]} alt={`${Car.make} ${Car.model}`} />
            </section>
            <section className="compare-info">
                <ul className="compare-details">
                    <li><span>Make: </span><p>{ `${Car.make}` }</p></li>
                    <li><span>Model: </span><p>{ `${Car.model}` }</p></li>
                    <li><span>Year: </span><p>{ `${Car.year}` }</p></li>
                    <li><span>Mpg: </span><p>{ `${Car.mpg}` }</p></li>
                    <li><span>Miles: </span><p>{ `${Car.mileage}` }</p></li>
                    <li><span>Engine: </span><p>{ `${Car.engine}` }</p></li>
                    <li><span>Color: </span><p>{ `${Car.color}` }</p></li>
                    <li><span>Seats: </span><p>{ `${Car.seats}` }</p></li>
                </ul>
                <div className="compare-price">
                    <p><span>Price: </span>{ `${Car.price}` }</p>
                </div>
                <div className="compare-buttons">
                    <button className="compare-btn" onClick={handleOrderClick}>Order this car</button>
                    <button className="compare-btn" onClick={() => resetFunction() }>Compare Other</button>
                </div>
            </section>
        </div>
    );
}

export default CompareCarCard;