import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";




export default function Navbar() {
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
                <button style={{
                    fontSize: "24px",
                    backgroundColor: "#2b2b2b",
                    padding: "2px",
                    border: "none",
                    cursor: "pointer"
                }}>
                    <i className="fas fa-phone-square-alt" style={{ color: "gray" }}></i>
                </button>





            </nav>
        </>
    )
}
