import React, { useState, useRef, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { getUsers } from '../../service';
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    localStorage.setItem('savedUsername', newUsername);
    if (newUsername.length < 6) {
      usernameInputRef.current.style.color = 'red';
    } else {
      usernameInputRef.current.style.color = 'green';
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const users = await getUsers();

        const matchedUser = users.find(user => user.username === username && user.password === password);

        if (matchedUser) {
          console.log('Login successful!');
          navigate('/');
        } else {
          console.error('Invalid username or password.');
        }
      }
     catch (error) {
      console.error('Error logging in:', error);
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login">
       <video autoPlay loop muted className="video-bg">
          <source src="https://cdn.pixabay.com/vimeo/201118756/animation-7529.mp4?width=640&hash=f307e3741dd779021a42cf6ee16d1d75f5274825" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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