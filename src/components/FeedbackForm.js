// FeedbackForm.js
import React, { useState } from 'react';
import './FeedbackForm.css'; // Import the CSS file for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation here
    // For simplicity, let's assume the form is valid
    // Send the form data to your backend or process it as needed
    // For this example, we'll just display a success message
    setSubmitMessage('Thank you for your feedback!');
    // Reset the form after submission
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {submitMessage && <p className="submit-message">{submitMessage}</p>}
    </div>
  );
};

export default FeedbackForm;
