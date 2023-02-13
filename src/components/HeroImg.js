import "./HeroImgStyles.css";

import React from 'react';
import Typewriter from 'typewriter-effect';

import IntoImg from "../images/desert.jpg";
import { Link } from "react-router-dom";

function HeroImg () {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntoImg"/>
    </div>
    <div className="content">
        <h1>Hello. This is me</h1>
        <h2>
        <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 90,
              strings: ["Alvin Fred Ombito"],
            }}
          />
        </h2>
        <p>I am an innovative cloud Architect with vast experience in system administration, enterprise architecture, virtualization, managing database perfomance and security foundations.</p>
        <div>
            <Link to="/about" className="btn">Read More</Link>
        </div>
    </div>
  </div>
  )
};

export default HeroImg;