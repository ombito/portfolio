import React from 'react';
import './HeroImg3Styles.css';
import alvin from "../images/alvin.jpg";
import tree from "../images/tree.jpg";
import nasa from "../images/nasa.jpg";

const HeroImg3 = () => {
  return (
    <section className="hero-section">
      

      <div className="about-me">
        <h2>About Me</h2>
        <p>As a cloud engineer, I have always been fascinated by the endless possibilities of cloud technology. With years of experience in the field, I have developed a deep understanding of how cloud solutions can be leveraged to drive business success and transformation. I have been involved in numerous projects that have helped organizations modernize their infrastructure, streamline their operations and enhance their customer experience. I am drawn to cloud technology as it is an exciting and ever-evolving field that is pushing the boundaries of what is possible. I spend most of my time in Nairobi, Kenya, where I enjoy spending time on my farm, the excellent coffee, and taking road trips to discover new places and experience what mother nature has to offer. I can't reiterate this enough: getting to the cloud must be the best decision or really anything elseUltimately, whether I am in the road or in the cloud I am unceasingly in pursuit of new opportunities to learn and advance my professional development. That, in a nutshell is what drives me everyday - cool stuff you probably didn't know about me.</p>
        <div className="wrapper">
          <div className="journey">
            <h3>My Journey</h3>
            <div className="techlink">
              <p1>Present</p1>
              <p2>Systems Engineer ~ Techlink Systems</p2>
              <p3>▸ Installing, configuring, testing and maintaining operating systems, application software and system management tools. <br/>▸ Overseeing Cloud infrastructure, business application designs, special security issues, and backup and redundancy strategies. <br/>▸ Ensuring high levels of systems and infrastructure availability. <br/>Linux • Veeam • AWS • Microsoft Azure • OpenStack • Fortinet</p3>
            </div>
            <div className="apollo">
              <p1>2021 - 2022</p1>
              <p2>Support Manager ~ Apollo Agriculture</p2>
              <p3> I was entrusted with leading a team of 50 agents charged with responsibilities of providing training on crucial subjects, offering sales insights that would enable them achieve their targets and maintaining consistent communication. To guarantee they accomplished their sales goals this required building a highly functioning team and setting clear performance metrics.</p3>
            </div>
            <div className="stepwise">
              <p1>2020 - 2021</p1>
              <p2>Data Entry ~ StepWise</p2>
              <p3>As a data entry associate, my assigned duties entailed combing and rearranging information from source documents to ensure accuracy and completeness. I expertly entered this data into prescribed computer databases, files, and forms ensuring that every single piece of information was in the right place. </p3>
            </div>
            <div className="subsahara">
              <p1>2020 - 2023</p1>
              <p2>Research Assistant ~ Sub-sahara Research Services</p2>
              <p3>▸Writing reports <br/>▸fgfds <br/> fds</p3>
            </div>
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
            <div>
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
          <div className="word">
              <p>Who says you can't have it all?</p>
              <p4>❝If you pay attention to the patterns of your life you'll realize everything always works out. Everything always takes you to a greater destination. You always grow and the things you think you can't survive you somehow divinely make it through. Thats life. Always remember that.❞</p4>
              <p5>~Anonymous</p5>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImg3;
