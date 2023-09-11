import "./AboutScreenStyles.css";
import ProfilePic from "../assets/profile_pic.png";

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
                    <h1 className = "about_heading">ABOUT ME</h1>
                </motion.div>
        
                <div className = "container">
                    <div className = "container2">
                        <motion.div className = "container2a"
                         initial = {{opacity: 0}}
                         animate = {{opacity: 1}}
                         transition = {{delay: 1}}>
                            <div className="img_container">
                                <img
                                src = {ProfilePic}
                                alt = "Profile picture"
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

                                <a href = "https://www.linkedin.com/in/ngin102/" target="_blank" rel="noopener">
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
                                I have a strong work ethic and collaborate well with others.<br></br> My goal is to contribute to an organization’s success while furthering my own expertise.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div className = "expandable">

                        <motion.div className="img_container"
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{delay: 1}}>
                            <img
                            src = {ProfilePic}
                            alt = "Profile picture"
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

                                <a href = "https://www.linkedin.com/in/ngin102/" target="_blank" rel="noopener">
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
                                I have a strong work ethic and collaborate well with others. My goal is to contribute to an organization’s success while furthering my own expertise.</p>
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
                            <div className="work_card">
                                <h2> WORK EXPERIENCE </h2>
                                <p> <b>E-Commerce Advisor</b></p>
                                <p> <i>Mosaic North America</i> </p>
                                <p> Ottawa, ON, (2023 - present) </p>
                                <p> • Held one-to-one consultations with small businesses, documenting and analyzing their needs to recommend strategic plans and solutions for growing their e-commerce presence through the Canada Digital Adoption Program. </p>
                                <br></br>
                                <p> • Built e-commerce websites on Shopify, Square, and Ecwid platforms. </p>
                                <br></br>
                                <p> • Performed quality audits on existing business websites. </p>
                                <br></br>
                                <p> • Wrote resource guides and documentation to address technical and program-related inquiries. </p>
                                <br></br>
                                <p> • Coached businesses on creating digital marketing plans, including digital advertisement and analytic solutions, utilizing training from Google and Meta. </p>
                                <br></br>
                                <p> • Trained businesses on cybersecurity using training from MasterCard. </p>
                                <br></br>

                                <p> <b>IT & Digital Media Consultant</b></p>
                                <p> <i>New Star Restaurant</i> & <i>Li Va's Hair Design</i> </p>
                                <p> Pembroke, ON, (2019 - present) </p>
                                <p> • Provided comprehensive technical support for company computer and audio systems and network connectivity, including hardware setup for internet/phone systems and software installation/upgrades. </p>
                                <br></br>
                                <p> • Contacted vendors to diagnose and troubleshoot technical issues, such as those related to Point of Sale systems and inaccuracies on Google Maps. </p>
                                <br></br>
                                <p> • Created digital pricing guides used by staff members at both companies, as well as business logos, signage, and graphics. </p>
                                <br></br>
                                <p> • Managed social media accounts, including posts and performance metrics. </p>
                                <br></br>

                                <h2> VOLUNTEER EXPERIENCE </h2>
                                <p> <b>Student Audiovisual & Tech Support Aide</b></p>
                                <p> <i>Bishop Smith Catholic High School</i> </p>
                                <p> Pembroke, ON, (2015 - 2019) </p>
                                <p> • Set up and operated audiovisual equipment for school events.</p>
                                <br></br>
                                <p> • Troubleshot technical issues.</p>
                                <br></br>
                                <p> • Provided technical support to students and staff members. </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className = "solo_container"
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            transition = {{delay: 3.2}}>
                            <div className="skills_card">
                                
                            <h2> TECHNICAL SKILLS </h2>
                                <p> <b> Programming Languages: </b> </p>
                                <p> • Java </p>
                                <p> • Python (& Django) </p>
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
                                <p> • NoSQL (Firebase) </p>
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
                                <p> • Microsoft Office </p>
                                <p> (Word, Excel, PowerPoint)</p>
                                <p> • Adobe Creative Cloud </p>
                                <p> (Photoshop)</p>
                                <p> • Final Cut Pro </p>
                                <br></br>
                                <p> <i>Have experience working in Linux, Windows, and macOS environments</i></p>
                                <br></br>

                                <h2> CERTIFICATIONS </h2>
                                <p> • Google Ads Display Certification, 2023 </p>
                                <p> • Google Ads Measurement Certification, 2023 </p>
                                <p> • Google Ads Search Certification, 2023 </p>
                                <p> • Google Analytics Certification, 2023 </p>
                                <p> • Hootsuite Social Media Marketing Certification, 2023 </p>
                                <p> • Semrush Content Marketing and SEO Fundamentals with Eric Enge Certification, 2023 </p>
                                <p> • Meltwater Academy Certification Level I: Media Monitoring with Meltwater, 2023 </p>
                                <p> •  Meltwater Academy Influencer Marketing I - Industry Specialist, 2023 </p>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div className="container3"
                        initial = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        transition = {{delay: 2.7}}>
                        <div className="container3a">
                            <div className="work_card">
                                <h2> WORK EXPERIENCE </h2>
                                <p> <b>E-Commerce Advisor</b></p>
                                <p> <i>Mosaic North America</i> </p>
                                <p> Ottawa, ON, (2023 - present) </p>
                                <p> • Held one-to-one consultations with small businesses, documenting and analyzing their needs to recommend strategic plans and solutions for growing their e-commerce presence through the Canada Digital Adoption Program. </p>
                                <br></br>
                                <p> • Built e-commerce websites on Shopify, Square, and Ecwid platforms. </p>
                                <br></br>
                                <p> • Performed quality audits on existing business websites. </p>
                                <br></br>
                                <p> • Wrote resource guides and documentation to address technical and program-related inquiries. </p>
                                <br></br>
                                <p> • Coached businesses on creating digital marketing plans, including digital advertisement and analytic solutions, utilizing training from Google and Meta. </p>
                                <br></br>
                                <p> • Trained businesses on cybersecurity using training from MasterCard. </p>
                                <br></br>

                                <p> <b>IT & Digital Media Consultant</b></p>
                                <p> <i>New Star Restaurant</i> & <i>Li Va's Hair Design</i> </p>
                                <p> Pembroke, ON, (2019 - present) </p>
                                <p> • Provided comprehensive technical support for company computer and audio systems and network connectivity, including hardware setup for internet/phone systems and software installation/upgrades. </p>
                                <br></br>
                                <p> • Contacted vendors to diagnose and troubleshoot technical issues, such as those related to Point of Sale systems and inaccuracies on Google Maps. </p>
                                <br></br>
                                <p> • Created digital pricing guides used by staff members at both companies, as well as business logos, signage, and graphics. </p>
                                <br></br>
                                <p> • Managed social media accounts, including posts and performance metrics. </p>
                                <br></br>

                                <h2> VOLUNTEER EXPERIENCE </h2>
                                <p> <b>Student Audiovisual & Tech Support Aide</b></p>
                                <p> <i>Bishop Smith Catholic High School</i> </p>
                                <p> Pembroke, ON, (2015 - 2019) </p>
                                <p> • Set up and operated audiovisual equipment for school events.</p>
                                <br></br>
                                <p> • Troubleshot technical issues.</p>
                                <br></br>
                                <p> • Provided technical support to students and staff members. </p>
                            </div>
                        </div>

                        <div className="container3b">
                            <div className="skills_card">
                                <h2> TECHNICAL SKILLS </h2>
                                <p> <b> Programming Languages: </b> </p>
                                <p> • Java </p>
                                <p> • Python (& Django) </p>
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
                                <p> • NoSQL (Firebase) </p>
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
                                <p> • Microsoft Office </p>
                                <p> (Word, Excel, PowerPoint)</p>
                                <p> • Adobe Creative Cloud </p>
                                <p> (Photoshop)</p>
                                <p> • Final Cut Pro </p>
                                <br></br>
                                <p> <i>Have experience working in Linux, Windows, and macOS environments</i></p>
                                <br></br>

                                <h2> CERTIFICATIONS </h2>
                                <p> • Google Ads Display Certification, 2023 </p>
                                <p> • Google Ads Measurement Certification, 2023 </p>
                                <p> • Google Ads Search Certification, 2023 </p>
                                <p> • Google Analytics Certification, 2023 </p>
                                <p> • Hootsuite Social Media Marketing Certification, 2023 </p>
                                <p> • Semrush Content Marketing and SEO Fundamentals with Eric Enge Certification, 2023 </p>
                                <p> • Meltwater Academy Certification Level I: Media Monitoring with Meltwater, 2023 </p>
                                <p> •  Meltwater Academy Influencer Marketing I - Industry Specialist, 2023 </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutScreen