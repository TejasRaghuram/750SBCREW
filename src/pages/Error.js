import React from "react";
import "./../styles/Error.css";

function Error() {

    window.scrollTo(0, 0);
    
    return (
        <div id="error_content">
            <h1 id="error_title">ERROR 404</h1>
            <p id="error_subtitle">Page Not Found</p>
        </div>
    );
}

export default Error;