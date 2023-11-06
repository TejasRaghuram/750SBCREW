import React from "react";
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from "./../images/home_icon.png";
import AboutIcon from "./../images/about_icon.png";
import GalleryIcon from "./../images/gallery_icon.png";
import SponsorIcon from "./../images/sponsor_icon.png";
import Viking from "./../images/viking.svg";
import Logo from "./../images/logo.svg";
import "./../styles/Layout.css";

function Layout() {

    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    return (
        <div>
            <div id="navbar">
                <img src={Logo} id="navbar_logo" alt=""/>
                <div id="navbar_items">
                    <div class="navbar_item" onClick={() => {
                        navigate("/");
                    }}>
                        <div class={ (currentPage === '/' || currentPage === '') ? "navbar_indicator navbar_selected":"navbar_indicator" } />
                        <img class={ (currentPage === '/' || currentPage === '') ? "navbar_icon navbar_selected":"navbar_icon" } src={HomeIcon} alt=""/>
                        <p class={ (currentPage === '/' || currentPage === '') ? "navbar_label navbar_selected":"navbar_label" }>HOME</p>
                    </div>
                    <div class="navbar_item" onClick={() => {
                        navigate("/about");
                    }}>
                        <div class={ currentPage === '/about' ? "navbar_indicator navbar_selected":"navbar_indicator" } />
                        <img class={ currentPage === '/about' ? "navbar_icon navbar_selected":"navbar_icon" } src={AboutIcon} alt=""/>
                        <p class={ currentPage === '/about' ? "navbar_label navbar_selected":"navbar_label" }>ABOUT</p>
                    </div>
                    <div class="navbar_item" onClick={() => {
                        navigate("/gallery");
                    }}>
                        <div class={ currentPage === '/gallery' ? "navbar_indicator navbar_selected":"navbar_indicator" } />
                        <img class={ currentPage === '/gallery' ? "navbar_icon navbar_selected":"navbar_icon" } src={GalleryIcon} alt=""/>
                        <p class={ currentPage === '/gallery' ? "navbar_label navbar_selected":"navbar_label" }>GALLERY</p>
                    </div>
                    <div class="navbar_item" onClick={() => {
                        navigate("/sponsor");
                    }}>
                        <div class={ currentPage === '/sponsor' ? "navbar_indicator navbar_selected":"navbar_indicator" } />
                        <img class={ currentPage === '/sponsor' ? "navbar_icon navbar_selected":"navbar_icon" } src={SponsorIcon} alt=""/>
                        <p class={ currentPage === '/sponsor' ? "navbar_label navbar_selected":"navbar_label" }>SPONSOR</p>
                    </div>
                </div>
                <img src={Viking} id="navbar_viking" alt=""/>
            </div>
            <div id="page">
                <Outlet/>
            </div>
            <div id="footer">
                <div id="footer_separation"/>
                <p id="footer_sbhs">SBHS ROBOTICS</p>
                <p id="footer_sbcrew">750SBCREW</p>
            </div>
        </div>
    );
}

export default Layout;