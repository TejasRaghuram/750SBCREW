import React from "react";
import SponsorshipPacket from "./../images/sponsorship.pdf";
import "./../styles/Sponsor.css"

function Sponsor() {
    return (
        <div>
            <h1 id="sponsor_title">SPONSOR US!</h1>
            <p id="sponsor_subtitle">Please read the below information to help out South Brunswick Robotics!</p>
            <iframe id="sponsor_packet" src={SponsorshipPacket} title="Sponsorship Packet"/>
        </div>
    );
}

export default Sponsor;