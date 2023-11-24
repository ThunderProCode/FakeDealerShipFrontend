import React from 'react';
import Navbar from '../../Components/Navbar/Navbar.Component';
import './Compare.Page.Styles.css';

const ComparePage: React.FC = (): JSX.Element => {
    return(
        <>
            <Navbar/>
            <div className="compare-page">
                <h1>Compare Page</h1>
            </div>
        </>
    );
}

export default ComparePage;