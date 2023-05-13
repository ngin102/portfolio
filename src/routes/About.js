import React from "react";
import AboutScreen from "../components/AboutScreen";
import { motion } from "framer-motion/dist/framer-motion";

const About = () => {
  return (
    <motion.div
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}>
        <AboutScreen/>
    </motion.div>
  )
}

export default About