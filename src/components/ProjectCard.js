import React from 'react';

import "./ProjectCardStyles.css";
import pro1 from "../images/cryptochuo.png";
import pro2 from "../images/binary.jpg";
import pro3 from "../images/moon.jpg";
import { NavLink } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="work-container">
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="CryptoChuo project" />
          <h2 className="project-title">CryptoChuo</h2>
          <div className="pro-details">
            <h3>CryptoChuo is an organisation that is dedicated to provide grassroot mass education on cryptocurrency and blockchain technologies</h3>
            <div className="pro-btns">
              <NavLink to="cryptochuo.com" className="btn">View</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={pro2} alt="Binary project" />
          <h2 className="project-title">Flap Corporates</h2>
          <div className="pro-details">
            <h3>Creative web designers</h3>
            <div className="pro-btns">
              <NavLink to="flapcorporates.com" className="btn">View</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={pro3} alt="Moon project" />
          <h2 className="project-title">Kikapu</h2>
          <div className="pro-details">
            <h3>Is a global marketplace for a variety of discounted products.</h3>
            <div className="pro-btns">
              <NavLink to="www.hireme.com" className="btn">View</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
