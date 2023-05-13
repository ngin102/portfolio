import "./AboutScreenStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion } from "framer-motion/dist/framer-motion";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const AboutScreen = () => {
    return (
        <div>
            <h1 className = "heading">ABOUT ME</h1>
    
            <div className = "container">
                <div className="container2_1">
                    <div className="container2a">
                        <div className="img_container">
                            <img
                            src="https://media.licdn.com/dms/image/D5603AQFES3iHLD55NA/profile-displayphoto-shrink_800_800/0/1683231829400?e=1689206400&v=beta&t=b1ZMe38eEQayE5XFmOZb_S9yDJgKy59nZhCtkWcXBwU"
                            alt="Profile picture"
                            />
                        </div>
                    </div>
                    
                    <div className = "container2b">
                        <div className = "link_container">
                            <div className = "linked_icon"> <AiOutlineMail size = {40} style = {{color: "black"}}/> </div> 
                            <div className = "linked_icon"> <AiFillGithub size = {40} style = {{color: "black"}}/>  </div>
                            <div className = "linked_icon"> <AiFillLinkedin size = {40} style = {{color: "black"}}/> </div> 
                            <div className = "linked_icon"> <button>Resumé</button> </div> 
                        </div>

                        <div className="objective_card">
                            <h2 className = "center"> OBJECTIVE </h2>
                            <p className = "card_text">As a computer science graduate with passions for technology and problem-solving, I aspire to work in development to drive innovation and create impactful solutions. 
                            I have a strong work ethic and collaborate well with others. My ultimate goal is to make a meaningful contribution to an organization’s success while furthering my own expertise.</p>
                        </div>
                    </div>
                </div>

                <div className = "expandable">
                    <div className="img_container">
                            <img
                            src="https://media.licdn.com/dms/image/D5603AQFES3iHLD55NA/profile-displayphoto-shrink_800_800/0/1683231829400?e=1689206400&v=beta&t=b1ZMe38eEQayE5XFmOZb_S9yDJgKy59nZhCtkWcXBwU"
                            alt="Profile picture"
                            />
                        </div>
                        
                    <div className = "solo_container">
                        <div className = "link_container">
                            <div className = "linked_icon"> <AiOutlineMail size = {40} style = {{color: "black"}}/> </div> 
                            <div className = "linked_icon"> <AiFillGithub size = {40} style = {{color: "black"}}/>  </div>
                            <div className = "linked_icon"> <AiFillLinkedin size = {40} style = {{color: "black"}}/> </div> 
                            <div className = "linked_icon"> <button>Resumé</button> </div> 
                        </div>
                    </div>
                    
                    <div className = "solo_container">
                        <div className="objective_card">    
                            <h2 className = "center"> OBJECTIVE </h2>
                            <p className = "card_text">As a computer science graduate with passions for technology and problem-solving, I aspire to work in development to drive innovation and create impactful solutions. 
                            I have a strong work ethic and collaborate well with others. My ultimate goal is to make a meaningful contribution to an organization’s success while furthering my own expertise.</p>
                        </div>
                        
                    </div>
                </div>

                <div className = "solo_container">
                    <div className = "edu_card">
                        <h2 className = "center"> EDUCATION  </h2>
                        <p className = "center"> <b>Honours Bachelor of Science: Computer Science</b> </p>
                        <p className = "center"> (2019 - 2023) </p>
                        <p className = "center"> <b><i>Graduated Summa Cum Laude</i></b> – GPA: 9.5/10 </p>
                    </div>
                </div>

                <div className = "expandable">
                    <div className = "solo_container">
                        <div className="skills_card">
                            <h2> TECHNICAL SKILLS </h2>
                            <p> <b> Programming Languages: </b> </p>
                            <p> • Java </p>
                            <p> • Python </p>
                            <p> • C++ </p>
                            <p> • Go </p>
                            <p> • Prolog </p>
                            <p> • Scheme, OCaml </p>
                            <br></br>
                            <p> <b> Web Development: </b> </p>
                            <p> • HTML, CSS </p>
                            <p> • PHP </p> 
                            <p> • JavaScript (& React) </p>
                            <br></br>
                            <p> <b> Databases & Query Languages: </b> </p>
                            <p> • SQL (PostgreSQL) </p>
                            <p> • Firebase </p>
                            <br></br>
                            <p> <b> Development Tools & IDEs: </b> </p>
                            <p> • Git </p>
                            <p> • Android Studio </p>
                            <p> • Helix ALM </p>
                            <p> • Eclipse, Visual Studio Code </p>
                            <br></br>
                            <p> <b> Data Analysis & Visualization: </b> </p>
                            <p> • Power BI</p>
                            <br></br>
                            <p> <b> Productivity Tools: </b> </p>
                            <p> • Microsoft Office (Word, Excel, PowerPoint), Google Suite (Docs, Sheets, Slides), iWork (Pages, Numbers, Keynote) </p>
                            <p> • Final Cut Pro, Compressor </p>
                            <br></br>
                            <p> <i>Have experience working in Linux, Windows, and macOS environments</i></p>
                        </div>
                    </div>

                    <div className = "solo_container">
                        <div className="courses_card">
                            <h2> COMPLETED COURSES </h2>
                            <p> <b>Computer Science:</b></p>
                            <p> • Data Structures & Algorithms </p>
                            <p> • Programming Paradigms </p>
                            <p> • Fundamentals of Data Science </p>
                            <p> • Intro to Artificial Intelligence </p>
                            <p> • Design & Analysis of Algorithms I </p>
                            <p> • Databases I & II </p>
                            <p> • Operating Systems </p>
                            <p> • Cryptography </p>
                            <p> • WWW Structures, Techniques & Standards </p>
                            <p> • Info Retrieval & the Internet </p>
                            <p> • Programming Language Concepts </p>
                            <p> • Discrete Structures </p>
                            <p> • Professional Practice in Computing </p>
                            <p> • Intro to Formal Languages </p>
                            <p> • Advanced Programming Concepts with C++ </p>
                            <br></br>
                            <p> <b>Software Engineering:</b></p>
                            <p> • Intro to Software Engineering </p>
                            <p> • Software Requirements Analysis </p>
                            <br></br>
                            <p> <b>Computer Engineering:</b></p>
                            <p> • Computer Architecture I </p>
                            <p> • Intro to Data Communciations & Networking </p>
                            <br></br>
                            <p> <b>Information Technology:</b></p>
                            <p> • Digital Systems I </p>
                            <br></br>
                            <p> <b>Other:</b></p>
                            <p> • Technical Report Writing </p>
                            <p> • Engineering Mechanics </p>
                            <p> • Business Ethics </p>
                        </div>
                    </div>
                </div>

                <div className="container3">
                    <div className="container3a">
                        <div className="skills_card">
                            <h2> TECHNICAL SKILLS </h2>
                            <p> <b> Programming Languages: </b> </p>
                            <p> • Java </p>
                            <p> • Python </p>
                            <p> • C++ </p>
                            <p> • Go </p>
                            <p> • Prolog </p>
                            <p> • Scheme, OCaml </p>
                            <br></br>
                            <p> <b> Web Development: </b> </p>
                            <p> • HTML, CSS </p>
                            <p> • PHP </p> 
                            <p> • JavaScript (& React) </p>
                            <br></br>
                            <p> <b> Databases & Query Languages: </b> </p>
                            <p> • SQL (PostgreSQL) </p>
                            <p> • Firebase </p>
                            <br></br>
                            <p> <b> Development Tools & IDEs: </b> </p>
                            <p> • Git </p>
                            <p> • Android Studio </p>
                            <p> • Helix ALM </p>
                            <p> • Eclipse, Visual Studio Code </p>
                            <br></br>
                            <p> <b> Data Analysis & Visualization: </b> </p>
                            <p> • Power BI</p>
                            <br></br>
                            <p> <b> Productivity Tools: </b> </p>
                            <p> • Microsoft Office (Word, Excel, PowerPoint), Google Suite (Docs, Sheets, Slides), iWork (Pages, Numbers, Keynote) </p>
                            <p> • Final Cut Pro, Compressor </p>
                            <br></br>
                            <p> <i>Have experience working in Linux, Windows, and macOS environments</i></p>
                        </div>
                    </div>

                    <div className="container3b">
                        <div className="courses_card">
                            <h2> COMPLETED COURSES </h2>
                            <p> <b>Computer Science:</b></p>
                            <p> • Data Structures & Algorithms </p>
                            <p> • Programming Paradigms </p>
                            <p> • Fundamentals of Data Science </p>
                            <p> • Intro to Artificial Intelligence </p>
                            <p> • Design & Analysis of Algorithms I </p>
                            <p> • Databases I & II </p>
                            <p> • Operating Systems </p>
                            <p> • Cryptography </p>
                            <p> • WWW Structures, Techniques & Standards </p>
                            <p> • Info Retrieval & the Internet </p>
                            <p> • Programming Language Concepts </p>
                            <p> • Discrete Structures </p>
                            <p> • Professional Practice in Computing </p>
                            <p> • Intro to Formal Languages </p>
                            <p> • Advanced Programming Concepts with C++ </p>
                            <br></br>
                            <p> <b>Software Engineering:</b></p>
                            <p> • Intro to Software Engineering </p>
                            <p> • Software Requirements Analysis </p>
                            <br></br>
                            <p> <b>Computer Engineering:</b></p>
                            <p> • Computer Architecture I </p>
                            <p> • Intro to Data Communciations & Networking </p>
                            <br></br>
                            <p> <b>Information Technology:</b></p>
                            <p> • Digital Systems I </p>
                            <br></br>
                            <p> <b>Other:</b></p>
                            <p> • Technical Report Writing </p>
                            <p> • Engineering Mechanics </p>
                            <p> • Business Ethics </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutScreen