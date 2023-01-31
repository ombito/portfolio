import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaTwitter, FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="socials">
                <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </div>
            <div className="copyright">
              <FaCopyright size={15} style={{ color: "fff" }} />Copyright 2023
            </div>
        </div>
    </div>
  )
}

export default Footer;