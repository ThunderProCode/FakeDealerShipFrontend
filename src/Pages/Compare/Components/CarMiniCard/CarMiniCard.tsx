import React from 'react';
import './CarMiniCard.css';
import { ICar } from '../../../../interfaces/ICar.Interface';
import { useDrag } from 'react-dnd/dist/hooks';

interface MiniCardProps {
    Car:ICar | undefined
}

const CarMiniCard:React.FC<MiniCardProps> = (props):JSX.Element => {

    const { Car } = props;
    const [, drag] = useDrag({
            type: 'CAR',
            item: { id: Car?.id},
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            })
    })

    if(Car){
        return(
            <div className="mini-card" ref={drag} >
                <section className="mini-image-container">
                    <img draggable="false" src={Car?.images[0]} alt="" />
                </section>
                <ul className="mini-details-container">
                    <li ><span className="mini-detail-title">Make: </span><p> {`${Car.make}`}</p></li>
                    <li ><span className="mini-detail-title">Model: </span><p> {`${Car.model}`}</p></li>
                    <li><span className="mini-detail-title">Year: </span><p> {`${Car.year}`}</p></li>
                </ul>
            </div>
        );
    } else {
        return(
            <div className="mini-card">
                <h2>Car not found</h2>
            </div>
        );
    }
}

export default CarMiniCard;
