import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/signup';
import Step1 from './Components/step1';
import Step2 from './Components/step2';
import Step3 from './Components/step3';
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/step1" element={<Step1 />} />
                    <Route path="/step2" element={<Step2 />} />
                    <Route path="/step3" element={<Step3 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
