import React from  'react';
import './MyGarage.Page.Styles.css';
import Navbar from '../../Components/Navbar/Navbar.Component';

const MyGaragePage: React.FC = (): JSX.Element => {
    return(
        <div className="mygarage-page">
            <Navbar/>
            <h1>MyGarage</h1>
        </div>
    );
}

export default MyGaragePage;