import "./HeroImg3Styles.css";

import React from 'react'

import IntoImg from "../images/giraffe.jpg";

const HeroImg3 = () => {
  return <div className="heroImg">
    <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntoImg"/>
    </div>
    <div className="content">
        <p>About</p>
        <h1>I am an optimist technologist, data nerd, community builder and a family man. I am a proud kenyan who gets excited about travelling, fishing and book reading. Away from my drafting desk you can find me snuggled up in my farm and weekends with my close friends and family. I have a holistic approach to strategic thinking and hands on management.</h1>
        <h2>My Journey</h2>
        <h3>Techlink Systems</h3>
        <h3>Systems Engineer, Present</h3>
        <h3>Nairobi, Kenya</h3>
    </div>
  </div>
};

export default HeroImg3;