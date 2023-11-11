import React from "react";
import Image1 from "./../images/gallery/1.png";
import Image2 from "./../images/gallery/2.png";
import Image3 from "./../images/gallery/3.png";
import Image4 from "./../images/gallery/4.png";
import Image5 from "./../images/gallery/5.png";
import Image6 from "./../images/gallery/6.png";
import Image7 from "./../images/gallery/7.png";
import Image8 from "./../images/gallery/8.png";
import Image9 from "./../images/gallery/9.png";
import Image10 from "./../images/gallery/10.png";
import Image11 from "./../images/gallery/11.png";
import Image12 from "./../images/gallery/12.png";
import "./../styles/Gallery.css";


function Gallery() {
    return (
        <div>
            <h1 id="gallery_title">PHOTO GALLERY</h1>
            <div id="gallery_content">
                <div class="gallery_column">
                    <img class="gallery_image" src={Image1} alt="" />
                    <img class="gallery_image" src={Image2} alt="" />
                    <img class="gallery_image" src={Image3} alt="" />
                </div>
                <div class="gallery_column">
                    <img class="gallery_image" src={Image12} alt="" />
                    <img class="gallery_image" src={Image5} alt="" />
                    <img class="gallery_image" src={Image9} alt="" />
                </div>
                <div class="gallery_column">
                    <img class="gallery_image" src={Image7} alt="" />
                    <img class="gallery_image" src={Image8} alt="" />  
                    <img class="gallery_image" src={Image6} alt="" />
                </div>
                <div class="gallery_column">
                    <img class="gallery_image" src={Image10} alt="" />
                    <img class="gallery_image" src={Image11} alt="" />
                    <img class="gallery_image" src={Image4} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;