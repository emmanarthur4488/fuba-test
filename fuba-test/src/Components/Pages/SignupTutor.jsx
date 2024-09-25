import React from 'react'
import SignupRight from './SignupContainer/SignupRight'
import Fubalogo from '/src/IMG/fuba-logo.png'
import DevFacebook from '/src/IMG/devicon_facebook.png'
import OutlineApple from '/src/IMG/outline-apple.png'
import Google from '/src/IMG/google.png'
import './signuptutor.css'
import SignupTutorphone from './SignupContainer/SignupTutorphone'

const SignupTutor = () => {
  return (
    <div>
      <div className="tutor-sign">
        <div className="tutor-right">
          <SignupRight/>
        </div>
        <div className="tutor-left">
          <div className="heading-container">
            <img src={Fubalogo} alt=""/>
            <h1>Sign Up</h1>
          </div>
          <div className="form-container">
            <label htmlFor="name">FULL NAME</label><br/>
            <input type="text" placeholder="Enter Your Name"/><br/>
            <label htmlFor="email">EMAIL</label><br/>
            <input type="text" placeholder="Enter your Email"/><br/>
            <label htmlFor="password">PASSWORD</label><br/>
            <input type="password" placeholder="Enter Your Password"/><br/>
            <label htmlFor="password">CONFIRM PASSWORD</label><br/>
            <input type="password" placeholder="Confirm Your Password"/>
          </div>
          <div className="check">
            <input type="checkbox" name="" id=""/>
            <p>Remeber me</p>
          </div>
          <div className="learner_signup_btn-container">
            <button className="learner_signup_btn">SIGN UP</button>
          </div>
          <div className="orr">
            <hr/>
            <p>or</p>
            <hr/>
          </div>
          <div className="or">
            <button className="or_btn">
              <img src={Google} alt=""/>
              <p>Sign Up with Google</p>
            </button><br/>
            <button className="or_btn">
              <img src={DevFacebook} alt=""/>
              <p>Sign Up with Facebook</p>
            </button><br/>
            <button className="or_btn">
              <img src={OutlineApple} alt=""/>
              <p>Sign Up with Apple</p>
            </button>
          </div>
          <p className="Terms">By creating an account, you agree with our <span>Terms of service</span> <br/> and <span>Privacy Policy</span></p>
        </div>
      </div>
      <div className="signup__phone">
        <SignupTutorphone/>
      </div>
    </div>
  )
}

export default SignupTutor

