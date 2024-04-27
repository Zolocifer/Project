import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import contact_icon from '../Assets/contact.png';
import gender_icon from '../Assets/gender.png';
import about_icon from '../Assets/about.png';
import address_icon from '../Assets/address.png'; // Corrected the address icon import

const LoginSignup = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    contact: '',
    gender: '',
    address: '',
    userabout: '',
    email: '',
    password: ''
  });

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send POST request to backend API to create a new user
      const response = await axios.post('http://localhost:8080/user', formData);
      console.log('User created:', response.data);
      // Handle success, e.g., display a success message to the user
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <div className='navbar'> 
        <h1>Make Your Trip</h1> 
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
          </ul>
        </nav>
      </div>
      <div className='container'>
        <div className="header">
          <div className="text">Signup</div>  
          <div className="underline"></div>    
          <form onSubmit={handleFormSubmit}>
            <div className="inputs">
              <div className="input">
                <input type="text" name="name" placeholder="Enter your name" onChange={handleInputChange} />
                <img src={user_icon} alt=""/>
              </div>
              <div className="input">
                <input type="text" name="username" placeholder="Enter a username" onChange={handleInputChange} />
                <img src={user_icon} alt=""/>
              </div>
              <div className="input">
                <input type="text" name="contact" placeholder="Enter your contact number" onChange={handleInputChange} />
                <img src={contact_icon} alt=""/>
              </div>
              <div className="input">
                <select name="gender" onChange={handleInputChange}>
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <img src={gender_icon} alt=""/>
              </div>
              <div className="input">
                <input type="text" name="address" placeholder="Enter your address" onChange={handleInputChange} />
                <img src={address_icon} alt=""/>
              </div>
              <div className="input">
                <input type="text" name="userabout" placeholder="Describe yourself briefly..." onChange={handleInputChange} />
                <img src={about_icon} alt=""/>
              </div>
              <div className="input">
                <input type="email" name="email" placeholder="Enter your email" onChange={handleInputChange} />
                <img src={email_icon} alt=""/>
              </div>
              <div className="input">
                <input type="password" name="password" placeholder="Enter a strong password" onChange={handleInputChange} />
                <img src={password_icon} alt=""/>
              </div>
            </div>
            <div className="submit-container">  
              <button type="submit" className="submit">CREATE ACCOUNT</button>
            </div>   
          </form>
          <div className="login">Already have an account?? <Link to="/" className="login-link">Login</Link></div>
        </div>   
      </div>
    </div>
  );
};

export default LoginSignup;
