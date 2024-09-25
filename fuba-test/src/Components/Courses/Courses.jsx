import React, {useState} from 'react'
import './courses.css'
import Fubalogo from '/src/IMG/fuba-logo.png'
import Menu from '/src/IMG/menu.png'
import {Link, useNavigate} from "react-router-dom"
import SearchBar from '/src/IMG/search-bar.png'
import Notification from '/src/IMG/notification.png'
import DropMenu from '/src/IMG/DropMenu.png'
import Mask1 from '/src/IMG/Mask1.png'
import ProgramTag from '../ProgramTag/ProgramTag'
import Check1 from '/src/IMG/check1.png'
import Check2 from '/src/IMG/check2.png'
import Check3 from '/src/IMG/check3.png'
import Star from '/src/IMG/star.png'
import Star1 from '/src/IMG/star1.png'
import Profile from '/src/IMG/profile.png'
import Footer from '../Footer/Footer'
import SliderTag from '../SubPage/SliderTag'
import Sliding from '../SubPage/Sliding'
import Coursesnav from '../CoursesNav/Coursesnav'

const Courses = () => {

    let navigate = useNavigate()

    function courseslist(){
        navigate('/courseslist')
    }
    
  return (
    <div className="fuba_courses">
        <div>
            <Coursesnav/>
        </div>

        <div>
            <img className="course-background" src={Mask1} alt=""/>
        </div>
        <div className="course-list">
            <p className="course-list">Checkout New List</p>
            <h1 className="course-courses">Explore Courses</h1>
        </div>
        <div className="my_programscreen">
            <ProgramTag/>
        </div>
        <div className="check-card">
            <div className="card" onClick={courseslist}>
                <div className="card-imgbx">
                    <img src={Check1} alt=""/>
                </div>
                <img className="profile-log1" src={Profile} alt=""/>
                <div className="check-user">
                    <p className="user-name">Philip Ola</p>
                    <h4 className="user-field">Becoming a Developer</h4>
                    <div className="star">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <p className="rate">(5)</p>
                    </div>
                    <h3 className="price">$30.00</h3>
                    <hr/>
                    <div className="modules">
                        <p>4 Modules</p>
                        <p>3 Hours</p>
                        <p>Beginner</p>
                    </div>
                </div>
            </div>

            <div className="card" onClick={courseslist}>
                <div className="card-imgbx">
                    <img src={Check2} alt=""/>
                </div>
                <img className="profile-log1" src={Profile} alt=""/>
                <div className="check-user">
                <p className="user-name">Patricia Paul</p>
                <h4 className="user-field">Preparing Your Portfolio</h4>
                    <div className="star">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star1} alt=""/>
                        <p className="rate">(4)</p>
                    </div>
                    <h3 className="price">$35.00</h3>
                    <hr/>
                    <div className="modules">
                        <p>4 Modules</p>
                        <p>3 Hours</p>
                        <p>Beginner</p>
                    </div>
                </div>
            </div>

            <div className="card" onClick={courseslist}>
                <div className="card-imgbx">
                    <img src={Check3} alt=""/>
                </div>
                <img className="profile-log1" src={Profile} alt=""/>
                <div className="check-user">
                    <p className="user-name">John Wick</p>
                    <h4 className="user-field">Proposal Writing</h4>
                    <div className="star">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <p className="rate">(5)</p>
                    </div>
                    <h3 className="price">$40.00</h3>
                    <hr/>
                    <div className="modules">
                        <p>4 Modules</p>
                        <p>3 Hours</p>
                        <p>Beginner</p>
                    </div>
                </div>
            </div>

            <div className="card" onClick={courseslist}>
                <div className="card-imgbx">
                    <img src={Check1} alt=""/>
                </div>
                <img className="profile-log1" src={Profile} alt=""/>
                <div className="check-user">
                    <p className="user-name">Philip Ola</p>
                    <h4 className="user-field">Becoming a Developer</h4>
                    <div className="star">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <p className="rate">(5)</p>
                    </div>
                    <h3 className="price">$30.00</h3>
                    <hr/>
                    <div className="modules">
                        <p>4 Modules</p>
                        <p>3 Hours</p>
                        <p>Beginner</p>
                    </div>
                </div>
            </div>

            <div className="card" onClick={courseslist}>
                <div className="card-imgbx">
                    <img src={Check2} alt=""/>
                </div>
                <img className="profile-log1" src={Profile} alt=""/>
                <div className="check-user">
                <p className="user-name">Patricia Paul</p>
                <h4 className="user-field">Preparing Your Portfolio</h4>
                    <div className="star">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star1} alt=""/>
                        <p className="rate">(4)</p>
                    </div>
                    <h3 className="price">$35.00</h3>
                    <hr/>
                    <div className="modules">
                        <p>4 Modules</p>
                        <p>3 Hours</p>
                        <p>Beginner</p>
                    </div>
                </div>
            </div>

            <div className="card" onClick={courseslist}>
                <div className="card-imgbx">
                    <img src={Check3} alt=""/>
                </div>
                <img className="profile-log1" src={Profile} alt=""/>
                <div className="check-user">
                    <p className="user-name">John Wick</p>
                    <h4 className="user-field">Proposal Writing</h4>
                    <div className="star">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <p className="rate">(5)</p>
                    </div>
                    <h3 className="price">$40.00</h3>
                    <hr/>
                    <div className="modules">
                        <p>4 Modules</p>
                        <p>3 Hours</p>
                        <p>Beginner</p>
                    </div>
                </div>
            </div>

            <div className="card" onClick={courseslist}>
                <div className="card-imgbx">
                    <img src={Check1} alt=""/>
                </div>
                <img className="profile-log1" src={Profile} alt=""/>
                <div className="check-user">
                    <p className="user-name">Philip Ola</p>
                    <h4 className="user-field">Becoming a Developer</h4>
                    <div className="star">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <p className="rate">(5)</p>
                    </div>
                    <h3 className="price">$30.00</h3>
                    <hr/>
                    <div className="modules">
                        <p>4 Modules</p>
                        <p>3 Hours</p>
                        <p>Beginner</p>
                    </div>
                </div>
            </div>

            <div className="card" onClick={courseslist}>
                <div className="card-imgbx">
                    <img src={Check2} alt=""/>
                </div>
                <img className="profile-log1" src={Profile} alt=""/>
                <div className="check-user">
                <p className="user-name">Patricia Paul</p>
                <h4 className="user-field">Preparing Your Portfolio</h4>
                    <div className="star">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star1} alt=""/>
                        <p className="rate">(4)</p>
                    </div>
                    <h3 className="price">$35.00</h3>
                    <hr/>
                    <div className="modules">
                        <p>4 Modules</p>
                        <p>3 Hours</p>
                        <p>Beginner</p>
                    </div>
                </div>
            </div>

            <div className="card" onClick={courseslist}>
                <div className="card-imgbx">
                    <img src={Check3} alt=""/>
                </div>
                <img className="profile-log1" src={Profile} alt=""/>
                <div className="check-user">
                    <p className="user-name">John Wick</p>
                    <h4 className="user-field">Proposal Writing</h4>
                    <div className="star">
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <img src={Star} alt=""/>
                        <p className="rate">(5)</p>
                    </div>
                    <h3 className="price">$40.00</h3>
                    <hr/>
                    <div className="modules">
                        <p>4 Modules</p>
                        <p>3 Hours</p>
                        <p>Beginner</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="pls_check">
            <SliderTag/>
            <Sliding/>
            <Sliding/>
            <Sliding/>
        </div>
        <Footer/>
    </div>
  )
}

export default Courses
