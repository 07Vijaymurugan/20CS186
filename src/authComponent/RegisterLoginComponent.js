import React, { useState } from 'react';
import axios from 'axios';

const RegisterLoginComponent = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [formData, setFormData] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    clientSecret : 'kEbtQCSKenaUHwaI',
    clientID : '9d3d70eb-0349-4b91-90f7-91628f5afdbc'
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = () => {
    
    axios.post('http://20.244.56.144/train/register', formData)
      .then((response) => {
        console.log('Registration successful:', response.data);
        // You can handle the response data here if needed.
      })
      .catch((error) => {
        console.error('Error registering:', error);
        // Handle the error or display an error message.
      });
  };

  const handleLogin = () => {
    console.log(formData)
    axios.post('http://20.244.56.144/train/auth', formData)
      .then((response) => {
        console.log('Login successful:', response.data);
        // You can handle the response data here if needed.
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        // Handle the error or display an error message.
      });
  };

  return (
    <div>
        <div>
          <h2>Register/Login Form</h2>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="ownerName">Owner Name:</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="rollNo">Owner Roll.No:</label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="ownerMail">Owner Mail:</label>
            <input
              type="email"
              id="ownerMail"
              name="ownerMail"
              value={formData.ownerMail}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
        </div>
        </div>
    </div>
  );
};

export default RegisterLoginComponent;
