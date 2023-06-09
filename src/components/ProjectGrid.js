import React from 'react'
import ProjectCard from "../components/ProjectCard";
import ProjectCardInfo from "../components/ProjectCardInfo";
import { motion } from "framer-motion/dist/framer-motion";

const ProjectGrid = () => {
  return (
    <div>
        <motion.div 
          initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition={{delay: 0.6}}>
          <h1 className="heading">PROJECTS</h1>
        </motion.div>
        <motion.div 
          className="project_container"
          initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition={{delay: 1}}>
          {ProjectCardInfo.map((val, ind) => {
            return (
              <ProjectCard
                key = {ind}
                imgsrc = {val.imgsrc}
                title = {val.title}
                desc = {val.desc}
                task1 = {val.task1}
                task2 = {val.task2}
                task3 = {val.task3}
                task4 = {val.task4}
                source_code = {val.source_code}
              />
            );
          })}
        </motion.div>
    </div>
  );
}

export default ProjectGrid
