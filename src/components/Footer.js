import React from 'react';
import './Footer.css'; // Importing CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="footer__section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
