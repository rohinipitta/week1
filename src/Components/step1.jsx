import React, { useState } from 'react';
import "../App.css";
import "./step1.css"; // Import the new CSS file
import backArrow from '../assets/back-arrow.png'; // Adjust the path to your arrow file
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
const Step1 = () => {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const checkPassword = () => {
        let hasLetter = false;
        let hasNumberOrSpecial = false;

        for (let i = 0; i < password.length; i++) {
            if (password[i].match(/[a-z]/i)) {
                hasLetter = true;
            } else if (!password[i].match(/[a-zA-Z0-9]/)) {
                hasNumberOrSpecial = true;
            }
        }

        if (password.length >= 10 && hasLetter && hasNumberOrSpecial) {
            setMessage('Valid password!');
            navigate('/step2');
        } else {
            setMessage('Invalid password. Please check the requirements.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const hasLetter = /[a-z]/i.test(password);
    const hasNumberOrSpecial = /[^a-zA-Z]/.test(password);
    const isLongEnough = password.length >= 10;

    return (
        <div className="container">
            <div className='step1-container'>
                <div className="spotify-icon">
                    <i className="bi bi-spotify"></i>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: '33.33%' }}></div>
                </div>
                <div className='step-indicator'>
                   <a href="/signup"> <img src={backArrow} alt="Back Arrow" className='back-arrow' /></a>
                    <h1 className="step1">Step 1 of 3 <span><br/>Create a password</span></h1>
                </div>
                <div className="pwd-container">
                    <label htmlFor="password">Password:</label>
                    <div className="password-input-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <i 
                            className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"} 
                            onClick={togglePasswordVisibility}
                        ></i>
                    </div>
                   <button onClick={checkPassword}>Next</button>
                    <p id="message" style={{ color: message === 'Valid password!' ? 'green' : 'red' }}>{message}</p>
                    <div className="pwd-guidelines">
                        <p>Your password must contain at least</p>
                        <p style={{ color: hasLetter ? 'green' : 'white' }}>
                            <i className={hasLetter ? "bi bi-check-circle" : "bi bi-circle"}></i> 1 letter
                        </p>
                        <p style={{ color: hasNumberOrSpecial ? 'green' : 'white' }}>
                            <i className={hasNumberOrSpecial ? "bi bi-check-circle" : "bi bi-circle"}></i> 1 number or special character (example: # ? ! &)
                        </p>
                        <p style={{ color: isLongEnough ? 'green' : 'white' }}>
                            <i className={isLongEnough ? "bi bi-check-circle" : "bi bi-circle"}></i> 10 characters
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step1;