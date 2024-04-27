import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ImageUpload.css';

const ImageUpload = ({ onImageChange }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (typeof onImageChange === 'function') {
      onImageChange(file);
    }
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
          <div className="image-upload">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="upload"
              style={{ display: 'none' }}
            />
            <label htmlFor="upload" className="upload-button">
              {image ? 'Change Image' : 'Upload Image'}
            </label>
            <div className="image-container">
              {image && <img src={URL.createObjectURL(image)} alt="Uploaded" />}
            </div>
            <div className="submit-container">  
              <Link to="/" className="submit">CREATE ACCOUNT</Link>
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
