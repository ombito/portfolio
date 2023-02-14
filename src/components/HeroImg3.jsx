import React from 'react';
import './HeroImg3Styles.css';
import giraffe from "../images/giraffe.jpg";

const HeroImg3 = () => {
  return (
    <section>
      <div className="about-me">
        <h2>About Me</h2>
        <p>I am an optimist, a data nerd, technologist, open-source enthusiast and a family man. I am a proud <br/> Kenyan who gets excited about travelling, swimming and book reading. When I am not at my desk, <br/> you can find me on my farm or spending weekends with my family and friends. I have a holistic approach to strategic <br/> thinking and hands on management.</p>
        <div className="wrapper">
          <div className="journey">
            <h2>My Journey</h2>
            <p>Techlink Systems <br/> Systems Engineer, Present <br/> Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImg3;
