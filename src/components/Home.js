import React from 'react'
import myImage from "./mypic.png"
import { Typewriter } from "react-simple-typewriter";
import resumePDF from "./PRATYUSH GOLWALA RESUME 2.pdf"



export default function Intro() {
    return (
        <div>
            <div className="Contaner d-flex ">
                <div className="Container1 my-5">
                    <div className="InnerDiv d-flex">
                        <div className='circle'></div>
                        <p>Available For Work</p>
                    </div>
                    <div>
                        <h4><span>Hi</span>, I'm Pratyush!</h4>
                        <h5 className='my-3'>Building smart, scalable, and seamless web experiences.</h5>
                        <h2 className="typing-effect my-3">
                            <Typewriter
                                words={["Full Stack Developer", "Freelancer", "Software Engineer"]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h2>

                    </div>
                    <div className="downloads">
                        <a href={resumePDF} download="My_Resume.pdf">
                            <button className="btn4 btn">Download Resume</button>
                        </a>
                        <button className="btn4 btn" href="/">
                            Contact Me
                        </button>
                    </div>

                    <div class="social-icons my-3">
                        <a href="https://github.com/pratyushgolwala" class="icon"><i class="fab fa-github"></i></a>
                        <a href="/" class="icon"><i class="fab fa-twitter"></i></a>
                        <a href="http://linkedin.com/in/pratyush-golwala-16242a322" class="icon"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/pratyyuusshhh?igsh=a2Z6bWhzc3c0MDN3" class="icon"><i class="fab fa-instagram"></i></a>
                    </div>

                    <div className="contact-floating1">
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    <div class="contact-floating2">
                        <i class="fas fa-user-cog"></i>
                    </div>



                </div>
                <div className="container">
                    <div className="profile-container">
                        <img src={myImage} alt="My Profile" className="profile-image" />
                    </div>
                </div>

            </div>



            <h1 class="contact-heading">CONTACT ME</h1>





            <div id="contact" className='contact'>
                <div class="container">
                    <div class="contact-floating">
                        <i class="fas fa-code"></i>
                    </div>
                    <div class="contact-left">
                        <h1 class="sub-title">Find me Here</h1>
                        <p ><i class="fas fa-paper-plane"></i> pratyushgolwala@gmail.com</p>
                        <p><i class="fa-solid fa-phone"></i> 8200229608</p>
                        <div class="social-icons">
                            <a href="https://github.com/pratyushgolwala" class="icon"><i class="fab fa-github"></i></a>
                            <a href="/" class="icon"><i class="fab fa-twitter"></i></a>
                            <a href="http://linkedin.com/in/pratyush-golwala-16242a322" class="icon"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://www.instagram.com/pratyyuusshhh?igsh=a2Z6bWhzc3c0MDN3" class="icon"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="contact-right">
                        <form id="contact-form">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" class="btn btn2">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>Copyright © Pratyush.</p>
            </div>

        </div>

    )
}
