import { React, useState } from "react";
import "./../styles/About.css"

function Team(props) {
    console.log(props.data);
    const content = [];

    content.push(
        <div>
            <h1 id="about_header">{ props.data.name }</h1>
            <img id="about_image" src={ props.data.image } alt="" />
            <p id="about_description">{ props.data.description }</p>
        </div>
    );

    content.push(
        <h2 class="about_section_header">MEMBERS</h2>
    );
    content.push(
        <h3 class="about_section_subheader">Seniors</h3>
    );
    for(let i = 0; i < props.data.members.seniors.length; i++)
    {
        content.push(
            <p class="about_section_content">{ props.data.members.seniors[i] }</p>
        );
    }
    content.push(
        <h3 class="about_section_subheader">Juniors</h3>
    );
    for(let i = 0; i < props.data.members.juniors.length; i++)
    {
        content.push(
            <p class="about_section_content">{ props.data.members.juniors[i] }</p>
        );
    }
    content.push(
        <h3 class="about_section_subheader">Sophomores</h3>
    );
    for(let i = 0; i < props.data.members.sophomores.length; i++)
    {
        content.push(
            <p class="about_section_content">{ props.data.members.sophomores[i] }</p>
        );
    }
    content.push(
        <h3 class="about_section_subheader">Freshmen</h3>
    );
    for(let i = 0; i < props.data.members.freshmen.length; i++)
    {
        content.push(
            <p class="about_section_content">{ props.data.members.freshmen[i] }</p>
        );
    }
    content.push(
        <div>
            <h3 class="about_section_subheader">Alumni</h3>
            <p class="about_section_content">{ props.data.members.alumni }</p>
        </div>
    );

    content.push(
        <h2 class="about_section_header">AWARDS</h2>
    );
    for(let i = 0; i < props.data.history.length; i++)
    {
        content.push(
            <h3 class="about_section_subheader">{ props.data.history[i].season }</h3>
        );
        for(let j = 0; j < props.data.history[i].awards.length; j++)
        {
            content.push(
                <p class="about_section_content">{ props.data.history[i].awards[j] }</p>
            );
        }
    }

    return(
        <div id="about_card">
            {content}
            <div id="about_card_space" />
        </div>
    );
}

function About() {
    const [team, setTeam] = useState("S");
    
    const data = {
        "S": {
            name: "750 SPARKS",
            image: null,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tortor lobortis, tempor lorem ut, porttitor enim. Nulla facilisi. Donec cursus risus ac lorem porttitor placerat. Praesent ex magna, venenatis sit amet scelerisque quis, interdum id leo. Integer congue euismod nulla, eget tristique felis consequat quis. Morbi suscipit sapien et lobortis imperdiet. Aliquam quis aliquet ante, eget placerat turpis. In auctor sed felis et condimentum. Aenean at cursus tortor. Nullam lorem risus, volutpat at imperdiet ac, mollis nec sapien. Fusce id justo ut massa sagittis scelerisque sit amet eget eros. Sed sollicitudin purus eu magna tempus gravida at quis arcu. Morbi bibendum tincidunt tellus, non ultricies lectus pretium eu. Ut mollis est sed dui sodales, nec dignissim purus eleifend. Maecenas sollicitudin venenatis laoreet. Integer porttitor nisi eu quam pharetra dignissim.",
            members: {
                seniors: [
                    "John Doe - Captain",
                    "John Doe - Lead Programmer",
                    "John Doe - Lead Notebook"
                ],
                juniors: [
                    "John Doe - Vice Captain",
                    "John Doe - Lead Builder",
                    "John Doe - Programmer"
                ],
                sophomores: [
                    "John Doe - Lead CAD",
                    "John Doe - Builder",
                    "John Doe - Programmer"
                ],
                freshmen: [
                    "John Doe - Recruit",
                    "John Doe - Recruit",
                    "John Doe - Recruit"
                ],
                alumni: "John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe"
            },
            history: [
                {
                    season: "Over Under (2023 - 2024)",
                    awards: [
                        "1X Tournament Champions",
                        "1X Design"
                    ]
                },
                {
                    season: "Spin Up (2022 - 2023)",
                    awards: [
                        "1X Excellence",
                        "1X Judges"
                    ]
                }
            ]
        },
        "B": {
            name: "750 BLITZ",
            image: null,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tortor lobortis, tempor lorem ut, porttitor enim. Nulla facilisi. Donec cursus risus ac lorem porttitor placerat. Praesent ex magna, venenatis sit amet scelerisque quis, interdum id leo. Integer congue euismod nulla, eget tristique felis consequat quis. Morbi suscipit sapien et lobortis imperdiet. Aliquam quis aliquet ante, eget placerat turpis. In auctor sed felis et condimentum. Aenean at cursus tortor. Nullam lorem risus, volutpat at imperdiet ac, mollis nec sapien. Fusce id justo ut massa sagittis scelerisque sit amet eget eros. Sed sollicitudin purus eu magna tempus gravida at quis arcu. Morbi bibendum tincidunt tellus, non ultricies lectus pretium eu. Ut mollis est sed dui sodales, nec dignissim purus eleifend. Maecenas sollicitudin venenatis laoreet. Integer porttitor nisi eu quam pharetra dignissim.",
            members: {
                seniors: [
                    "John Doe - Captain",
                    "John Doe - Lead Programmer",
                    "John Doe - Lead Notebook"
                ],
                juniors: [
                    "John Doe - Vice Captain",
                    "John Doe - Lead Builder",
                    "John Doe - Programmer"
                ],
                sophomores: [
                    "John Doe - Lead CAD",
                    "John Doe - Builder",
                    "John Doe - Programmer"
                ],
                freshmen: [
                    "John Doe - Recruit",
                    "John Doe - Recruit",
                    "John Doe - Recruit"
                ],
                alumni: "John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe"
            },
            history: [
                {
                    season: "Over Under (2023 - 2024)",
                    awards: [
                        "1X Tournament Champions",
                        "1X Design"
                    ]
                },
                {
                    season: "Spin Up (2022 - 2023)",
                    awards: [
                        "1X Excellence",
                        "1X Judges"
                    ]
                }
            ]
        },
        "C": {
            name: "750 COBRAS",
            image: null,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tortor lobortis, tempor lorem ut, porttitor enim. Nulla facilisi. Donec cursus risus ac lorem porttitor placerat. Praesent ex magna, venenatis sit amet scelerisque quis, interdum id leo. Integer congue euismod nulla, eget tristique felis consequat quis. Morbi suscipit sapien et lobortis imperdiet. Aliquam quis aliquet ante, eget placerat turpis. In auctor sed felis et condimentum. Aenean at cursus tortor. Nullam lorem risus, volutpat at imperdiet ac, mollis nec sapien. Fusce id justo ut massa sagittis scelerisque sit amet eget eros. Sed sollicitudin purus eu magna tempus gravida at quis arcu. Morbi bibendum tincidunt tellus, non ultricies lectus pretium eu. Ut mollis est sed dui sodales, nec dignissim purus eleifend. Maecenas sollicitudin venenatis laoreet. Integer porttitor nisi eu quam pharetra dignissim.",
            members: {
                seniors: [
                    "John Doe - Captain",
                    "John Doe - Lead Programmer",
                    "John Doe - Lead Notebook"
                ],
                juniors: [
                    "John Doe - Vice Captain",
                    "John Doe - Lead Builder",
                    "John Doe - Programmer"
                ],
                sophomores: [
                    "John Doe - Lead CAD",
                    "John Doe - Builder",
                    "John Doe - Programmer"
                ],
                freshmen: [
                    "John Doe - Recruit",
                    "John Doe - Recruit",
                    "John Doe - Recruit"
                ],
                alumni: "John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe"
            },
            history: [
                {
                    season: "Over Under (2023 - 2024)",
                    awards: [
                        "1X Tournament Champions",
                        "1X Design"
                    ]
                },
                {
                    season: "Spin Up (2022 - 2023)",
                    awards: [
                        "1X Excellence",
                        "1X Judges"
                    ]
                }
            ]
        },
        "R": {
            name: "750 ROYALS",
            image: null,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tortor lobortis, tempor lorem ut, porttitor enim. Nulla facilisi. Donec cursus risus ac lorem porttitor placerat. Praesent ex magna, venenatis sit amet scelerisque quis, interdum id leo. Integer congue euismod nulla, eget tristique felis consequat quis. Morbi suscipit sapien et lobortis imperdiet. Aliquam quis aliquet ante, eget placerat turpis. In auctor sed felis et condimentum. Aenean at cursus tortor. Nullam lorem risus, volutpat at imperdiet ac, mollis nec sapien. Fusce id justo ut massa sagittis scelerisque sit amet eget eros. Sed sollicitudin purus eu magna tempus gravida at quis arcu. Morbi bibendum tincidunt tellus, non ultricies lectus pretium eu. Ut mollis est sed dui sodales, nec dignissim purus eleifend. Maecenas sollicitudin venenatis laoreet. Integer porttitor nisi eu quam pharetra dignissim.",
            members: {
                seniors: [
                    "John Doe - Captain",
                    "John Doe - Lead Programmer",
                    "John Doe - Lead Notebook"
                ],
                juniors: [
                    "John Doe - Vice Captain",
                    "John Doe - Lead Builder",
                    "John Doe - Programmer"
                ],
                sophomores: [
                    "John Doe - Lead CAD",
                    "John Doe - Builder",
                    "John Doe - Programmer"
                ],
                freshmen: [
                    "John Doe - Recruit",
                    "John Doe - Recruit",
                    "John Doe - Recruit"
                ],
                alumni: "John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe"
            },
            history: [
                {
                    season: "Over Under (2023 - 2024)",
                    awards: [
                        "1X Tournament Champions",
                        "1X Design"
                    ]
                },
                {
                    season: "Spin Up (2022 - 2023)",
                    awards: [
                        "1X Excellence",
                        "1X Judges"
                    ]
                }
            ]
        },
        "E": {
            name: "750 EMBER",
            image: null,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tortor lobortis, tempor lorem ut, porttitor enim. Nulla facilisi. Donec cursus risus ac lorem porttitor placerat. Praesent ex magna, venenatis sit amet scelerisque quis, interdum id leo. Integer congue euismod nulla, eget tristique felis consequat quis. Morbi suscipit sapien et lobortis imperdiet. Aliquam quis aliquet ante, eget placerat turpis. In auctor sed felis et condimentum. Aenean at cursus tortor. Nullam lorem risus, volutpat at imperdiet ac, mollis nec sapien. Fusce id justo ut massa sagittis scelerisque sit amet eget eros. Sed sollicitudin purus eu magna tempus gravida at quis arcu. Morbi bibendum tincidunt tellus, non ultricies lectus pretium eu. Ut mollis est sed dui sodales, nec dignissim purus eleifend. Maecenas sollicitudin venenatis laoreet. Integer porttitor nisi eu quam pharetra dignissim.",
            members: {
                seniors: [
                    "John Doe - Captain",
                    "John Doe - Lead Programmer",
                    "John Doe - Lead Notebook"
                ],
                juniors: [
                    "John Doe - Vice Captain",
                    "John Doe - Lead Builder",
                    "John Doe - Programmer"
                ],
                sophomores: [
                    "John Doe - Lead CAD",
                    "John Doe - Builder",
                    "John Doe - Programmer"
                ],
                freshmen: [
                    "John Doe - Recruit",
                    "John Doe - Recruit",
                    "John Doe - Recruit"
                ],
                alumni: "John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe"
            },
            history: [
                {
                    season: "Over Under (2023 - 2024)",
                    awards: [
                        "1X Tournament Champions",
                        "1X Design"
                    ]
                },
                {
                    season: "Spin Up (2022 - 2023)",
                    awards: [
                        "1X Excellence",
                        "1X Judges"
                    ]
                }
            ]
        },
        "W": {
            name: "750 WOLVES",
            image: null,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec tortor lobortis, tempor lorem ut, porttitor enim. Nulla facilisi. Donec cursus risus ac lorem porttitor placerat. Praesent ex magna, venenatis sit amet scelerisque quis, interdum id leo. Integer congue euismod nulla, eget tristique felis consequat quis. Morbi suscipit sapien et lobortis imperdiet. Aliquam quis aliquet ante, eget placerat turpis. In auctor sed felis et condimentum. Aenean at cursus tortor. Nullam lorem risus, volutpat at imperdiet ac, mollis nec sapien. Fusce id justo ut massa sagittis scelerisque sit amet eget eros. Sed sollicitudin purus eu magna tempus gravida at quis arcu. Morbi bibendum tincidunt tellus, non ultricies lectus pretium eu. Ut mollis est sed dui sodales, nec dignissim purus eleifend. Maecenas sollicitudin venenatis laoreet. Integer porttitor nisi eu quam pharetra dignissim.",
            members: {
                seniors: [
                    "John Doe - Captain",
                    "John Doe - Lead Programmer",
                    "John Doe - Lead Notebook"
                ],
                juniors: [
                    "John Doe - Vice Captain",
                    "John Doe - Lead Builder",
                    "John Doe - Programmer"
                ],
                sophomores: [
                    "John Doe - Lead CAD",
                    "John Doe - Builder",
                    "John Doe - Programmer"
                ],
                freshmen: [
                    "John Doe - Recruit",
                    "John Doe - Recruit",
                    "John Doe - Recruit"
                ],
                alumni: "John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe, John Doe"
            },
            history: [
                {
                    season: "Over Under (2023 - 2024)",
                    awards: [
                        "1X Tournament Champions",
                        "1X Design"
                    ]
                },
                {
                    season: "Spin Up (2022 - 2023)",
                    awards: [
                        "1X Excellence",
                        "1X Judges"
                    ]
                }
            ]
        }
    };

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
            <Team data={data[team]}/>
        </div>
    );
}

export default About;