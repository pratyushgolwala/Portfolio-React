import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">Pratyush Golwala</a>
                <div className="btn-group">
                    <button className="btn">HOME</button>
                    <button className="btn">ABOUT</button>
                    <button className="btn">WORK</button>
                </div>
                <button style={{ fontSize: "24px", backgroundColor: "#2b2b2b", padding: "3px" }}>
                    <i className="fas fa-phone-square-alt" style={{ color: "gray" }}></i>
                </button>




            </nav>
        </>
    )
}
