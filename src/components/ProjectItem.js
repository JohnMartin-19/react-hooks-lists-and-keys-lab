import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        
        <div>
        {technologies.map((technology)=>{
            <span key={technology.name}>{technology}</span> 
        })}
        </div>
        
      </div>
    </div>
  );
}

export default ProjectItem;
