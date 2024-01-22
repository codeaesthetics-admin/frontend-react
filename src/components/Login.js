import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import LoginImg from "../images/login.png"
import { GoogleLogin } from 'react-google-login';
import AppleLogin from 'react-apple-login';
export default function Login({ handleLogin }) {

    const [username, setUsername] = useState('rizwan');
    const [password, setPassword] = useState('khalid');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        // For simplicity, let's assume a hardcoded username and password
        if (username === 'user' && password === 'password') {
            handleLogin();
        } else {
            alert('Invalid username or password');
        }
    };

    // Callback function for successful Google login
    const handleGoogleLoginSuccess = (response) => {
        console.log('Google login success:', response);
        // Perform actions like setting user data or updating state
        handleLogin();
    };

    // Callback function for failed Google login
    const handleGoogleLoginFailure = (error) => {
        console.error('Google login error:', error);
    };

    // Callback function for successful Apple login
    const handleAppleLoginSuccess = (response) => {
        console.log('Apple login success:', response);
        // Perform actions like setting user data or updating state
        handleLogin();
    };

    // Callback function for failed Apple login
    const handleAppleLoginFailure = (error) => {
        console.error('Apple login error:', error);
    };

    return (
        <div className="w-100 d-inline-block vh-100">
            <div className="container h-100">
                <div className='row h-100 align-items-center'>
                    <div className="col-lg-5 loginimg">
                        <img src={LoginImg} alt='' />
                    </div>
                    <div className='col-lg-7'>
                        <div className='login-container mx-auto'>
                            <form className="login-form" onSubmit={handleSubmit}>
                                <h2 className="login-title"><FaCircleUser /> Login</h2>
                                <div className="form-control1">
                                    <FaUser />
                                    <input type="text" placeholder="Username" className='border-0' id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="form-control1">
                                    <FaLock />
                                    <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="remember-me">
                                    <input type="checkbox" id="rememberMe" className="checkbox-input" />
                                    <span className="checkbox-custom" for="rememberMe"></span>
                                    <label for="rememberMe">Remember me</label>
                                </div>

                                <div className="social-login">
                                    <span className="fa-google">
                                        {/* GoogleLogin component for Google social login */}
                                        <GoogleLogin
                                            clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your Google API client ID
                                            onSuccess={handleGoogleLoginSuccess}
                                            onFailure={handleGoogleLoginFailure}
                                            cookiePolicy={'single_host_origin'}
                                            render={(renderProps) => (
                                                <button className='d-flex justify-content-center align-items-center w-100 bg-transparent border-0 rounded-circle fa-google' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                                    <FaGoogle /> Google
                                                </button>
                                            )}
                                        />
                                    </span>
                                    <span className="fa-apple">
                                        {/* AppleLogin component for Apple social login */}
                                        <AppleLogin
                                            clientId="YOUR_APPLE_CLIENT_ID" // Replace with your Apple API client ID
                                            redirectURI="YOUR_APPLE_REDIRECT_URI" // Replace with your Apple redirect URI
                                            onSuccess={handleAppleLoginSuccess}
                                            onFailure={handleAppleLoginFailure}
                                            render={(renderProps) => (
                                                <button className='d-flex justify-content-center align-items-center w-100 bg-transparent border-0 rounded-circle fa-apple' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                                    <FaApple /> Apple
                                                </button>
                                            )}
                                        />
                                    </span>
                                </div>
                                <button type="submit" className='btn'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
