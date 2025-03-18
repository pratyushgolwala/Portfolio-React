import React, { useEffect } from "react";

export default function About() {
    useEffect(() => {
        const box = document.querySelector(".box2");
        const skills = document.querySelectorAll(".skill");

        function moveSkills() {
            skills.forEach((skill) => {
                const randomX = Math.random() * 100 - 50; // Random movement ±50px
                const randomY = Math.random() * 100 - 50;

                skill.style.transform = `translate(${randomX}px, ${randomY}px)`;
            });
        }

        box.addEventListener("mouseenter", moveSkills);

        return () => {
            box.removeEventListener("mouseenter", moveSkills);
        };
    }, []);

    return (
        <>
            <div className="Container">
                {/* OBJECTIVE */}
                <div className="Container4 box1">
                    <span className="default-text">OBJECTIVE</span>
                    <p>
                        Highly motivated Full Stack Developer with strong problem-solving
                        skills and a passion for developing scalable, efficient, and
                        user-friendly web applications. Adept at both front-end and
                        back-end development, with a keen ability to troubleshoot complex
                        issues and optimize performance.
                    </p>
                </div>

                {/* MY SKILLS */}
                <div className="Container4 box1 box2">
                    <span className="default-text">MY SKILLS</span>
                    <div className="skills-container">
                        <div className="skill skill-js">JavaScript</div>
                        <div className="skill skill-react">ReactJS</div>
                        <div className="skill skill-node">NodeJS</div>
                        <div className="skill skill-html">HTML</div>
                        <div className="skill skill-css">CSS</div>
                        <div className="skill skill-python">Python</div>
                        <div className="skill skill-sql">SQL</div>
                        <div className="skill skill-figma">Figma</div>
                    </div>

                </div>

                {/* EDUCATION */}
                <div className="Container4 box1 education-section">
                    <span className="default-text">EDUCATION</span>

                    <div className="education-container">
                        <div className="card">
                            <div className="card-header">
                                L.P.Savani Academy(2019-2022)
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <footer>
                                        <cite className="footr" title="Source Title">
                                            10th grade- 81.2%  
                                              </cite>
                                        <div className="footr" title="Source Title">
                                            12th grade- 85%

                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                SRM Katthankulathur, Chenai(2022-2026)
                            </div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <footer>
                                        <cite className="footr" title="Source Title">
                                            BTECH in CSE(IT)
                                              </cite>
                                        <div className="footr" title="Source Title">
                                            CGPA - 8.79


                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
}
