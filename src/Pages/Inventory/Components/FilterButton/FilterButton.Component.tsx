import React, { useState } from "react";
import './FilterButton.Component.Styles.css';
import {  useDispatch } from 'react-redux';
import { IoFilterSharp } from "react-icons/io5";
import { switchFilter } from "../../../../features/filterSlice";

interface FilterButtonProps {
    title: string
}

const FilterButton:React.FC<FilterButtonProps> = (props):JSX.Element => {

    const [ increasing, setIncreasing ] = useState(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        setIncreasing(!increasing);
        if(increasing){
            dispatch(switchFilter(`${props.title}-increasing`));
        } else {
            dispatch(switchFilter(`${props.title}-decreasing`));
        }
    }

    const iconClass = increasing ? "increasing" : "";

    return(
        <button className="filter-button" onClick={handleClick}>
            { `${props.title}` }
            <IoFilterSharp className={iconClass}/>
        </button>
    );
}

export default FilterButton;