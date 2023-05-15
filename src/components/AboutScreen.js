import "./AboutScreenStyles.css";

import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import HomeImg from "../assets/background.gif"

const AboutScreen = () => {
    return (
        <div className = "about_screen">
            <div>
                <motion.div
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{delay: 0}}>
                    <img className = "home_img" src = {HomeImg} alt = "Home screen image"/>
                </motion.div>
            </div>

            <div className = "info">

                <motion.div
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{delay: 0.6}}>
                    <h1 className = "heading">ABOUT ME</h1>
                </motion.div>
        
                <div className = "container">
                    <div className="container2_1">
                        <motion.div className="container2a"
                         initial = {{opacity: 0}}
                         animate = {{opacity: 1}}
                         transition = {{delay: 1}}>
                            <div className="img_container">
                                <img
                                src="https://media.licdn.com/dms/image/D5603AQFES3iHLD55NA/profile-displayphoto-shrink_800_800/0/1683231829400?e=1689206400&v=beta&t=b1ZMe38eEQayE5XFmOZb_S9yDJgKy59nZhCtkWcXBwU"
                                alt="Profile picture"
                                />
                            </div>
                        </motion.div>
                        
                        <div className = "container2b">
                            <motion.div className = "link_container"
                               initial = {{opacity: 0}}
                               animate = {{opacity: 1}}
                               transition = {{delay: 1.5}}>
                                <a href = "mailto:nicholas.gin9@gmail.com" target="_blank" rel="noopener">
                                    <div className = "linked_icon"> <AiOutlineMail size = {40} style = {{color: "black"}}/> </div> 
                                </a>

                                <a href = "https://github.com/ngin102" target="_blank" rel="noopener">
                                    <div className = "linked_icon"> <AiFillGithub size = {40} style = {{color: "black"}}/>  </div>
                                </a>

                                <a href = "https://www.linkedin.com/in/nicholas-gin-6ba415275/" target="_blank" rel="noopener">
                                    <div className = "linked_icon"> <AiFillLinkedin size = {40} style = {{color: "black"}}/> </div> 
                                </a>
                                
                                <div className = "linked_btn"> <button className = "btn" onClick = {() => window.open("https://drive.google.com/file/d/1TkPzo_OPmYZCo8Qv4htJlSir_1279Fcx/view?usp=sharing", "_blank")}>Resumé</button> </div> 
                            </motion.div>

                            <motion.div className="objective_card"
                                initial = {{opacity: 0}}
                                animate = {{opacity: 1}}
                                transition = {{delay: 1.9}}>
                                <h2 className = "center"> OBJECTIVE </h2>
                                <p className = "card_text">As a computer science graduate with passions for technology and problem-solving, I aspire to work in development to drive innovation and create impactful solutions. 
                                I have a strong work ethic and collaborate well with others. My ultimate goal is to make a meaningful contribution to an organization’s success while furthering my own expertise.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div className = "expandable">

                        <motion.div className="img_container"
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{delay: 1}}>
                            <img
                            src="https://media.licdn.com/dms/image/D5603AQFES3iHLD55NA/profile-displayphoto-shrink_800_800/0/1683231829400?e=1689206400&v=beta&t=b1ZMe38eEQayE5XFmOZb_S9yDJgKy59nZhCtkWcXBwU"
                            alt="Profile picture"
                            />
                        </motion.div>
                            
                        <motion.div 
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{delay: 1.5}}
                            className = "solo_container">
                            <div className = "link_container">
                                <a href = "mailto:recipient@example.com" target="_blank" rel="noopener">
                                    <div className = "linked_icon"> <AiOutlineMail size = {40} style = {{color: "black"}}/> </div> 
                                </a>

                                <a href = "https://github.com/ngin102" target="_blank" rel="noopener">
                                    <div className = "linked_icon"> <AiFillGithub size = {40} style = {{color: "black"}}/>  </div>
                                </a>

                                <a href = "https://www.linkedin.com/in/nicholas-gin-6ba415275/" target="_blank" rel="noopener">
                                    <div className = "linked_icon"> <AiFillLinkedin size = {40} style = {{color: "black"}}/> </div> 
                                </a>
                                
                                <div className = "linked_btn"> <button className = "btn" onClick = {() => window.open("https://drive.google.com/file/d/1TkPzo_OPmYZCo8Qv4htJlSir_1279Fcx/view?usp=sharing", "_blank")}>Resumé</button> </div> 
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{delay: 1.9}}
                            className = "solo_container">
                            <div className="objective_card">    
                                <h2 className = "center"> OBJECTIVE </h2>
                                <p className = "card_text">As a computer science graduate with passions for technology and problem-solving, I aspire to work in development to drive innovation and create impactful solutions. 
                                I have a strong work ethic and collaborate well with others. My ultimate goal is to make a meaningful contribution to an organization’s success while furthering my own expertise.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className = "solo_container">
                        <motion.div className = "edu_card"
                           initial = {{opacity: 0}}
                           animate = {{opacity: 1}}
                           transition = {{delay: 2.3}}>
                            <h2 className = "center"> EDUCATION  </h2>
                            <p className = "center"> <b>Honours Bachelor of Science: Computer Science</b> </p>
                            <p className = "center"> (2019 - 2023) </p>
                            <p className = "center"> <b><i>Graduated Summa Cum Laude</i></b> – GPA: 9.5/10 </p>
                        </motion.div>
                    </div>

                    <div className = "expandable">
                        <motion.div 
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{delay: 2.7}}
                            className = "solo_container">
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
                                <p> • Eclipse </p>
                                <p> • Visual Studio Code </p>
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
                        </motion.div>

                        <motion.div 
                            className = "solo_container"
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{delay: 3.2}}>
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
                        </motion.div>
                    </div>

                    <motion.div className="container3"
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        transition = {{delay: 2.7}}>
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
                                <p> • Eclipse </p>
                                <p> • Visual Studio Code </p>
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
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutScreen