import React from 'react';
import './FilterBar.Component.Styles.css';
import DropDownMenu from '../DropDownMenu/DropDownMenu.Component';
import { FaSearch } from "react-icons/fa";

const FilterBar:React.FC = ():JSX.Element => {
    return(
        <div className="filter-bar">
            <section className="filter-buttons">

                <DropDownMenu title="Body" options={["Sedan","SUV","Hatchback","Coupe","Pickup"]}/>
                <DropDownMenu title="Year" options={["Increasing","Decreasing"]}/>
                <DropDownMenu title="Price" options={["Increasing","Decreasing"]}/>
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

