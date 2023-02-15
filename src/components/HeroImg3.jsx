import React from 'react';
import './HeroImg3Styles.css';
import alvin from "../images/alvin.jpg";

const HeroImg3 = () => {
  return (
    <section className="hero-section">
      <div>
      <img className='profile' src={alvin} width="500" height="540" />
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>I am an optimist, a data nerd, technologist, open-source enthusiast and a family man. I am a proud <br/> Kenyan who gets excited about travelling, swimming and book reading. When I am not at my desk, <br/> you can find me on my farm or spending weekends with my family and friends. I have a <br/>holistic approach to strategic thinking and hands on management.</p>
        <div className="wrapper">
          <div className="journey">
            <h3>My Journey</h3>
            <p1>Techlink Systems <br/> Systems Engineer, Present <br/> Nairobi, Kenya</p1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImg3;
