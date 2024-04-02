import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add logic to send a request to the Spring Boot endpoint to update the password
    try {
      // Send request to update password
      console.log('Password updated successfully!');
    } catch (error) {
      setErrorMessage('Error updating password. Please try again.');
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errorMessage && <span className="error">{errorMessage}</span>}
        <button type="submit">Reset Password</button>
      </form>
      <p>Remember your password? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default ForgotPassword;
