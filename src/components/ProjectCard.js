import "./ProjectCardStyles.css";

import React from 'react';
import pro1 from "../images/moon.jpg";
import { NavLink } from "react-router-dom";

const ProjectCard = () => {
  return <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="image" />
            <h2 className="project-title">ProjectTitle</h2>
            <div className="pro-details">
                <p>This is text</p>
                <div className="pro-btns">
                    <NavLink to="cryptochuo.com" className="btn">View</NavLink>
                </div>
            </div>
        </div>
    </div>
    
    <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="image" />
            <h2 className="project-title">ProjectTitle</h2>
            <div className="pro-details">
                <p>This is text</p>
                <div className="pro-btns">
                    <NavLink to="flapcorporates.com" className="btn">View</NavLink>
                </div>
            </div>
        </div>
    </div>

    <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="image" />
            <h2 className="project-title">ProjectTitle</h2>
            <div className="pro-details">
                <p>This is textsss</p>
                <div className="pro-btns">
                    <NavLink to="www.hireme.com" className="btn">View</NavLink>
                </div>
            </div>
        </div>
    </div>
  </div>
};

export default ProjectCard