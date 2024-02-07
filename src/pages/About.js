// AboutPage.js

import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className="about-container">
        <h2>About Us</h2>
        <div></div>
        Welcome to Boraqs Filing System, a comprehensive solution designed to
        streamline and optimize your file management processes.
      </div>
      <div className="mission-container">
        <h2> Our Mission</h2>
        <p>
          {" "}
          At [File Tracking System Name], our mission is to revolutionize the
          way you manage, track, and access your important documents. We
          understand the challenges organizations face in keeping track of vast
          amounts of information, and we're here to simplify that process for
          you.
        </p>
      </div>
      <div className="choose-container">
        <h2>Why choose us</h2>
        <p>
          {" "}
          <b> Simplicity</b>: Our user-friendly interface makes it easy for
          everyone in your organization to adopt and utilize the system with
          minimal training.
        </p>
        <p>
          <b>Scalability</b>: Whether you're a small startup or a large
          enterprise, our system scales to accommodate your growing needs.
        </p>
        <p>
          <b>Cost-Effectiveness</b>: Save time and resources by eliminating
          manual file tracking processes and reducing the risk of errors and
          inefficiencies.
        </p>
        <p>
          <b> Customer Support</b>: We're committed to providing exceptional customer
          support every step of the way. Our team is here to assist you with any
          questions or concerns you may have.
        </p>
      </div>
      
      <Footer/>
    </>
  );
};

export default About;
