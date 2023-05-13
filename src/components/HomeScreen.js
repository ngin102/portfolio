import "./HomeScreenStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import { motion } from "framer-motion/dist/framer-motion";
import HomeImg from "../assets/background.gif"
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const HomeScreen = () => {

  const hello = useRef();
  const name = useRef();
 
  useEffect(() => {
    init(hello.current, 
      {
        showCursor: true,
        strings: ["HELLO"],
        loop: false,
        showCursor: false,
        typeSpeed: 120,
        startDelay: 0,
      })
    console.log(hello)
  },[])

  return (
    <div className ="main_screen">

        <div className = "mask">
            <motion.div
              initial = {{opacity: 0}}
              animate = {{opacity: 1}}
              transition = {{delay: 1}}>
              <img className = "home_img" src = {HomeImg} alt = "Home screen image"/>
            </motion.div>
        </div>

        <div className = "info">
          <h1> <span ref = {hello}></span> </h1> 
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