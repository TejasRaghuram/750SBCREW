import React from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "./../images/logo.svg";
import "./../styles/Home.css";

function Home() {
    const navigate = useNavigate();

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
            <h1 class="home_subtitle">Learn. Innovate. Compete.</h1>
            <img id="home_image" alt=""/>
            <p class="home_information">Building a robot may sound like it may only be of interest for certain types of individuals with specific technical and programming abilities, however, experience leads us to believe that real success comes from students with a wide variety of talents and a broad base of interests working together toward achieving a particular goal.</p>
            <h1 class="home_subtitle">VEX Robotics</h1>
            <p class="home_information">VEX Robotics is a cutting-edge platform that fosters innovation and creativity in the field of robotics education. Designed to inspire students of all ages, VEX Robotics offers a wide range of kits, components, and competitions that challenge individuals to design, build, and program robots to complete specific tasks. With its user-friendly interface and versatile building system, VEX Robotics empowers learners to explore STEM concepts while honing critical thinking, problem-solving, and collaboration skills. Whether in classrooms, after-school programs, or international competitions, VEX Robotics provides a dynamic learning environment where students can unleash their potential and prepare for future careers in technology and engineering.</p>
            <p class="home_button" onClick={() => {
                window.location.href = "https://www.vexrobotics.com/";
            }}>Learn More</p>
            <h1 class="home_subtitle">6 VEX Robotics Teams</h1>
            <h1 id="home_teams" class="home_subtitle">750SBCREW</h1>
            <p class="home_information">Our teams learn how to design and build competitive robots from start to finish, and compete against other teams from NJ and Worldwide.</p>
            <p class="home_button" onClick={() => {
                navigate("/about");
            }}>Learn More</p>
            <h1 class="home_subtitle">Through the Years</h1>
            <p class="home_information">Experience our growth and favorite moments in our gallery.</p>
            <p class="home_button" onClick={() => {
                navigate("/gallery");
            }}>Our Memories</p>
            <h1 class="home_subtitle">Get Involved</h1>
            <p class="home_information">Support our initiative today!</p>
            <p class="home_button" onClick={() => {
                navigate("/sponsor");
            }}>Join the Legacy</p>
            <div id="home_spacing" />
        </div>
    );
}

export default Home;