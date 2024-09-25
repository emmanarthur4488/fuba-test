import React, {useState} from 'react'
import Fubalogo from '/src/IMG/fuba-logo.png'
import SearchBar from '/src/IMG/search-bar.png'
import Menu from '/src/IMG/menu.png'
import Notification from '/src/IMG/notification.png'
import DropMenu from '/src/IMG/DropMenu.png'
import {useNavigate} from "react-router-dom"
import './courseslistnav.css'

const CoureselistNav = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  let navigate = useNavigate()

  function home(){
    navigate('/')
  }
  return (
    <div>
      <div className="courselistnav-container">
        <div className="courselistnav-nav-logo">
          <img className="logo-logo" src={Fubalogo} alt=""/>
        </div>
        <ul className={mobileMenu?'': 'hide-mobile-menu'}>
          <div className="courselistnav-navigator">
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
            <div>
              <img src={Notification} alt=""/>
              <img src={DropMenu} alt=""/>
            </div>
          </div>
        </ul>
        <div>
          <img src={Menu} alt="" className="menu-icon" onClick={toggleMenu}/>
        </div>
      </div>
    </div>
  )
}

export default CoureselistNav
