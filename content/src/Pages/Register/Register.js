import React, { useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    if (newUsername.length < 6) {
      usernameInputRef.current.style.color = 'red';
    } else {
      usernameInputRef.current.style.color = 'green';
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (
      newPassword.length < 6 ||
      !/[0-9]/.test(newPassword) ||
      !/[a-zA-Z]/.test(newPassword) ||
      !/[!@#$%^&*]/.test(newPassword)
    ) {
      setPasswordError('Password must contain at least 6 characters, one symbol, and one number.');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(newEmail)) {
      setEmailError('Invalid email format');
      emailInputRef.current.style.color = 'red';
    } else {
      setEmailError('');
      emailInputRef.current.style.color = 'green';
    }
  };

  const handleUsernameBlur = () => {
    emailInputRef.current.focus();
  };

  const handleEmailBlur = () => {
    passwordInputRef.current.focus();
  };

  const handleUsernameKeyDown = (event) => {
    if (event.key === 'Enter') {
      emailInputRef.current.focus();
    }
  };

  const handleEmailKeyDown = (event) => {
    if (event.key === 'Enter') {
      passwordInputRef.current.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    localStorage.setItem('username', username);

    try {
      const response = await axios.post('http://localhost:8000/users', {
        username,
        email,
        password,
      });

      console.log('Registration successful!', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="reg">
      <Paper elevation={3} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <Typography>
          <h2>Register for endless possibilities</h2>
          <br />
          <input
            ref={usernameInputRef}
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            onBlur={handleUsernameBlur}
            onKeyDown={handleUsernameKeyDown}
          />
          <br />
          <input
            ref={emailInputRef}
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            onKeyDown={handleEmailKeyDown}
          />
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
          <br />
          <input
            ref={passwordInputRef}
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
          <br />
          <button onClick={handleSubmit}>Submit</button>
          <br />
          <p>Already have an account? <Link to="/">Login</Link></p>
        </Typography>
      </Paper>
    </div>
  );
};

export default Register;