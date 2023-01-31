import "./HeroImg4Styles.css";

import React from 'react';

import IntoImg from "../images/water.jpg";

const HeroImg4 = () => {
  return <div className="heroImg">
    <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntoImg"/> 
    </div>
    <div className="content">
        <p>Talk to me</p>
        <h1>I am always interested to hear from talented individuals who</h1>
    </div>
  </div>
};

export default HeroImg4;