import React from 'react';
import './LikeButton.css';
import { ICar } from '../../interfaces/ICar.Interface';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addLikedCar, removeLikedCar, selectLikedCars } from '../../features/myGarageSlice';

interface LikeButtonProps {
    car:ICar;
}

const LikeButton:React.FC<LikeButtonProps> = (props):JSX.Element => {

    const dispatch = useDispatch();
    const likedCars = useSelector(selectLikedCars);

    const liked = likedCars.includes(props.car.id);
    const selectHeart = () => {
        return liked ? <FaHeart/> : <FaRegHeart/>;
    }

    const handleLikeClick = () => {
        if(liked){
            dispatch(removeLikedCar(props.car.id));
        } else {
            dispatch(addLikedCar(props.car.id));
        }
    }

    return(
        <button className="car-like-button" onClick={handleLikeClick}>{selectHeart()}</button>
    );
}

export default LikeButton;