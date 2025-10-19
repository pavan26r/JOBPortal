
import React, { useState, useContext,useEffect } from 'react';
import { assets } from "../assets/assets";
import './RecruiterLogin.css';
import { AppContext } from "../context/AppContext";
import { JobCategories } from "../assets/assets";

const RecruiterLogin = () => {
  const [step, setStep] = useState(1); // step 1 = form, step 2 = logo upload
  const [state, setState] = useState('Register'); // or 'Login'
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [logoFile, setLogoFile] = useState(null);
  const { setShowRecruiterLogin } = useContext(AppContext);

  const handleOverlayClick = () => {
    setShowRecruiterLogin(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { name, email, password });
    setStep(2); // go to next step to upload logo
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(URL.createObjectURL(file));
      console.log("Logo Uploaded:", file.name);
    }
  };
  // when i am on that pop up all will get disable  ->
  useEffect(() =>{
 document.body.style.overflow = 'hidden'
 return () =>{
  document.body.style.overflow = 'unset'
 }
  })
  return (
    <div className="recruiter-login-overlay" onClick={handleOverlayClick}>
      <div className="recruiter-login" onClick={(e) => e.stopPropagation()}>

        {/* ✅ Step 1: Form */}
        {step === 1 && (
          <form onSubmit={handleFormSubmit}>
            <h1>Recruiter {state}</h1>
            <p>
              {state === 'Login'
                ? 'Welcome back! Please sign in to continue'
                : 'Create a new recruiter account'}
            </p>

            {/* Name */}
            {state === 'Register' && (
              <div className="input-field">
                <img src={assets.person_icon} alt="person" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}

            {/* Email */}
            <div className="input-field">
              <img src={assets.email_icon} alt="email" />
              <input
                type="email"
                placeholder="Company Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="input-field">
              <img src={assets.lock_icon} alt="lock" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Forgot password link */}
            {state === 'Login' && (
              <p className="forgot-password">Forgot password?</p>
            )}

            {/* Button */}
            <button type="submit">
              {state === 'Login' ? 'Login' : 'Next'}
            </button>

            {/* Toggle state */}
            <p className="toggle-state">
              {state === 'Login' ? (
                <>
                  Don’t have an account?{' '}
                  <span onClick={() => setState('Register')}>Register</span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span onClick={() => setState('Login')}>Login</span>
                </>
              )}
            </p>
          </form>
        )}

        {/* ✅ Step 2: Upload Company Logo */}
        {step === 2 && (
          <div className="upload-screen">
            <h2>Upload Company Logo</h2>
            <label htmlFor="logo-upload" className="upload-box">
              <img
                src={logoFile || assets.google_icon}
                alt="Upload Logo"
                className="upload-icon"
              />
              <p>Upload Company Logo</p>
            </label>
            <input
              type="file"
              id="logo-upload"
              accept="image/*"
              onChange={handleLogoUpload}
              style={{ display: 'none' }}
            />
            {logoFile && (
              <p style={{ marginTop: '10px', color: '#333' }}>
                ✅ Logo uploaded successfully!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruiterLogin;
