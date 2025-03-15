import React from 'react'
import myImage from "./mypic.png"

export default function Intro() {
    return (
        <>
            <div className="Contaner d-flex">
                <div className="Container1">
                    <div className="InnerDiv d-flex">
                        <div className='circle'></div>
                        <p>Available For Work</p>
                    </div>
                    <div>
                        <h3>SOFTWARE ENGINEER</h3>
                        <h5>FULL STACK DEVELOPER</h5>
                      
                    </div>
                    
                </div>
                <div className="Container2">
                    <div className="profile-container">
                        <img src={myImage} alt="My Profile" className="profile-image" />
                    </div>

                </div>
            </div>
        </>
    )
}
