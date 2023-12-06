import React,{ useEffect, useState } from 'react';
import './FilterBar.Component.Styles.css';
import { FaSearch } from "react-icons/fa";
import DropDownMenu from '../DropDownMenu/DropDownMenu.Component';
import FilterButton from '../FilterButton/FilterButton.Component';
import { useDispatch } from 'react-redux';
import { switchFilter } from '../../features/filterSlice';
import { BiReset } from "react-icons/bi";

interface FilterBarProps {
    handleMakeClick: () => void;
}

const FilterBar:React.FC<FilterBarProps> = (props):JSX.Element => {

    const { handleMakeClick } = props;
    const [ inputValue, setInputValue ] = useState('');
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(switchFilter('no-filter'))    
    }

    const updateInputValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }

    const handleKeyWordSearch = () => {
        dispatch(switchFilter(`keyword-${inputValue}`));
        setInputValue('');
    }

    useEffect(()=>{
        dispatch(switchFilter('no-filter'))
    },[dispatch])

    return(
        <div className="filter-bar">
            <section className="filter-buttons">

                <DropDownMenu title="Body" options={["Sedan","SUV","Hatchback","Coupe","Pickup"]}/>
                <FilterButton title="Year"/>
                <FilterButton title="Price"/>
                <button className='reset-btn' onClick={handleMakeClick}>Make</button>
                {/* <button className="reset-btn" onClick={handleReset}>Reset <BiReset/></button> */}

            </section>
            <form className="search-bar-container">
                <input  value={inputValue} onChange={event => updateInputValue(event)} className="search-bar" type="text" />
                <button className="search-btn" type="button" onClick={handleKeyWordSearch}>Search<FaSearch/></button>
            </form>
        </div>
    );
}

export default FilterBar;

