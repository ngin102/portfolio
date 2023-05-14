import "./HomeScreenStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import HomeImg from "../assets/background.gif"
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const HomeScreen = () => {

  return (
    <div className ="main_screen">

        <div className = "mask">
            <motion.div
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 1}}>
              <img className = "home_image" src = {HomeImg} alt = "Home screen image"/>
            </motion.div>
        </div>

        <div className = "info">
          <h1> HELLO
          </h1> 
          <motion.div 
            className = "name_text"
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 0.96}}>
            
            <p> I'm Nicholas! </p>

            <div className = "btn_container">
              <div className = "btn1">
                <Link to = "/about" className = "btn_about"> About Me </Link>
              </div>

              <div className = "btn2">
                <Link to = "/projects" className = "btn_projects"> Projects </Link>
              </div>
            </div>

            <div>
              <div className = "contact_container">
                  <a href = "mailto:recipient@example.com" target="_blank" rel="noopener">
                    <div className = "contact_icon"> <AiOutlineMail size = {40} style = {{color: "black"}}/> </div> 
                  </a>

                  <a href = "https://www.linkedin.com/in/nicholas-gin-6ba415275/" target="_blank" rel="noopener">
                    <div className = "contact_icon"> <AiFillGithub size = {40} style = {{color: "black"}}/>  </div>
                  </a>

                  <a href = "https://github.com/ngin102" target="_blank" rel="noopener">
                    <div className = "contact_icon"> <AiFillLinkedin size = {40} style = {{color: "black"}}/> </div> 
                  </a>
              </div>
            </div>

          </motion.div>
        </div>
    </div>
  )
}

export default HomeScreen