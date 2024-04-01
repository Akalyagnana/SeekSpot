import React, { useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { addUser } from '../../service';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const userNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const navigate = useNavigate();

  const handleUserNameChange = (event) => {
    const newUserName = event.target.value;
    setUserName(newUserName);
    if (newUserName.length < 6) {
      userNameInputRef.current.style.color = 'red';
    } else {
      userNameInputRef.current.style.color = 'green';
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

  const handleUserNameBlur = () => {
    emailInputRef.current.focus();
  };

  const handleEmailBlur = () => {
    passwordInputRef.current.focus();
  };

  const handleUserNameKeyDown = (event) => {
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
    console.log('Username:', userName);
    console.log('Email:', email);
    console.log('Password:', password);

    localStorage.setItem('username', userName);

    try {
      const user = {
        userName: userName,
        email: email,
        password: password
      }
      const response = await addUser(user);
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
            ref={userNameInputRef}
            type="text"
            placeholder="Username"
            value={userName}
            onChange={handleUserNameChange}
            onBlur={handleUserNameBlur}
            onKeyDown={handleUserNameKeyDown}
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
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </Typography>
      </Paper>
    </div>
  );
};

export default Register;