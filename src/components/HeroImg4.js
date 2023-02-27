import "./HeroImg4Styles.css";

import React from 'react';

import IntoImg from "../images/water.jpg";

const HeroImg4 = () => {
  return <div className="heroImg">
    <img className="into-img" src={IntoImg} alt="IntoImg"/> 

    <div className="content">
      <h3>Talk to me</h3>
      <p>I am always interested to hear from talented individuals especially on big projects. However, if you have any proposal feel free to use the form. </p>
    </div>
  </div>
};

export default HeroImg4;