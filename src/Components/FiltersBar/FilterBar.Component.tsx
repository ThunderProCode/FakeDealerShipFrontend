import React from 'react';
import './FilterBar.Component.Styles.css';

const FilterBar:React.FC = ():JSX.Element => {
    return(
        <div className="filter-bar">
            <section className="filter-buttons">
                <select name="type" id="select-type">
                    <option value="0">Type: </option>
                    <option value="1">Sedan</option>
                    <option value="2">Coupe</option>
                    <option value="3">SUV</option>
                    <option value="4">Hatchback</option>
                </select>

                <select name="year" id="select-year">
                    <option value="0">Year: </option>
                    <option value="1">Increasing</option>
                    <option value="2">Decreasing</option>
                </select>

                <select name="price" id="select-price">
                    <option value="0">Price: </option>
                    <option value="1">Increasing</option>
                    <option value="2">Decreasing</option>
                </select>

                <button type="button">Make</button>

            </section>
            <section className="search-bar-container">
                <input className="search-bar" type="text" />
            </section>
        </div>
    );
}

export default FilterBar;

