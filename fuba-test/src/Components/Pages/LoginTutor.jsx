import React from 'react'
import SignupRight from './SignupContainer/SignupRight'
import Fubalogo from '/src/IMG/fuba-logo.png'
import DevFacebook from '/src/IMG/devicon_facebook.png'
import OutlineApple from '/src/IMG/outline-apple.png'
import Google from '/src/IMG/google.png'
import './logintutot.css'
import LoginTutorphone from './LoginTutorphone'

const LoginTutor = () => {
  return (
    <div>
      <div className="my_login-container">
        <div className="login_right">
          <SignupRight/>
        </div>
        <div className="login_left">
          <div className="heading-container">
            <img src={Fubalogo} alt=""/>
            <h1>Welcome Back!</h1>
          </div>
          <div className="form-container">
            <label htmlFor="email">EMAIL</label><br/>
            <input type="text" placeholder="Enter your Email"/><br/>
            <label htmlFor="password">PASSWORD</label><br/>
            <input type="password" placeholder="Enter Your Password"/><br/>
          </div>
          <div className="mycheck">
            <div className="check">
              <input type="checkbox" name="" id=""/>
              <p>Remeber me</p>
            </div>
            <div className="forget">
              <p>forgot password?</p>
            </div>
          </div>
          <div className="learner_signup_btn-container">
            <button className="learner_signup_btn">LOGIN</button>
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
      <div className="myphonescreen-container">
        <LoginTutorphone/>
      </div>
    </div>
  )
}

export default LoginTutor
