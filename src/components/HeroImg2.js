import "./HeroImg2Styles.css";

import React from 'react';

import IntoImg from "../images/dark.jpg";
import { Link } from "react-router-dom";

const HeroImg2 = () => {
  return <div className="heroImg">
    <div className="mask">
    <img className="into-img" src={IntoImg} alt="IntoImg"/> 

    </div>
    <div className="content">
        <h1>Projects</h1>
        <p>Below you will find a selection of some of my most recent web development and other projects.</p>
    </div>
  </div>
};

export default HeroImg2;


