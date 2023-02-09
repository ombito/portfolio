import React from 'react'
import "./HeroImg3Styles.css";
import IntoImg from "../images/giraffe.jpg";

const HeroImg3 = () => {
  return (
    <div className="heroImg">
      <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntoImg"/>
      </div>
      <div className="content">
        <h1>About</h1> 
        <p>I am an optimist, a data nerd, technologist, open-source enthusiast and a family man. I am a proud kenyan who gets excited about travelling, swimming and book reading. Away from my drafting desk you can find me snuggled up in my farm and weekends with my close family and friends. I have a holistic approach to strategic thinking and hands on management.</p>
        <h1>My Journey</h1>
        <h2>Techlink Systems</h2>
        <p>Systems Engineer, Present <br/>In this role, I am tasked with: <br/>1. Installing, configuring, testing and maintaining operating systems, application software and system management tools. <br/> 2. Overseeing "Cloud/SaaS" infrastructure, business application designs, special security issues, and backup and redundancy strategies. <br/> 3.Ensuring high levels of systems and infrastructure availability.</p>
        <h2> Apollo Agriculture</h2>
        <p>Support Manager, December 2021 - May 2022 <br/> My primary role was providing sales support to field agents with an aim to help them achieve their sales targets. This was all the way from: <br/> Training agents on key topics and providing sales tips to overcome any sales blockers or other hurdles on performance of their duties. <br/> 2. Accurately collecting feedback and assisting agents to resolve any challenges. <br/>3. Regularly communicating key talking points to agents both for informative purposes and for boosting sales performance.</p> 
        <h2>StepWise</h2>
        <p>As a data entry associate, my responsibilities were far from mundane. I was a data wizard, meticulously combing and rearranging information from source documents to ensure accuracy and completeness. I expertly entered this data into prescribed computer databases, files, and forms, ensuring that every single piece of information was in the right place. But my job wasn't just about inputting data, I was a master of organization, generating reports, storing completed work in designated locations and performing backup operations to ensure that data is safe and easily accessible. My keen eye for detail and ability to spot deficiencies, I was able to correct any incompatibilities, ensuring that the output was always accurate and error-free. My skills in transcribing information into the required electronic format were unparalleled, I was able to take raw data and transform it into actionable insights that drive the performance of the company.</p>
        <h1>Education</h1> 
        <p>Bachelors in Business Information Technology, <br/> KCA University </p>
        <h1>Certifications</h1> Staying up to date on new technologies has been criticatl to my continued success.
        <p>• Aviatrix Certified Engineer (ACE) <br/> • AWS Cloud Practitioner <br/> • AZ 305 Microsoft Solutions Expert</p>
      </div>
    </div>
  );
};

export default HeroImg3;
