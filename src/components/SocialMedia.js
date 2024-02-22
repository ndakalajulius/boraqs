// SocialMedia.js
import React from 'react';
import './SocialMedia.css'; // Import the CSS file for styling

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      {/* Add more social media icons as needed */}
    </div>
  );
};

export default SocialMedia;
