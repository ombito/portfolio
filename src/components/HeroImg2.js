import "./HeroImg2Styles.css";

import React from 'react';

import IntoImg from "../images/eye.jpg";
import { Link } from "react-router-dom";

const HeroImg2 = () => {
  return <div className="heroImg">
    <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntoImg"/>
    </div>
    <div className="content">
        <p>Projects</p>
        <h1>Below you will find a selection of some of my most recent projects that showcase my programming skills</h1>
    </div>
  </div>
};

export default HeroImg2;


