import React, { useState } from 'react';
import '../styles/contact.css'; // Import your CSS file
import { submitContactForm } from './apiComponents/api-contact'; // Import the function for submitting contact form

const Contact = () => {
  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleUserMenu = () => {
    setUserMenuVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, data, error } = await submitContactForm(formData);

    if (success) {
      console.log('Form Submitted:', data);
      alert('Thank you for reaching out! We will get back to you soon.');
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message, please try again later.');
    }
  };

  return (
    <div>
      <main>
        <div className="hello">
          <img src="images/hello.jpg" alt="Hello bord-sign" />
        </div>
        <div className="contact-info">
          <div className="line">
            <span>Get in </span>
            <br />
            <span className="highlight">Touch</span>
          </div>
          <p>
            At Yummy Tummy's, your feedback matters. We welcome your thoughts, suggestions, compliments, and concerns because they inspire us to serve you better every day. Whether you have a unique idea, a kind note, or an issue you'd like to share, we're here to listen and grow. Your input drives our commitment to innovation, ensuring we deliver an unforgettable dining experience every time you visit.
            <br /><br />
            We value every compliment—it fuels our passion to keep delighting our guests. Likewise, complaints are an opportunity for us to learn, improve, and make sure your next visit is even better. Don't hesitate to reach out—your voice helps shape the Yummy Tummy's experience.
            <br /><br />
            Thank you for being part of our journey to create a place where good food and great memories come together. Together, let's make Yummy Tummy's the ultimate destination for deliciousness and happiness!
          </p>
        </div>
        <div className="user-input">
          <form onSubmit={handleSubmit}>
            <div className="left">
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First name"
                value={formData.first_name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last name"
                value={formData.last_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="subject" style={{ color: 'black'}}>Please choose a subject:</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="" disabled>Please choose a subject</option>
                <option value="complain">Complain</option>
                <option value="compliment">Compliment</option>
                <option value="suggestion">Suggestion</option>
              </select>
            </div>
            <div className="right">
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
