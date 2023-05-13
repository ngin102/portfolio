import React from "react";
import ProjectGrid from "../components/ProjectGrid";
import { motion } from "framer-motion/dist/framer-motion";

const Projects = () => {
    return (
    <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity: 0}}>

        <ProjectGrid/>
    </motion.div>
    )
}

export default Projects