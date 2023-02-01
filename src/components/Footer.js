import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaTwitter, FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="socials">
            <a href="https://twitter.com/cashandcash" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href="https://github.com/ombito" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
                <a href="https://www.linkedin.com/in/alvinombito/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                </a>
            </div>
            <div className="copyright">
              <FaCopyright size={15} style={{ color: "fff" }} />Copyright 2023
            </div>
        </div>
    </div>
  )
}

export default Footer;