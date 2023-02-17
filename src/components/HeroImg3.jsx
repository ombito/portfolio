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
            <p1>June 2022 - present</p1>
            <p2>Systems Engineer ~ Techlink Systems</p2>
            <p3> Installing, configuring, testing and maintaining operating systems, application software and system management tools <br/> Overseeing "Cloud/SaaS" infrastructure, business application designs, special security issues, and backup and redundancy strategies. <br/> Linux • Veeam • AWS • Microsoft Azure • OpenStack •</p3>
            <p4>December 2021 - May 2022</p4>
            <p5>Support Manager ~ Apollo Agriculture</p5>
            <p6>My primary role was providing sales support to field agents with an aim to help them achieve their sales targets. This was all the way from </p6>
            <p7>December 2020 - June 2021</p7>
            <p8>Data Entry ~ StepWise</p8>
            <p9>As a data entry associate, my responsibilities were far from mundane. I was a data wizard, meticulously combing and rearranging information from source documents to ensure accuracy and completeness. I expertly entered this data into prescribed computer databases, files, and forms, ensuring that every single piece of information was in the right place. But my job wasn't just about inputting data, I was a master of organization, generating reports, storing completed work in designated locations and performing backup operations to ensure that data is safe and easily accessible. My keen eye for detail and ability to spot deficiencies, I was able to correct any incompatibilities, ensuring that the output was always accurate and error-free. My skills in transcribing information into the required electronic format were unparalleled, I was able to take raw data and transform it into actionable insights that drive the performance of the company. </p9>
          </div>
          <div className="skills">
            <h4>Skills</h4>
          </div>
          <div className="certifications">
            <h5>Certifications</h5>
            <p5>I build my skills through certifications, events, and industry news</p5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImg3;
