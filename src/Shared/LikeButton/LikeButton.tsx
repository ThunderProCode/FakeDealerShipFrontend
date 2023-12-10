import React from 'react';
import './LikeButton.css';
import { ICar } from '../../interfaces/ICar.Interface';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addLikedCar, removeLikedCar, selectLikedCars } from '../../features/myGarageSlice';

interface LikeButtonProps {
    car:ICar;
    width?: string,
    height?:string,
    fontSize?:string
}

const LikeButton:React.FC<LikeButtonProps> = (props):JSX.Element => {

    const { car,width,height, fontSize } = props;

    const dispatch = useDispatch();
    const likedCars = useSelector(selectLikedCars);

    const liked = likedCars.includes(car.id);
    const selectHeart = () => {
        return liked ? <FaHeart/> : <FaRegHeart/>;
    }

    const buttonStyle = {
        width: width || '1.2em',
        height: height || '1.2em',
        fontSize: fontSize || '2em'
    }

    const handleLikeClick = () => {
        if(liked){
            dispatch(removeLikedCar(car.id));
        } else {
            dispatch(addLikedCar(car.id));
        }
    }

    return(
        <button className="car-like-button" style={buttonStyle} onClick={handleLikeClick}>{selectHeart()}</button>
    );
}

export default LikeButton;