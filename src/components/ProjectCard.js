import "./ProjectCardStyles.css"

import React from 'react';
import { NavLink } from "react-router-dom";


const ProjectCard = (props) => {
  const { imgsrc, title, desc, source_code } = props;
  const isHttps = typeof imgsrc === 'string' && imgsrc.startsWith('https:');

  if (isHttps) {
    return (
      <div className="project_card">
        <div className="video_container">
          <iframe
            src={imgsrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="project_title">{title}</h2>
        <div className="project_text">
          <p>{desc}</p>
        </div>
        <div className="project_btn">
          <NavLink to={source_code} className="btn">Source Code</NavLink>
        </div>
      </div>
    );
  } else {
    return (
      <div className="project_card">
        <div className="video-container">
          <img src = {imgsrc} alt="Video Thumbnail" />
        </div>
        <h2 className="project_title">{title}</h2>
        <div className="project_text">
          <p>{desc}</p>
        </div>
        <div className="project_btn">
          <NavLink to={source_code} className="btn">Source Code</NavLink>
        </div>
      </div>
    );
  }
};



export default ProjectCard