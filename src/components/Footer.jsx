import React from 'react'
import {LOGO_URL} from "../utils/constants";

    const Footer = () => {
        return (
            <div className="footer">
                <div className="logo-container">
                    <img
                        className="logo"
                        src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
                        alt="Smoking burger with lettuce logo"
                    />
                </div>
                <div className="nav-items">
                    {/* <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul> */}
                </div>
            </div>
        );
    }

export default Footer