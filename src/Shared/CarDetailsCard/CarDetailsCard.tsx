import React,{ useState } from 'react';
import './CarDetailsCard.css';
import { ICar } from '../../interfaces/ICar.Interface';
import LikeButton from '../LikeButton/LikeButton';
import { FaCheckSquare } from "react-icons/fa";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useNavigate } from 'react-router';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

interface CarDetailsCardProps {
    car:ICar;
}

const CarDetailsCard:React.FC<CarDetailsCardProps> = (props):JSX.Element => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    const nextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === props.car.images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? props.car.images.length - 1 : prevIndex - 1
      );
    };

    const handleOrderClick = ():void => {
        console.log('Clicked')
        navigate(`/inventory/order/${props.car.id}`);
    }
    
    return(
        <div className="car-details-card">
            <section className="details-card-image" style={{backgroundImage: `url(${props.car.images[currentImageIndex]})`}}>
                <button className="details-card-prev-btn" onClick={prevImage}> <MdNavigateBefore/> </button>
                <button className="details-card-next-btn" onClick={nextImage}> <MdNavigateNext/></button>
            </section>
            <section className="details-card-header">
                <h2 className="details-card-title">{`${props.car.make} ${props.car.model}`}</h2>
                <LikeButton car={props.car}/>
            </section>
            <section className="details-card-car-info">

                <h3>Details</h3>
                <article className="details-card-details">
                    <ul className="details-card-left">
                        <li key={props.car.make}><span>Make: </span>{`${props.car.make}`}</li>
                        <li key={props.car.model}><span>Model: </span>{`${props.car.model}`}</li>
                        <li key={props.car.year}><span>Year: </span>{`${props.car.year}`}</li>
                        <li key={props.car.color}><span>Color: </span>{`${props.car.color}`}</li>
                        <li key={props.car.seats}><span>Seats: </span>{`${props.car.seats}`}</li>
                        <li key={props.car.price} className="details-card-price"><span>Price: </span>{`$${props.car.price}`}</li>
                    </ul>
                    <ul className="details-card-right">
                        <li key={props.car.engine}><span>Engine: </span>{`${props.car.engine}`}</li>
                        <li key={props.car.mileage}><span>Miles: </span>{`${props.car.mileage}`}</li>
                        <li key={props.car.mpg}><span>Mpg: </span>{`${props.car.mpg}`}</li>
                        <li key={props.car.vin}><span>VIN: </span>{`${props.car.vin}`}</li>
                    </ul>
                </article>

                <ul className="details-card-features">
                    <h3>Features</h3>
                    {
                        props.car.features.map((feature,index) => {
                            return(
                                <li key={feature}>{`${feature}`}<FaCheckSquare/></li>
                            );
                        })
                    }
                </ul>
            </section>
            <PrimaryButton width="100%" height="4%" padding=".5em" label="Order This Car" onClick={handleOrderClick}/>
        </div>
    );
}

export default CarDetailsCard;