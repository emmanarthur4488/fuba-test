import React from 'react'
import Navbar from '../Navbar/Navbar'
import './home.css'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Navbar/>
      <div className="hero">
        <div className="reg-link">
          <Link to='./signuptutor' className="links">
            <div className="learner">
              <p>Register as</p>
              <h1>Learner</h1>
            </div>
          </Link>
            
          <Link to='./signuplearner' className="links">
            <div className="tutor">
              <p>Register as</p>
              <h1>Tutor</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
