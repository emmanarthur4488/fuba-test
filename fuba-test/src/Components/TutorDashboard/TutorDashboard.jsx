import React from 'react'
import Tutor from '/src/IMG/tutor.png'
import Noti from '/src/IMG/noti.png'
import Ellipse from '/src/IMG/ellipse.png'
import Edit from '/src/IMG/edit.png'
import Fubalogo from '/src/IMG/fuba-logo.png'
import Archive from '/src/IMG/archive.png'
import PhVideo from '/src/IMG/ph_video.png'
import Video from '/src/IMG/video.png'
import ProfileIcon from '/src/IMG/profile-icon.png'
import Logout from '/src/IMG/Logout.png'
import './tuttordashboard.css'

const TutorDashboard = () => {
  return (
    <div className="fuba_tutor-container">
      <div className="fuba_tutor-left">
        <div>
            <img src={Fubalogo} alt=""/>
        </div>
        <div className="side-profile">
            <img src={Video} alt=""/>
            <p>Dashboard</p>
        </div>
        <div className="side_profile">
            <img src={PhVideo} alt=""/>
            <p>Video</p>
        </div>
        <div className="sideprofile">
            <img src={ProfileIcon} alt=""/>
            <p>Profile</p>
        </div>
        <div className="side_profile">
            <img src={Archive} alt=""/>
            <p>Drafts</p>
        </div>
        <div className="daniel-logout">
            <img src={Logout} alt=""/>
            <p>Logout</p>
        </div>
      </div>
      <div className="Daniel_container">
          <div className="Daniel_profile">
            <div>
                <h2>My Profile</h2>
            </div>
            <div className="tutor-Daniel">
                <div>
                    <img className="notibell" src={Noti} alt=""/>
                    <img className="ellipse-red" src={Ellipse} alt=""/>
                </div>
                <div className="dan">
                    <h1>Hi Daniel Phil</h1>
                    <img src={Tutor} alt=""/>
                </div>
            </div>
          </div>
          <div className="daniel_inner-container">
              <h1>My Profile</h1>
              <div className="daniel_address">
                  <div className="address-info">
                    <img src={Tutor} alt=""/>
                    <div>
                        <h2>Daniel Phil</h2>
                        <p>(Tutor)</p>
                        <p>Abuja, Nigeria</p>
                    </div>
                  </div>
                  <div className="edit-container">
                      <button>
                        <img src={Edit} alt=""/>
                        <p>edit</p>
                      </button>
                  </div>
              </div>
          </div>

          <div className="inner-container2">
            <div className="daniel_inner-container2">
                <h1 className="personal">Personal Information</h1>
                <div className="daniel-info">
                    <div className="daniel_inner-info">
                        <div className="daniel-personal-data">
                            <div className="name_section">
                                <h1>First Name</h1>
                                <p>Daniel</p>
                            </div>
                            <div className="name_section">
                                <h1>Last Name</h1>
                                <p>Phil</p>
                            </div>
                        </div>
                        <div className="daniel-personal-data">
                            <div className="name_section">
                                <h1>Email Address</h1>
                                <p>danilephil@gmail.com</p>
                            </div>
                            <div className="name_section">
                                <h1>Phone</h1>
                                <p>+234 888 888 8888</p>
                            </div>
                        </div>
                        <div>
                            <div className="daniel-bio">
                                <h1>Bio</h1>
                                <p>Tutor</p>
                            </div>
                        </div>
                    </div>

                    <div className="edit-container">
                        <button>
                            <img src={Edit} alt=""/>
                            <p>edit</p>
                        </button>
                    </div>
                </div>
            </div>
          </div>

          <div className="inner-container2">
            <div className="daniel_inner-container2">
                <h1 className="personal">Address</h1>
                <div className="daniel-info">
                    <div className="daniel_inner-info">
                        <div className="daniel-personal-data">
                            <div className="name_section">
                                <h1>Country</h1>
                                <p>Nigeria</p>
                            </div>
                            <div className="name_section">
                                <h1>State</h1>
                                <p>Abuja</p>
                            </div>
                        </div>
                        <div className="daniel-personal-data">
                            <div className="name_section">
                                <h1>POSTAL CODE</h1>
                                <p>900001</p>
                            </div>
                        </div>
                    </div>

                    <div className="edit-container">
                        <button>
                            <img src={Edit} alt=""/>
                            <p>edit</p>
                        </button>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TutorDashboard
