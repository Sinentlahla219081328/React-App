// src/pages/About.js
import React from 'react';
import './About.css';  // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Library Management System</h1>
      <h2>Overview</h2>
      <p>
        Our Library Management System is designed to provide users with seamless access to a wide variety of books 
        and digital resources. With this system, users can easily manage their accounts, browse collections, and 
        keep track of borrowed books.
      </p>
      
      <h2>Vision</h2>
      <p>
        Our vision is to create a community where everyone has access to knowledge and resources, empowering people 
        to learn and grow.
      </p>
      
      <h2>Mission</h2>
      <p>
        Our mission is to provide a user-friendly platform for managing library resources, enhancing the reading 
        experience, and making knowledge accessible to all.
      </p>
    </div>
  );
};

export default About;


