import { React, useState } from "react";
import "./../styles/About.css"

function About() {
    const [team, setTeam] = useState("S");
    return (
        <div>
            <h1 id="about_title">OUR TEAMS</h1>
            <h1 id="about_teams">
                <span class={ team === "S" ? "about_selected" : "about_selectable" } onClick={() => {
                    setTeam("S");
                }}>S</span>
                <span class={ team === "B" ? "about_selected" : "about_selectable" } onClick={() => {
                    setTeam("B");
                }}>B</span>
                <span class={ team === "C" ? "about_selected" : "about_selectable" } onClick={() => {
                    setTeam("C");
                }}>C</span>
                <span class={ team === "R" ? "about_selected" : "about_selectable" } onClick={() => {
                    setTeam("R");
                }}>R</span>
                <span class={ team === "E" ? "about_selected" : "about_selectable" } onClick={() => {
                    setTeam("E");
                }}>E</span>
                <span class={ team === "W" ? "about_selected" : "about_selectable" } onClick={() => {
                    setTeam("W");
                }}>W</span>
            </h1>
        </div>
    );
}

export default About;