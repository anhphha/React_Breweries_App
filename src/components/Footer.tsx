// import NavBar from "./NavBar"
import React from "react";
import "../styles/Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-left">
                <p>&copy; {new Date().getFullYear()} Open Breweries</p>
            </div>
            <div className="footer-right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/breweries">Breweries</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
