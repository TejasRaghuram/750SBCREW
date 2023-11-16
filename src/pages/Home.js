import React from "react";
import Logo from "./../images/logo.svg";
import "./../styles/Home.css";

function Home() {
    return (
        <div>
            <div id="home_hero">
                <img id="home_logo" src={ Logo } alt=""/>
                <div id="home_title">
                    <h1 class="home_title_text">SOUTH</h1>
                    <h1 class="home_title_text">BRUNSWICK</h1>
                    <h1 class="home_title_text">ROBOTICS</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;