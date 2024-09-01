
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * AppLayout==>
 * 
 * Header
 * -Logo
 * -Nav Items
 * Body
 * - Searchbar
 * - ResturantCardContainer
 *  - ResturantCard
 * Footer
 * - Copyrights
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
                    alt="Smoking burger with lettuce logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
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
const ResturantCard = () => {
    return (
        <div className="res-card">
            <div className="card-img-container">
                <img src="https://images.unsplash.com/photo-1629471722874-13d4208d62ea?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="dish-container">
            <h6 className="dish-name">
                Dish Name
                </h6><h6 className="rating-stars">
                    Krados, Johar Town, Lahore, Pakistan 
                </h6>
                <h6 className="rating-stars">
                    3.4 stars
                </h6>
                <h6 className="rating-stars">
                    38 minutes
                </h6>
            </div>
        </div>
    );
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search"/>
                <button>Search</button>
            </div>
            <div className="res-container">
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
            </div>
        </div>
    );
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
