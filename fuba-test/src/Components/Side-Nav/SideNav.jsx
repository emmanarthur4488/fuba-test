import React from 'react'
import './sidenav.css'
import Fubalogo from '/src/IMG/fuba-logo.png'
import Archive from '/src/IMG/archive.png'
import PhVideo from '/src/IMG/ph_video.png'
import Video from '/src/IMG/video.png'
import ProfileIcon from '/src/IMG/profile-icon.png'
import Logout from '/src/IMG/Logout.png'




const SideNav = () => {
  return (
    <div className="sidebar">
      <div className="side-logo">
        <img src={Fubalogo} alt=""/>
      </div>

      <div className="block-sidee">
        <img src={Video} alt=""/>
        <p>Dashboard</p>
      </div>

      <div className="block-side">
        <img src={PhVideo} alt=""/>
        <p>Video</p>
      </div>

      <div className="block-side">
        <img src={ProfileIcon} alt=""/>
        <p>Profile</p>
      </div>

      <div className="block-side">
        <img src={Archive} alt=""/>
        <p>Drafts</p>
      </div>

      <div className="block-Logout">
        <img src={Logout} alt=""/>
        <p>Logout</p>
      </div>
    </div>
  )
}

export default SideNav
