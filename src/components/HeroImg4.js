import "./HeroImg4Styles.css";

import React from 'react';

import IntoImg from "../images/water.jpg";

const HeroImg4 = () => {
  return <div className="heroImg">
    <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntoImg"/> 
    </div>
    <div className="content">
        <h1>Talk to me</h1>
        <p>I am always interested to hear from talented individuals </p>
    </div>
  </div>
};

export default HeroImg4;