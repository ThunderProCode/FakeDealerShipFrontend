import React from "react";
import Navbar from "../../Components/Navbar/Navbar.Component";
import './Home.Page.Styles.css';
import { Link } from "react-router-dom";

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = (props) => {
    return(
        <div className="home-page">
            <Navbar/>
            <div className="slogan-container">
                <h1>Drive into Dreams, Roll out in Style</h1>
                <Link to='/inventory'>Your Journey Starts Here</Link>
            </div>
        </div>
    );
}

export default HomePage;
