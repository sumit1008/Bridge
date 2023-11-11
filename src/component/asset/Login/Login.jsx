import React, { useState } from 'react';
import './Logincss.css';

import user_ic from '../person.png';
import email_ic from '../email.png';
import pass_ic from '../password.png';

const Login = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <div className="inputs">
        {action === "Login" ? <div></div> : (
          <div className="input">
            <img src={user_ic} alt="" />
            <input type="text" id="username" placeholder='' />
            <label for="username" className="placeholder">Username</label>
          </div>
        )}

        <div className="input">
          <img src={email_ic} alt="" />
          <input type="email" id="email" placeholder='' />
          <label for="email" className="placeholder">Email Id</label>
        </div>

        <div className="input">
          <img src={pass_ic} alt="" />
          <input type="password" id="password" placeholder='' />
          <label for="password" className="placeholder">Password</label>
        </div>
      </div>

      {action === "Sign Up" ? <div></div> : (
        <div className="forgot">lost password? <span>Click here!</span></div>
      )}

      <div className="submitContainer">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>login</div>
      </div>
    </div>
  );
};

export default Login;
