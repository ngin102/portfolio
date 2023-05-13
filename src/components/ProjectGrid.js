import React from 'react'
import ProjectCard from "../components/ProjectCard";
import ProjectCardInfo from "../components/ProjectCardInfo";
import { motion } from "framer-motion/dist/framer-motion";

const ProjectGrid = () => {
  return (
    <div>
        <h1 className="heading">PROJECTS</h1>
        <motion.div 
          className="project_container"
          initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition={{delay: 0.4}}>
          {ProjectCardInfo.map((val, ind) => {
            return (
              <ProjectCard
                key = {ind}
                imgsrc = {val.imgsrc}
                title = {val.title}
                desc = {val.desc}
                source_code = {val.source_code}
              />
            );
          })}
        </motion.div>
    </div>
  );
}

export default ProjectGrid
