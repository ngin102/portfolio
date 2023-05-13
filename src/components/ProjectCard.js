import "./ProjectCardStyles.css"

import React from 'react';
import { NavLink } from "react-router-dom";


const ProjectCard = (props) => {
  return (
    <div className = "project_card">
        <video controls>
          <source src = {props.imgsrc} type = "video/mp4"/>
        </video>
        <h2 className = "project_title"> {props.title}</h2>
        <div className = "project_text"> <p> {props.desc} </p></div>
        <div className = "project_btn">
            <NavLink to = {props.source_code} className = "btn">Source Code</NavLink>
        </div>
    </div>
  )
}

export default ProjectCard