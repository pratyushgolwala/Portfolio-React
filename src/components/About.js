import React from 'react'
import SkillsCarousel from './SkillsCarousel'

export default function About() {
  return (
    <div>
      <section class="about-area" id="about">
        <div class="container">
          <div class="about">

            <div class="about-content">
              <h4>About Me</h4>
              <ul>
                <li>I am currently pursuing my final year Bachelor's Degree in Computer Science Engineering.I have built a solid foundation in software development, particularly in areas such as Java, SQL, Git, and GitHub.</li>
                <li> My expertise in these areas allows me to approach projects with confidence and deliver high-quality results.I have a strong belief in the value of continuous learning and staying adaptable in the ever-evolving world of software engineering.</li>
                <li> I actively seek out opportunities to expand my knowledge and skills, embracing new technologies and approaches.Feel free to explore my work and get in touch if you have any questions or opportunities to collaborate. </li>
              </ul>
            </div>

            <div class="about-skills">
              <ul>
                <li>Name:Pratyush Golwala</li>
                <li>Age:20</li>
                <li>From:India</li>
                <li>Email:pratyushgolwala@gmail.com</li>
                <li>Availabiltiy:Fulltime/Intern</li>
                <li>Experience&lt;1yr</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-900 min-h-screen">
      <SkillsCarousel/>
    </div>


      <section class="education-content" id="education">
        <div class="container">
          <div class="row">
            <div class="education ">
              <h3 class="title">Education</h3>
              <div class="row">
                <div class="timeline-box">
                  <div class="timeline">

                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        SRM Institute Of Science And Technology
                      </h3>
                      <h4 class="timeline-title">CGPA : 8.79</h4>
                      <h4 class="timeline-title">
                        <i class="fa fa-calendar"></i> 2022-2026
                      </h4>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">L.P.Savani Academy</h3>
                      <h4 class="timeline-title">12th Grade : 84.6%</h4>
                      <h4 class="timeline-title">
                        <i class="fa fa-calendar"></i> 2021-2022
                      </h4>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        L.P.Savani Academy
                      </h3>
                      <h4 class="timeline-title">10th Grade : 81.2%</h4>
                      <h4 class="timeline-title">
                        <i class="fa fa-calendar"></i> 2019-2020
                      </h4>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="internship">
              <h3 class="title">Interests & Hobbies</h3>
              <div class="row">
                <div class="timeline-box">
                  <div class="timeline">
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        FULL STACK DEVELOPMENT
                      </h3>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        BACKEND ENGINEERING
                      </h3>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        PROMPT ENGINEERING</h3>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        GIT & GIT COMMANDS
                      </h3>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        READING BLOGS
                      </h3>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        OUTDOOR GAMES
                      </h3>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        DATA SCIENCE AND DATA ANALYTICS
                      </h3>
                    </div>
                    <div class="timeline-item">
                      <div class="circle-dot"></div>
                      <h3 class="timeline-title">
                        GENERATIVE AI
                      </h3>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="copyright">
                <p>Copyright © Pratyush.</p>
            </div>

      


     
      



    </div>
  )
}
