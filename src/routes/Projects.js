import React from "react";
import ProjectGrid from "../components/ProjectGrid";
import { motion } from "framer-motion/dist/framer-motion";
import HomeImg from "../assets/background.gif"

const Projects = () => {
    return (
    <div className = "project_screen">
        <div>
            <motion.div
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{delay: 0}}>
                <img className = "home_img" src = {HomeImg} alt = "Home screen image"/>
            </motion.div>
        </div>

        <motion.div className = "info"
            initial = {{opacity: 0}}
            animate = {{opacity: 1}}
            exit = {{opacity: 0.6}}>
            <ProjectGrid/>
        </motion.div>
    </div>
    )
}

export default Projects