import React from 'react';
import './HeroImg3Styles.css';
import giraffe from "../images/giraffe.jpg";

const HeroImg3 = () => {
  return (
    <section>
      <div className="about-me">
        <h1>About</h1>
        <div className="wrapper">
          <div className="content">
            <h3>I am an optimist, a data nerd, technologist, open-source enthusiast and a family man. I am a proud Kenyan who gets excited about travelling, swimming and book reading. When I am not at my desk, you can find me on my farm or spending weekends with my family and friends. I have a holistic approach to strategic thinking and hands on management.</h3>
          </div>
        </div>
        <div className="image-section">
          <img src={giraffe} alt="Giraffe" />
        </div>
      </div>
    </section>
  );
};

export default HeroImg3;
