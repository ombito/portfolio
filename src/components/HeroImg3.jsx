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
        <p>As a cloud engineer, I have always been fascinated by the endless possibilities of cloud technology. With years <br/>of experience in the field, I have developed a deep understanding of how cloud solutions can be leveraged <br/> to drive business success and transformation. I have been involved in numerous projects that have helped<br/> organizations modernize their infrastructure, streamline their operations and enhance their customer experience. <br/> So you mean you are a solutions expert? It's okay, you can say it. I am drawn to cloud technology as it is an<br/> exciting and ever-evolving field that is pushing the boundaries of what is possible. When I am not at my desk,<br/> I enjoy taking road trips to discover new places and see the world from a fresh perspective. Ultimately,  <br/> whether I am in the road or in the cloud I am unceasingly in pursuit of new opportunities to learn and advance <br/> my professional development.</p>
        <div className="wrapper">
          <div className="journey">
            <h3>My Journey</h3>
            <p1>June 2022 - present</p1>
            <p2>Systems Engineer ~ Techlink Systems</p2>
            <p3>▸ Installing, configuring, testing and maintaining operating systems, application software and system management tools. <br/>▸ Overseeing Cloud infrastructure, business application designs, special security issues, and backup and redundancy strategies. <br/>▸ Ensuring high levels of systems and infrastructure availability. <br/>Linux • Veeam • AWS • Microsoft Azure • OpenStack • Fortinet</p3>
            <p4>December 2021 - May 2022</p4>
            <p5>Support Manager ~ Apollo Agriculture</p5>
            <p6> I was entrusted with leading a team of 50 agents charged with responsibilities of providing training on crucial subjects, offering sales insights that would enable them achieve their targets and maintaining consistent communication. To guarantee they accomplished their sales goals this required building a highly functioning team and setting clear performance metrics. Additionally, I was tasked with identifying and escalating high-priority matters to senior management, and carrying out requisite follow-up actions pertaining to agents feedback and concerns.</p6>
            <p7>December 2020 - June 2021</p7>
            <p8>Data Entry ~ StepWise</p8>
            <p9>As a data entry associate, my assigned duties entailed combing and rearranging information from source documents to ensure accuracy and completeness. I expertly entered this data into prescribed computer databases, files, and forms ensuring that every single piece of information was in the right place. But my job wasn't just about inputting data, I was a master of generating reports, storing completed work in designated locations and performing backup operations to ensure that data is safe and easily accessible. With my keen eye for detail and ability to spot deficiencies, I was able to correct any incompatibilities ensuring that the output was always accurate and error free. My skills in transcribing information into the required electronic format were unparalleled as I was able to take raw data and transform it into actionable insights that drive the performance of the company. </p9>
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
              <span className="title">Blockchain Development</span>
              <div className="skillsbar">
                <span className="skills-per bootstrap">
                  <span className="tooltip">80%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="certifications">
            <h5>Certifications</h5>
            <p5>I build my skills through certifications, events, and industry news.</p5>
          </div>
          <div className="card-container">
            <div className="card">
              <p10>Aviatrix Certified Engineer (ACE)</p10>
            </div>
            <div className="card">
              <p10>AWS Cloud Practitioner</p10>
            </div>
            <div className="card">
              <p10>Azure Solutions Architect - Expert (AZ-305)</p10>
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