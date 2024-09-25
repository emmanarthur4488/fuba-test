import React, {useState} from 'react'
import Fubalogo from '/src/IMG/fuba-logo.png'
import './navbar.css'
import {Link} from "react-router-dom"
import Menu from '/src/IMG/menu.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  let navigate = useNavigate()

  function handleSign(){
    navigate('/signuplearner')
  }

  function handleLogin(){
    navigate('/logintutor')
  }
  return (
    <div>
      <nav className="home-container">
            <img className="logo" src={Fubalogo} alt=""/>
            <ul className={mobileMenu?'': 'hide-mobile-menu'}>
              <Link to='home'  className="link">Home</Link>
              <Link to='about' className="link">About Us</Link>
              <Link to='courses' className="link">Courses</Link>
              <Link to='contact' className="link">Contact Us</Link>
              <button className="btn-3" onClick={handleLogin}>Login</button>
              <button className="btn-4" onClick={handleSign}>Sign Up</button>
            </ul>
            <img src={Menu} alt="" className="menu-icon" onClick={toggleMenu}/>
        </nav>
    </div>
  )
}

export default Navbar
