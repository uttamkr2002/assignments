import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import './Login_com.css';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic (replace with your authentication logic)
    if (email === 'user@example.com' && password === 'password') {
      navigate('/employee-productivity-dashboard');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (

    <div className='main-container'>
    <div className="login-container">
       
       <div className="image_cont">
      <div className='image_logo'> </div>
      <p className='heading'>#We are Electric</p>
      </div>
    
      <form onSubmit={handleSubmit}>

        <div className='contentt' >
        <input className='email_style' type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='email_style' type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className='button_style' type="submit">Login</button>
      </form>
      <a  className="linked" href="#">Forgot Password?</a>
    </div>
    </div>
  );
}

export default Login;
