import React, { useState } from "react";
import './DropDownMenu.Component.Styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { switchFilter } from "../../features/filterSlice";
import { IconType } from "react-icons/lib";
import { ICar } from "../../interfaces/ICar.Interface";
import { RootState } from "../../store";
import { getCarById } from "../../Services/carService";

interface IDropDownMenuProps {
    title: string;
    options?: string[];
    filter: boolean;
    icon : IconType;
    action?: (car:ICar) => void;
}

const DropDownMenu:React.FC<IDropDownMenuProps> = (props):JSX.Element => {

    const [ dropDownTitle, setDropDownTitle ] = useState<string>(props.title);
    const dispatch = useDispatch();
    const cars = useSelector((state:RootState) => state.cars.data);
    const likedCars = useSelector((state:RootState) => state.likedCars.likedCars);



    const handleFilterClick = (option:string) => {
        if(props.filter) {
            setDropDownTitle(option);
            dispatch(switchFilter(`body-${option}`));
        }
    }

    const handleClick = (car:ICar | undefined) => {
        if(props.action){
            if(car){
                props.action(car);
                setDropDownTitle(`${car.make} ${car.model}`);
            } 
        }
    }

    const renderOptions = () => {
        if(props.options){
            return(
                <>{
                    props.options.map(option => {
                        return <p key={option} onClick={() => {handleFilterClick(option)}}>{`${option}`}</p>
                    })
                }
                </>
            );
        } else if (likedCars){
            return(
                <>{
                    likedCars.map(carId => {
                        const car = getCarById(cars,carId);
                        return <p key={carId} onClick={() => {handleClick(car)}}>{`${car?.make} ${car?.model}`}</p>
                    })
                }
                </>
            );
        } else {
            return(
                <></>
            );
        }
    }

    return(
        <div className="dropdown">
            <button className="drop-btn">{`${dropDownTitle}`}< props.icon /></button>
            <div className="dropdown-content">
                { renderOptions() }
            </div>
        </div>
    );
}

export default DropDownMenu;