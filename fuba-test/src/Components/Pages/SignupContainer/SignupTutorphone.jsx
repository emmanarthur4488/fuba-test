import React from 'react'
import './signuptutorphone.css'
import Fubalogo from '/src/IMG/fuba-logo.png'
import BusinessMan from '/src/IMG/business-man.png'
import DevFacebook from '/src/IMG/devicon_facebook.png'
import OutlineApple from '/src/IMG/outline-apple.png'
import Google from '/src/IMG/google.png'

const SignupTutorphone = () => {
  return (
    <div>
        <div className="singup-phone_logo">
          <img src={Fubalogo} alt=""/>
        </div>
        <div className="signup-top">
          <img src={BusinessMan} alt=""/>
          <h1 className="signup-top-note">
            Your Tech Journey <br/> starts here.
          </h1>
        </div>
        <div className="phone_signup">
         <h1>Sign Up</h1>
        </div>
        <div>
          <div className="form-phone-container">
            <label htmlFor="name">FULL NAME</label><br/>
            <input type="text" placeholder="Enter Your Name"/><br/>
            <label htmlFor="email">EMAIL</label><br/>
            <input type="text" placeholder="Enter your Email"/><br/>
            <label htmlFor="picture">UPLOAD PICTURE</label><br/>
            <input type="photo" placeholder="select photo"/><br/>
            <label htmlFor="password">PASSWORD</label><br/>
            <input type="password" placeholder="Enter Your Password"/><br/>
            <label htmlFor="password">CONFIRM PASSWORD</label><br/>
            <input type="password" placeholder="Confirm Your Password"/>
          </div>
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
        <p className="Term">By creating an account, you agree with our <span>Terms of service</span> <br/> and <span>Privacy Policy</span></p>
    </div>
  )
}

export default SignupTutorphone
