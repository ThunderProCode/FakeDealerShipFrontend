import React from "react";
import './CarDetailsView.css';
import { useParams } from "react-router";
import { getCarById } from "../../../Services/carService";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const CarDetailsView:React.FC = ():JSX.Element => {

    const { carId } = useParams();
    const cars = useSelector((state:RootState) => state.cars.data);

    const car = getCarById(cars,carId);

    if(car){
        console.log(car);
        return(
            <div className="car-details-page">
                <h1>Details</h1>
            </div>
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