import React from 'react';

import "./ProjectCardStyles.css";
import pro1 from "../images/cryptochuo.png";
import pro2 from "../images/helicopter.jpg";
import pro3 from "../images/iot.jpg";
import pro4 from "../images/binary.jpg";
import { NavLink } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="work-container">
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="CryptoChuo project" />
          <h2 className="project-title">CryptoChuo</h2>
          <div className="pro-details">
            <p>CryptoChuo is an organisation that is dedicated to provide grassroot mass education on cryptocurrency and blockchain technologies</p>
            <div className="pro-btns">
              <NavLink to="cryptochuo.com" className="btn">View</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={pro2} alt="Binary project" />
          <h2 className="project-title">Flapcopters</h2>
          <div className="pro-details">
            <p>Creative web designers</p>
            <div className="pro-btns">
              <NavLink to="flapcorporates.com" className="btn">View</NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-card">
          <img src={pro3} alt="Binary project" />
          <h2 className="project-title">IoT</h2>
          <div className="pro-details">
            <p className="projo2">This is an IoT project for smart agriculture that monitors soil moisture, water levels and organic content using a smartphone.</p>
          </div>
            <div className="pro-btns">
              <NavLink to="flapcorporates.com" className="btn">View</NavLink>
            </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={pro4} alt="Moon project" />
          <h2 className="project-title">Kikapu</h2>
          <div className="pro-details">
            <p>Creative web designers.</p>
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
