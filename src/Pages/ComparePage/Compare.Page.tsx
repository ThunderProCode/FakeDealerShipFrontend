import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.Component';
import './Compare.Page.Styles.css';

const ComparePage: React.FC = (): JSX.Element => {
    return(
        <div className="compare-page">
            <Navbar/>
            <h1>Compare Page</h1>
        </div>
    );
}

export default ComparePage;