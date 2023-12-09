import React from "react";
import './OrderCarView.css';
import DropDownMenu from "../../../../Shared/DropDownMenu/DropDownMenu.Component";
import { SiCashapp } from "react-icons/si";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { getCarById } from "../../../../Services/carService";

const OrderCarView:React.FC = ():JSX.Element => {

    const { carId } = useParams();
    const cars = useSelector((state:RootState) => state.cars.data);
    const parsedCarId = carId? parseInt(carId, 10) : undefined;
    const car = getCarById(cars, parsedCarId);
    
    const getFormContent = ():JSX.Element => {
        if(car){
            return(
                <div className="form-content">
                <h3>Your Information: </h3>
                <section className="form-user-info">
                    <div className="user-info-left">
                        <div className="form-input-container">
                            <label htmlFor="form-user-name">Name: </label>
                            <input id="form-user-name" type="text" />
                        </div>
                        <div className="form-input-container">
                            <label htmlFor="form-user-email">Email: </label>
                            <input id="form-user-email" type="email" />
                        </div>
                        <div className="form-input-container">
                            <label htmlFor="form-user-date">Select a date and time: </label>
                            <input id="form-user-date" type="datetime-local" />
                        </div>
                    </div>
                    <div className="user-info-right">
                        <div className="form-input-container">
                                <label htmlFor="form-user-lastname">Lastname: </label>
                                <input id="form-user-lastname" type="text" />
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="form-user-phone">Phone number: </label>
                                <input id="form-user-phone" type="tel" />
                            </div>
                            <div className="form-input-container">
                                <label htmlFor="form-user-payment">Select a payment method: </label>
                                <DropDownMenu title="Payment Method" filter={false} icon={SiCashapp} options={["Cash", "Card", "Bank Transfer", "Check"]}/>
                            </div>
                    </div>

                </section>
                <h3>Order Details: </h3>
                <section className="form-order-details">
                    <article className="form-car-details">
                        <ul className="car-details-left">
                            <h3>Car Details: </h3>
                            <li><span>Make: </span>{car.make}</li>
                            <li><span>Model: </span>{car.model}</li>
                            <li><span>Year: </span>{car.year}</li>
                            <li><span>Miles: </span>{car.mileage}</li>
                            <li className="details-left-price"><span>Price: </span>${car.price}</li>
                        </ul>
                        <div className="car-details-right">
                            <img src={car.images[0]} alt="" />
                        </div>
                    </article>
                    <article className="form-checkout-details">
                        <h3>Checkout: </h3>
                        <ul>
                        <li><span>Price: </span>${car.price}</li>
                        <li><span>Service Fee: </span></li> 
                        <li><span>Subtotal: </span></li> 
                        <li><span>Tax: </span></li> 
                        <li><span>Total: </span></li> 
                        </ul>
                        <div className="checkout-buttons">
                            <button>Cancel Order</button>
                            <button>Place Order</button>
                        </div>
                    </article>
                </section>
            </div>
            );
        } else {
            return(
                <>
                    <h3>Car Not Found</h3>
                </>
            );
        }
    }

    return(
        <>
            <form className="order-form" action="">
                <section className="form-title">
                    <h2>Order Car</h2>
                </section>
               {
                getFormContent()
               }
            </form>
        </>
    );
}

export default OrderCarView;