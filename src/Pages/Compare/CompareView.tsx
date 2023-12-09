import React, { useState } from 'react';
import './CompareView.css';
import { IoMdAddCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import CarMiniCard from './Components/CarMiniCard/CarMiniCard';
import { getCarById } from '../../Services/carService';
import { useDrop } from 'react-dnd';
import { ICar } from '../../interfaces/ICar.Interface';
import CompareCarCard from './Components/CompareCarCard/CompareCarCard';
import DropDownMenu from '../../Shared/DropDownMenu/DropDownMenu.Component';
import CarDetailsCard from '../Inventory/Components/CarDetailsCard/CarDetailsCard';
import { IoMdArrowDropdown } from "react-icons/io";

const CompareView: React.FC = (): JSX.Element => {

    const cars = useSelector((state:RootState) => state.cars.data);
    const likedCars = useSelector((state:RootState) => state.likedCars.likedCars);
    const [ droppedCar1, setDroppedCar1] = useState<ICar | null>(null);
    const [ droppedCar2, setDroppedCar2 ] = useState<ICar | null>(null);

    const resetDroppedCar1 = ():void => {
        setDroppedCar1(null);
    }

    const resetDropppedCar2 = (): void => {
        setDroppedCar2(null);
    }

    const [, drop1] = useDrop({
        accept: 'CAR',
        drop: (item: { id: string }) => {
            console.log('Dropped car with id: ', item.id, ' into section 1');
            const car = getCarById(cars,parseInt(item.id,10));
            if(car)setDroppedCar1(car);
        },
    });

    const [, drop2] = useDrop({
        accept: 'CAR',
        drop: (item: { id: string }) => {
            console.log('Dropped car with id: ', item.id, ' into section 1');
            const car = getCarById(cars, parseInt(item.id,10));
            if(car) setDroppedCar2(car);
        },
    });

    const getContent1 = () => {
        if(droppedCar1) {
            return(
                <>
                    <CompareCarCard Car={droppedCar1} resetFunction={resetDroppedCar1}/>
                </>
            );
        } else {
            return (
                <>
                    <IoMdAddCircle/>
                    <h2>Drop a Car Here</h2>
                </>
            )
        }
    }

    const getInstructionsClassName = ():string => {
        if(droppedCar1 && droppedCar2){
            return "compare-view-instructions hidden";
        }else {
            return "compare-view-instructions";
        }
    }


    const getContent2 = () => {
        if(droppedCar2){
            return(
                <>
                    <CompareCarCard Car={droppedCar2} resetFunction={resetDropppedCar2}/>
                </>
            )
        } else {
            return (
                <>
                    <IoMdAddCircle/>
                    <h2>Drop a Car Here</h2>
                </>
            )
        }
    }

    const selectCar1 = (car:ICar) => {
        setDroppedCar1(car);
    }

    const selectCar2 = (car:ICar) => {
        setDroppedCar2(car);
    }
    
    const renderCarDetailsCards = () => {
        if(droppedCar1 && droppedCar2){
            return(
                <>
                    <CarDetailsCard car={droppedCar1} />
                    <CarDetailsCard car={droppedCar2} />
                </>
            );
        } else {
            return(
                <>
                </>
            );
        }
    }

    return(
        <>
            <article className="compare-page">
                <section className="compare-section">
                    <div ref={drop1} className="drop-section">
                    {
                        getContent1()
                    }
                    </div>
                    <div ref={drop2} className="drop-section">
                    {
                        getContent2()
                    }
                    </div>
                </section>
                <section className="liked-cars-section">
                    <div className="liked-cars-container">
                        <header className="liked-cars-header">
                            <h2>MyGarage</h2>
                        </header>
                        <div className="liked-cars-cards">
                        {
                            likedCars.length === 0 ? <p>You have not liked any Cars</p> :
                            likedCars.map((CarId) => {
                                return <CarMiniCard key={CarId} Car={ getCarById( cars, CarId) }/>
                            })
                        }
                        </div>
                    </div>
                </section>
                <section className="compare-mobile">
                        <h2 className="compare-mobile-title">Compare Cars</h2>
                        <div className="select-cars-section">
                            <DropDownMenu title="Select Car 1" filter={false} icon={IoMdArrowDropdown} action={selectCar1}/>
                            <DropDownMenu title="Select Car 2" filter={false} icon={IoMdArrowDropdown} action={selectCar2}/>
                        </div>
                        <h2 className={getInstructionsClassName()}>Select two cars to compare</h2>
                        <div className="car-details-cards-container">
                            {renderCarDetailsCards()}
                        </div>
                </section>
            </article>
        </>
    );
}

export default CompareView;