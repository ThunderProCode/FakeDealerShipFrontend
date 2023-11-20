import React from "react";
import './CarCard.Component.Styles.css';
import { ICar } from "../../interfaces/ICar.Interface";
import { FaRegHeart } from "react-icons/fa";

interface ICarCardProps {
    Car: ICar;
}

const CarCard: React.FC = (): JSX.Element => {
    return(
        <article className="car-card">
            <img className="card-image" src="https://vexgateway.fastly.carvana.io/2002604082/hero-no-letters.jpg" alt="Toyota Camry" />
            <section className="card-info">
                <div className="card-title-section">
                    <h2 className="card-title">Toyota Camry</h2>
                    <p className="card-price">Price: 34,000$</p>
                    <button className="card-like-btn">
                        <FaRegHeart/>
                    </button>
                </div>
                <div className="card-details-section">
                    <div className="card-details">
                        <p><span>Year: </span>2020</p>
                        <p><span>Miles: </span>34,000</p>
                    </div>
                    <div className="card-description">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type 
                        specimen book.
                        </p>
                    </div>
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