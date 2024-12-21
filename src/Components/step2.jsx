import React, { useState } from 'react';
import "./step2.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import backArrow from '../assets/back-arrow.png';
import { useNavigate } from 'react-router-dom';

const Step2 = ({ currentStep = 2, totalSteps = 3 }) => {
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
       
            <div className="step2-container">
                <div className="spotify2-icon">
                    <i className="bi bi-spotify"></i>
                </div>
                <div className="progress-bar2">
                    <div className="progress-bar-fill2" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="step2-indicator">
                    <img 
                        src={backArrow} 
                        alt="Back Arrow" 
                        className="back-arrow2" 
                        onClick={() => navigate('/step1')} 
                        aria-label="Go back to Step 1" 
                    />
                    <h1 className="step2">Step {currentStep} of {totalSteps} <span><br />Enter additional details</span></h1>
                    <form className="user-info-form" onSubmit={(e) => e.preventDefault()}>
                        {/* Name Input */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <p className="form-info">This name will appear on your profile</p>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        {/* Date of Birth */}
                        <div className="form-group">
                            <label>Date of birth</label>
                            <p className="form-info">
                                Why do we need your date of birth? <a href="#learn-more">Learn more</a>
                            </p>
                            <div className="dob-inputs">
                                <input
                                    type="text"
                                    placeholder="yyyy"
                                    maxLength="4"
                                    value={birthYear}
                                    onChange={(e) => setBirthYear(e.target.value)}
                                    required
                                />
                                <select
                                    value={birthMonth}
                                    onChange={(e) => setBirthMonth(e.target.value)}
                                    required
                                >
                                    <option value="">Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="dd"
                                    maxLength="2"
                                    value={birthDay}
                                    onChange={(e) => setBirthDay(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Gender */}
                        <div className="form-group">
                            <label>Gender</label>
                            <p className="form-info">
                                We use your gender to help personalize our content recommendations and ads for you.
                            </p>
                            <div className="gender-options">
                                {["Man", "Woman", "Non-binary", "Something else", "Prefer not to say"].map((option) => (
                                    <label key={option}>
                                        <input
                                            type="radio"
                                            value={option}
                                            checked={gender === option}
                                            onChange={() => setGender(option)}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button type="button" className="submit-button" onClick={handleNextClick}>
                            Next
                        </button>
                    </form>
                </div>
            </div>
        
    );
};

export default Step2;
