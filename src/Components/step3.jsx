import React, { useState } from 'react';
import "./step3.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import backArrow from '../assets/back-arrow.png';
import { useNavigate } from 'react-router-dom';

const Step2 = ({ currentStep = 3, totalSteps = 3 }) => {
    const progress = (currentStep / totalSteps) * 100;
   

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [gender, setGender] = useState('');

    const handleNextClick = () => {
        // Validate if all fields are filled before navigating to the next step
        if (name && birthYear && birthMonth && birthDay && gender) {
            navigate("/step3"); // Navigate to Step 3 (update the path if necessary)
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
       
            <div className="step3-container">
                <div className="spotify3-icon">
                    <i className="bi bi-spotify"></i>
                </div>
                <div className="progress-bar3">
                    <div className="progress-bar-fill3" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="step3-indicator">
                    <img 
                        src={backArrow} 
                        alt="Back Arrow" 
                        className="back-arrow3" 
                        onClick={() => navigate('/step2')} 
                        aria-label="Go back to Step 2" 
                    />
                    <h1 className="step3">Step {currentStep} of {totalSteps} <span><br />Enter additional details</span></h1>
        
        
                  
        
        </div>
        <div class="req-container">
        <h2>Terms & Conditions</h2>

        <div class="checkbox-container">
            <input type="checkbox" id="marketing-checkbox"/>
            <label class="checkbox-label" for="marketing-checkbox">I would prefer not to receive marketing messages from Spotify</label>
        </div>

        <div class="checkbox-container">
            <input type="checkbox" id="data-sharing-checkbox"/>
            <label class="checkbox-label" for="data-sharing-checkbox">Share my registration data with Spotify's content providers for marketing purposes.</label>
        </div>

        <p class="terms-and-conditions">By clicking on sign-up, you agree to Spotify's <a href="#">Terms and Conditions of Use</a>.</p>
        <p class="terms-and-conditions">To learn more about how Spotify collects, uses, shares and protects your personal data, please see Spotify's <a href="#">Privacy Policy</a>.</p>

        <button type="button" className="submit-button3" onClick={handleNextClick}>
                            Next
                        </button>
    </div>
    </div>



                        

                
           
        
    );
};

export default Step2;
