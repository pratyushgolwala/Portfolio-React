import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { scroller } from "react-scroll"; // Removed `scroll`
import { useEffect, useState } from "react";







export default function Navbar() {
    const location = useLocation();  // Get current route
    const navigate = useNavigate();  // Programmatic navigation
    const [scrollToContact, setScrollToContact] = useState(false);


    const handleScrollToContact = () => {
        if (location.pathname !== "/") {
            setScrollToContact(true); // Mark that we need to scroll
            navigate("/");  // Switch to Home
        } else {
            scrollToContactSection();
        }
    };

    // Function to scroll after navigation
    const scrollToContactSection = () => {
        scroller.scrollTo("contact", {
            duration: 100,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    // Detect route change and scroll when on Home
    useEffect(() => {
        if (location.pathname === "/" && scrollToContact) {
            scrollToContactSection();
            setScrollToContact(false); // Reset state
        }
    }, [location.pathname, scrollToContact]);


        


        return (
            <>
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">Pratyush Golwala</Link>
                    <div className="btn-group">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active " : "bton")}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "active " : "bton")}

                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/work"
                            className={({ isActive }) => (isActive ? "active " : "bton")}

                        >
                            Work
                        </NavLink>

                    </div>
                    <NavLink
                        to="#contact"
                        
                    >
                        <button
                            style={{
                                fontSize: "24px",
                                backgroundColor: "#2b2b2b",
                                padding: "2px",
                                border: "none",
                                cursor: "pointer"
                            }}
                            onClick={handleScrollToContact}
                        >
                            <i className="fas fa-phone-square-alt" style={{ color: "gray" }}></i>
                        </button>
                    </NavLink>





                </nav>
            </>
        )
    }

