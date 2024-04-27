import React from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  return (
    <div>
      <div className='navbar'>
      <h1>Make Your Trip</h1>  
        <nav>
          <ul>
            <li><Link to="/home"><a href="#">Home</a></Link></li>
          </ul>
        </nav>
      </div>
      <div className='container'>
        <div className="header"> 
          <div className="text">Login</div>  
          <div className="underline"></div>    
          <div className="inputs">
            <div className="input">
              <input type="email"  placeholder="Enter your email"/>
              <img src={email_icon} alt=""/>
            </div>
            <div className="input">
              <input type="password"  placeholder="Enter your password"/>
              <img src={password_icon} alt=""/>
            </div>
          </div>
          <div className="submit-container">  
            <Link to="/home" className="submit">Login</Link>
          </div>   
          <div className="login">New user?? <Link to="/Signup" className="login-link">Create an account</Link></div>
        </div>   
      </div>
    </div>
  )
}

export default Login;
