import React, { useState, useRef,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link,withRouter } from 'react-router-dom';
import axios from 'axios'; // Import Axios

import "./Login.css";

const Login = ({history}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  
 
  useEffect(() => {
    // Retrieve saved username from localStorage
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []); // Run only once on component mount

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    localStorage.setItem('savedUsername', newUsername);
    // Change color based on username length
    if (newUsername.length < 6) {
      usernameInputRef.current.style.color = 'red';
    } else {
      usernameInputRef.current.style.color = 'green';
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    // Validate password
    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Validate form data (optional)
    
    // Perform login logic
    try {
      const response = await axios.post("http://localhost:8000/login",  { username, password });
      if (response.status === 200) {
        console.log('Login successful!');
        history.push('/home'); 
        // Redirect to home page or perform any other actions
      } else {
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
    setUsername('');
    setPassword('');
  };
  

  return (
    <div className="login">
         <Paper elevation={3} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <Typography>
          <h2>Login</h2>
          <br />
          <input
            ref={usernameInputRef}
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
          />
          <br />
          <input
            ref={passwordInputRef}
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
          <br />
          <button onClick={handleSubmit}>Login</button>
          <br />
          <p>New to App? <Link to="/register">Register here</Link></p>
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;
