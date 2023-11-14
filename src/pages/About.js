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
            <div id="about_card">
                <h1 id="about_header">750 SPARKS</h1>
                <img id="about_image" alt="" />
                <p id="about_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tortor lobortis, tempor lorem ut, porttitor enim. Nulla facilisi. Donec cursus risus ac lorem porttitor placerat. Praesent ex magna, venenatis sit amet scelerisque quis, interdum id leo. Integer congue euismod nulla, eget tristique felis consequat quis. Morbi suscipit sapien et lobortis imperdiet. Aliquam quis aliquet ante, eget placerat turpis. In auctor sed felis et condimentum. Aenean at cursus tortor. Nullam lorem risus, volutpat at imperdiet ac, mollis nec sapien. Fusce id justo ut massa sagittis scelerisque sit amet eget eros. Sed sollicitudin purus eu magna tempus gravida at quis arcu. Morbi bibendum tincidunt tellus, non ultricies lectus pretium eu. Ut mollis est sed dui sodales, nec dignissim purus eleifend. Maecenas sollicitudin venenatis laoreet. Integer porttitor nisi eu quam pharetra dignissim.</p>
                <h2 class="about_section_header">MEMBERS</h2>
                <h3 class="about_section_subheader">Seniors</h3>
                <p class="about_section_content">John Doe - Captain</p>
                <p class="about_section_content">John Doe - Lead Programmer</p>
                <p class="about_section_content">John Doe - Lead Notebook</p>
                <h3 class="about_section_subheader">Sophomores</h3>
                <p class="about_section_content">John Doe - Vice Captain</p>
                <p class="about_section_content">John Doe - Lead Builder</p>
                <p class="about_section_content">John Doe - Programmer</p>
                <h3 class="about_section_subheader">Juniors</h3>
                <p class="about_section_content">John Doe - Lead CAD</p>
                <p class="about_section_content">John Doe - Programmer</p>
                <p class="about_section_content">John Doe - Builder</p>
                <h3 class="about_section_subheader">Freshmen</h3>
                <p class="about_section_content">John Doe - Recruit</p>
                <p class="about_section_content">John Doe - Recruit</p>
                <p class="about_section_content">John Doe - Recruit</p>
                <h3 class="about_section_subheader">Alumni</h3>
                <p class="about_section_content">John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe</p>
                <h2 class="about_section_header">AWARDS</h2>
                <h3 class="about_section_subheader">Over Under (2023 - 2024)</h3>
                <p class="about_section_content">1X Tournament Champions</p>
                <h3 class="about_section_subheader">Spin Up (2022 - 2023)</h3>
                <p class="about_section_content">1X Excellence</p>
                <div id="about_card_space" />
            </div>
        </div>
    );
}

export default About;