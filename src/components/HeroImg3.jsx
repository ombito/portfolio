import React from 'react';
import './HeroImg3Styles.css';
import alvin from "../images/alvin.jpg";
import tree from "../images/tree.jpg";
import nasa from "../images/nasa.jpg";

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
            <p9>As a data entry associate, my responsibilities were far from mundane. I was a data wizard, meticulously combing and rearranging information from source documents to ensure accuracy and completeness. I expertly entered this data into prescribed computer databases, files, and forms, ensuring that every single piece of information was in the right place. But my job wasn't just about inputting data, I was a master of generating reports, storing completed work in designated locations and performing backup operations to ensure that data is safe and easily accessible. My keen eye for detail and ability to spot deficiencies, I was able to correct any incompatibilities, ensuring that the output was always accurate and error-free. My skills in transcribing information into the required electronic format were unparalleled, I was able to take raw data and transform it into actionable insights that drive the performance of the company. </p9>
            <p11>Who says you can't have it all?</p11>
            <p12>❝If you pay attention to the patterns of your life you'll realize everything always works out. Everything always takes you to a greater destination. You always grow and the things you think you can't survive you somehow divinely make it through. Thats life. Always remember that.❞</p12>
            <p13>~Anonymous</p13>
          </div>
          <div className="skillscontainer">
            <h6 className="title-text">My Skillset</h6>
            <div className="skills-box">
              <span className="title">Cloud Computing</span>
              <div className="skillsbar">
                <span className="skills-per computing">
                  <span className="tooltip">95%</span>
                </span>
              </div>
            </div>
            <div className="skills-box">
              <span className="title">Cloud Security</span>
              <div className="skillsbar">
                <span className="skills-per security">
                  <span className="tooltip">95%</span>
                </span>
              </div>
            </div>
            <div className="skills-box">
              <span className="title">Python</span>
              <div className="skillsbar">
                <span className="skills-per python">
                  <span className="tooltip">90%</span>
                </span>
              </div>
            </div>
            <div className="skills-box">
              <span className="title">Javascript</span>
              <div className="skillsbar">
                <span className="skills-per javascript">
                  <span className="tooltip">85%</span>
                </span>
              </div>
            </div>
            <div className="skills-box">
              <span className="title">Networking</span>
              <div className="skillsbar">
                <span className="skills-per networking">
                  <span className="tooltip">70%</span>
                </span>
              </div>
            </div>
            <div className="skills-box">
              <span className="title">PHP</span>
              <div className="skillsbar">
                <span className="skills-per php">
                  <span className="tooltip">80%</span>
                </span>
              </div>
            </div>
            <div className="skills-box">
              <span className="title">HTML</span>
              <div className="skillsbar">
                <span className="skills-per html">
                  <span className="tooltip">90%</span>
                </span>
              </div>
            </div>
            <div className="skills-box">
              <span className="title">Bootstrap</span>
              <div className="skillsbar">
                <span className="skills-per bootstrap">
                  <span className="tooltip">80%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="certifications">
            <h5>Certifications</h5>
            <p5>I build my skills through certifications, events, and industry news</p5>
          </div>
          <div className="card-container">
            <div className="card">
              <p10>Aviatrix Certified Engineer (ACE)</p10>
            </div>
            <div className="card">
              <p10>AWS Cloud Practitioner</p10>
            </div>
            <div className="card">
              <p10>Microsoft Solutions Architect-Expert (AZ-305)</p10>
            </div><div className="card">
              <p10>Fortinet (NSE 1-3)</p10>
            </div>
            <div className="card">
              <p10>Sophos Central Endpoint and Server v3.0- Engineer</p10>
            </div>
            <div className="card">
              <p10>Sophos Cloud Security</p10>
            </div>
            <div className="card">
              <p10>Veeam XaaS Professional (VMXP)</p10>
            </div>
            <div className="card">
              <p10>Veeam Technical Sales Proffessional (VMTSP)</p10>
            </div>
            <div className="card">
              <p10>VTSP - VMware Cloud Foundation</p10>
            </div>
            <div className="card">
              <p10>VTSP - VMware HCI (Hybrid-Convergence Infrastructure)</p10>
            </div>
            <div className="card">
              <p10> SugarCRM Sales Specialist</p10>
            </div>
            <div className="card">
              <p10> VTSP - VMware Server Virtualization</p10>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImg3;
<div style={{
        width: '150px',
        height: '150px',
        backgroundSize: 'cover',
        backgroundImage: `url(${require('../images/tree.jpg')})`,
      }}></div>