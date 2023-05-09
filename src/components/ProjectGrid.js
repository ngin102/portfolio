import React from 'react'
import ProjectCard from "../components/ProjectCard";
import ProjectCardInfo from "../components/ProjectCardInfo";

const ProjectGrid = () => {
  return (
    <div>
      <div className="work_info_container">
        <h1 className="heading">Projects</h1>
        <div className="project_container">
          {ProjectCardInfo.map((val, ind) => {
            return (
              <ProjectCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                source_code={val.source_code}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectGrid
