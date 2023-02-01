import "./HeroImgStyles.css";

import React from 'react';

import IntoImg from "../images/desert.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntoImg"/>
    </div>
    <div className="content">
        <h1>Hello. It's me</h1>
        <h2>Alvin Fred Ombito</h2>
        <p>An innovative cloud Architect with vast experience in system administration, enterprise architecture, virtualization, managing database perfomance and security foundations.</p>
        <div>
            <Link to="/about" className="btn">Read More</Link>
        </div>
    </div>
  </div>
};

export default HeroImg;