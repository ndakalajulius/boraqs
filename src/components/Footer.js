// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact Us: info@boraqs.or.ke | (+254) 20 2728 444 / 726 243 005 / 780 496 588</p>
        <p>Help Center: <a href="/faq">FAQ</a> | <a href="/user-guide">User Guide</a></p>
        <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
        <p>Copyright © 2024 Boraqs TrackingSystem Inc. All rights reserved.</p>
        <p>Follow Us: <a href="/twitter"><i className="fab fa-twitter"></i></a> <a href="/facebook"><i className="fab fa-facebook"></i></a></p>
        <p><a href="/feedbackform">Send Feedback</a></p>
      </div>
    </footer>
  );
};

export default Footer;
