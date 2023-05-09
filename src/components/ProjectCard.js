import "./ProjectCardStyles.css"

import React from 'react';
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className = "project_card">
        <img src = {props.imgsrc} alt = "image" />
        <h2 className = "project_title"> {props.title}</h2>
        <div className = "project_des"> <p> {props.text} </p></div>
        <div className = "project_btn">
            <NavLink to = {props.source_code} className = "btn">Source Code</NavLink>
        </div>
    </div>
  )
}

export default ProjectCard