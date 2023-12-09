import React from "react";
import './OrderCarView.css';
import DropDownMenu from "../../../Components/DropDownMenu/DropDownMenu.Component";
import { SiCashapp } from "react-icons/si";

const OrderCarView:React.FC = ():JSX.Element => {
    return(
        <>
            <form className="order-form" action="">
                <section className="form-title">
                    <h2>Order Car</h2>
                </section>
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
                                <label htmlFor="form-user-phone">Phone number: </label>
                                <DropDownMenu title="Payment Method" filter={false} icon={SiCashapp} options={["Cash", "Card", "Bank Transfer", "Check"]}/>
                            </div>
                    </div>

                </section>
                <section className="form-order-details">
                    <article className="form-car-details">
                        <ul className="car-details-left">
                            <h3>Car Details: </h3>
                            <li><span>Make: </span></li>
                            <li><span>Model: </span></li>
                            <li><span>Year: </span></li>
                            <li><span>Miles: </span></li>
                            <li><span>Price: </span></li>
                        </ul>
                        <div className="car-details-right">
                            <img src="" alt="" />
                        </div>
                    </article>
                    <article className="form-checkout-details">
                        <h3>Checkout: </h3>
                        <ul>
                           <li><span>Price: </span></li>
                           <li><span>Service Fee: </span></li> 
                           <li><span>Subtotal: </span></li> 
                           <li><span>Tax: </span></li> 
                           <li><span>Total: </span></li> 
                        </ul>
                        <div className="checkout-buttons">
                            <button>Cancel Order</button>
                            <button>Review Order</button>
                        </div>
                    </article>
                </section>
            </form>
        </>
    );
}

export default OrderCarView;