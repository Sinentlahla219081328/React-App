// src/pages/Home.js
import React from 'react';
import './Home.css';  // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <h1>Welcome to the Library Management System</h1>
        <p>
          Our Library Management System offers a wide variety of books and resources 
          to help you on your reading journey. Explore our collections, manage your 
          account, and borrow books with ease.
        </p>
      </div>
      <img 
        src="Library.jpg" 
        alt="Library" 
        className="library-image" 
      />
    </div>
  );
};

export default Home;

