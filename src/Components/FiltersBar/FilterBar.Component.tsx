import React,{ useEffect } from 'react';
import './FilterBar.Component.Styles.css';
import { FaSearch } from "react-icons/fa";
import DropDownMenu from '../DropDownMenu/DropDownMenu.Component';
import FilterButton from '../FilterButton/FilterButton.Component';
import { useDispatch } from 'react-redux';
import { switchFilter } from '../../features/filterSlice';

const FilterBar:React.FC = ():JSX.Element => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(switchFilter('no-filter'))
    },[])

    return(
        <div className="filter-bar">
            <section className="filter-buttons">

                <DropDownMenu title="Body" options={["Sedan","SUV","Hatchback","Coupe","Pickup"]}/>
                <FilterButton title="Year"/>
                <FilterButton title="Price"/>
                <DropDownMenu title="Make"/>

            </section>
            <form className="search-bar-container">
                <input className="search-bar" type="text" />
                <button className="search-btn" type="button">Search<FaSearch/></button>
            </form>
        </div>
    );
}

export default FilterBar;

