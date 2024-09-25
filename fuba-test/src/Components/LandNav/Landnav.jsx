import React, {useState} from 'react'
import './landnav.css'
import Fubalogo from '/src/IMG/fuba-logo.png'
import Menu from '/src/IMG/menu.png'
import SearchBar from '/src/IMG/search-bar.png'
import {useNavigate} from "react-router-dom"

const Landnav = () => {

  let navigate = useNavigate()

  function home(){
    navigate('/')
  }
    
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <div>
      <div className="landnav-container">
        <div className="land-nav-logo">
          <img className="logo-logo" src={Fubalogo} alt=""/>
        </div>
        <ul className={mobileMenu?'': 'hide-mobile-menu'}>
          <div className="land-navigator">
            <div className="nav-col">
              <p onClick={home}>Home</p>
              <p>About Us</p>
              <p>Courses</p>
              <p>Contact Us</p>
            </div>
            <div className="search-col">
              <input type="search" placeholder="search course"/>
              <img className="search-image" src={SearchBar} alt=""/>
            </div>
          </div>
          <div className="btn-col">
            <h4 className="btn-col-1">Login</h4>
            <h4 className="btn-col-2">Sign Up</h4>
          </div>
        </ul>
        <div>
          <img src={Menu} alt="" className="menu-icon" onClick={toggleMenu}/>
        </div>
      </div>
    </div>
  )
}

export default Landnav
