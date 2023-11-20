import React from "react";
import Navbar from "../../Components/Navbar/Navbar.Component";
import './Home.Page.Styles.css';

interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = (props) => {
    return(
        <div className="home-page">
            <Navbar/>
            <div className="slogan-container">
                <h1>Drive into Dreams, Roll out in Style</h1>
                <a href="">Your Journey Starts Here</a>
            </div>
        </div>
    );
}

export default HomePage;
