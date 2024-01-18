import React from 'react';
// import './login.scss';
// import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
export default function Login() {
  return (
    <div className="w-100 d-inline-block vh-100">
      <div className="container">
        <div className="left-section"></div>
        <div className="right-section">
            <div className="login-container">
                <form className="login-form">
                    <h2 className="login-title"><FaCircleUser /> Login</h2>
                    <div className="form-control1">
                        <FaUser />
                        <input type="text" placeholder="Username" className='border-0' id="username" required />
                    </div>
                    <div className="form-control1">
                        <FaLock />
                        <input type="password" placeholder="Password" id="password" />
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="rememberMe" className="checkbox-input" />
                        <span className="checkbox-custom" for="rememberMe"></span>
                        <label for="rememberMe">Remember me</label>
                    </div>
                    
                    <div className="social-login">
                        <span className='fa-google'><FaGoogle /></span>
                        <span className='fa-facebook'><FaFacebookF /></span>
                        <span className='fa-apple'><FaApple /></span>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  );
}
