import React, {useState, useEffect} from 'react'
import BusinessMan from '/src/IMG/business-man.png'
import Fubalogo from '/src/IMG/fuba-logo.png'
import './signuplearner.css'
import SignupRight from './SignupContainer/SignupRight'
import Signupphone from './SignupContainer/Signupphone'
import {Link, useNavigate} from "react-router-dom"


const SignupLearner = () => {

  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    Password: ""
  });

  useEffect(()=>{
    if (
     form.name !== "" &&
     form.email !== "" &&
     form.password !== "" &&
     form.Password !== ""
    ){
        setFormValid(true)
    } else {
        setFormValid(false)
    }
  }, [form.name,
     form.email,
     form.password,
     form.Password])
 
 const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    sessionStorage.setItem('userDetails', JSON.stringify({...form}))

    setTimeout(()=>{
      navigate('/landingpage')
    }, 1000);
  }
  
  
  return (
    <div>
      <div className="signup-container">
        <div className="right">
          <SignupRight/>
        </div>
        <div className="signup-left">
          <div className="heading-container">
            <img src={Fubalogo} alt=""/>
            <h1>Sign Up</h1>
          </div>
          <div>
            <form onSubmit={submitHandler}>
              <div className="userValue">
                <label htmlFor="fullname">Fullname:</label><br/>
                <input className="input" type="text"  placeholder="Name" name="name"  onChange={handleChange}/><br/>

                <label htmlFor="email">Email:</label><br/>
                <input className="input" type="text" required placeholder="Contact email" name="email" onChange={handleChange}/><br/>

                <label htmlFor="password">Password:</label><br/>
                <input className="input" type="password" required placeholder="Password" name="password" onChange={handleChange}/><br/>

                <label htmlFor="comfirm password"> Comfirm Password:</label>
                <input className="input" type="password" required placeholder="Comfirm Password" name="confirm password" onChange={handleChange}/>
              </div>

              <button
                className={formValid?"auth_signup-active":"auth_signup-submit"}
                > Sign Up
              </button>
              <p class="account">Don't have an account?</p>
              <Link to='./form' className="link">
                <button className="account_btn">Create Account</button>
              </Link>
            </form>
          </div>
          
        </div>
      </div>
      <div className="this_phone">
        <Signupphone/>
      </div>
    </div>
  )
}

export default SignupLearner
