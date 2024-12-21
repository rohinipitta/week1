import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import googleLogo from '../assets/google-logo.png';
import facebookLogo from '../assets/facebook-logo.png';
import appleLogo from '../assets/apple-logo.png';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleNextClick = () => {
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
            navigate('/step1'); // Navigate to Step1
        }
    };

    return (
        <div className="container">
            <div className="sign-container">
                <div className="spotify-icon">
                    <i className="bi bi-spotify"></i>
                </div>
                <h1 className="signup-title encore-text encore-text-title-large">
                    Sign up to <br />
                    <span className="small-text">start listening</span>
                </h1>
                <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="name@domain.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        {error && <p className="error-message">{error}</p>}
                    </div>
                    <a href="#" className="phone-number">Use phone number instead</a>
                    <button 
                        type="button" 
                        className="submit-button" 
                        onClick={handleNextClick}
                        aria-label="Proceed to the next step"
                    >
                        Next
                    </button>
                </form>
                <div className="line-container">
                    <span className="line"></span>
                    <span className="or">or</span>
                    <span className="line"></span>
                </div>
                <button className="social-button google-container" aria-label="Sign up with Google">
                    <img src={googleLogo} alt="Google Logo" className="google-logo" />
                    Sign up with Google
                </button>
                <button className="social-button facebook-container" aria-label="Sign up with Facebook">
                    <img src={facebookLogo} alt="Facebook Logo" className="facebook-logo" />
                    Sign up with Facebook
                </button>
                <button className="social-button apple-container" aria-label="Sign up with Apple">
                    <img src={appleLogo} alt="Apple Logo" className="apple-logo" />
                    Sign up with Apple
                </button>
            </div>
        </div>
    );
};

export default Signup;
