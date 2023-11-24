import React from "react";
import './HomeView.css';
import { Link } from "react-router-dom";

interface HomePageProps {

}

const HomeView: React.FC<HomePageProps> = (props) => {
    return(
        <div className="home-page">
            <div className="slogan-container">
                <h1>Drive into Dreams, Roll out in Style</h1>
                <Link to='/inventory/cars'>Your Journey Starts Here</Link>
            </div>
        </div>
    );
}

export default HomeView;
