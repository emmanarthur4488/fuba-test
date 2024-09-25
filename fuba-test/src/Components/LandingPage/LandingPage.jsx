import React, {useState, useRef} from 'react'
import Fubalogo from '/src/IMG/fuba-logo.png'
import SearchBar from '/src/IMG/search-bar.png'
import Student from '/src/IMG/student.png'
import Vector1 from '/src/IMG/vector1.png'
import Vector2 from '/src/IMG/Vector.png'
import Bulb from '/src/IMG/bulb.png'
import Carbon from '/src/IMG/carbon.png'
import Carbon1 from '/src/IMG/carbon1.png'
import Carbon2 from '/src/IMG/carbon2.png'
import Carbon3 from '/src/IMG/carbon3.png'
import Idea from '/src/IMG/idea.png'
import Material from '/src/IMG/material.png'
import Mask from '/src/IMG/Mask.png'
import Tick from '/src/IMG/tick.png'
import Check1 from '/src/IMG/check1.png'
import Check2 from '/src/IMG/check2.png'
import Check3 from '/src/IMG/check3.png'
import Star from '/src/IMG/star.png'
import Star1 from '/src/IMG/star1.png'
import Profile from '/src/IMG/profile.png'
import AboutImg from '/src/IMG/img1.png'
import AboutImg1 from '/src/IMG/img2.png'
import Location from '/src/IMG/location.png'
import Mail from '/src/IMG/mail.png'
import Phone from '/src/IMG/phone.png'
import Menu from '/src/IMG/menu.png'
import './landingpage.css'
import Footer from '../Footer/Footer'
import Button from '../SubPage/Button'
import {Link, useNavigate} from "react-router-dom"
import SliderTag from '../SubPage/SliderTag'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gift from '/src/IMG/gift.png'
import Colorful from '/src/IMG/colorful.png'
import Landnav from '../LandNav/Landnav'

const LandingPage = () => {

    let navigate = useNavigate()

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = ()=>{
        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
    if(tx > -75){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }

    function courses(){
        navigate('/courses')
    }
  return (
    <div>
        <div>
            <Landnav/>
        </div>

      <div className="gat-container">
          <div className="gat-size">
            <div className="gatImgBx">
                <img className="img1" src={Vector1} alt=""/>
                <img className="img2" src={Vector2} alt=""/>
                <img className="img3" src={Bulb} alt=""/>
            </div>
            <div className="gat-note-container">
              <h1>Your Gateway to Digital <br/> Excellence.</h1>
              <p>Explore, Learn, Master.</p>
              <button>Get Started</button>
          </div>
          </div>
          <div className="student-container">
            <img className="student" src={Student} alt=""/>
          </div>
      </div>
      <Button/>
      <div className="skill-container">
            <i className="fa-solid fa-circle-chevron-right" onClick={slideForward}></i>
            <i className="fa-solid fa-circle-chevron-left" onClick={slideBackward}></i>
            <div className="sliderd">
                <ul ref={slider}>
                    <li>
                        <div className="slidee">
                            <div className="slidee-container">
                                <div className="usere-info">
                                    <img src={Carbon} alt=""/>
                                </div>
                                <div className="slidee-note">
                                    <h1>Learn Skills</h1>
                                    <p>with unlimited courses</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slidee">
                            <div className="slidee-container">
                                <div className="usere-info">
                                    <img src={Idea} alt=""/>
                                </div>
                                <div className="slidee-note">
                                    <h1>Expert Tutors</h1>
                                    <p>best & highly qualified</p>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="slidee">
                            <div className="slidee-container">
                                <div className="usere-info">
                                    <img src={Material} alt=""/>
                                </div>
                                <div className="slidee-note">
                                    <h1>Certification</h1>
                                    <p>valued across globe</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div className="main-skill-container">
            <li>
                <div className="main-slide">
                    <div className="main-slide-container">
                        <div className="main-user-info">
                            <img src={Carbon} alt=""/>
                        </div>
                        <div className="main-slide-note">
                            <h1>Learn Skills</h1>
                            <p>with unlimited courses</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="main-slide">
                    <div className="main-slide-container">
                        <div className="main-user-info">
                            <img src={Idea} alt=""/>
                        </div>
                        <div className="main-slide-note">
                            <h1>Expert Tutors</h1>
                            <p>best & highly qualified</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className="main-slide">
                    <div className="main-slide-container">
                        <div className="main-user-info">
                            <img src={Material} alt=""/>
                        </div>
                        <div className="main-slide-note">
                            <h1>Certification</h1>
                            <p>valued across globe</p>
                        </div>
                    </div>
                </div>
            </li>
        </div>
        

        <div className="mask-container">
            <div>
                <img src={Mask} alt=""/>
            </div>
            <div className="mask-note">
                <h4>Fuba Learning</h4>
                <h1>Welcome to all access learning center</h1>
                <p>At Fuba, we believe that the future of work is driven by the power of <br/> freelancing. We are a passionate community dedicated to helping you <br/> unlock your full potential and achieve success in the world of freelancing.</p>
                <div>
                    <div className="mask-sub">
                        <img src={Tick} alt=""/>
                        <p>Get unlimited access to 1000+ of our top courses</p>
                    </div>
                    <div className="mask-sub">
                        <img src={Tick} alt=""/>
                        <p>Get access to updated topics</p>
                    </div>
                    <div className="mask-sub">
                        <img src={Tick} alt=""/>
                        <p>Find the best qualified tutors</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="phone-mask-container">
            <h4>Fuba Learning</h4>
            <h1>Welcome to all access learning center</h1>
            <img className="phone-mask" src={Mask} alt=""/>
            <p className="phone-mask-note">At Fuba, we believe that the future of work is driven by the power of <br/> freelancing. We are a passionate community dedicated to helping you <br/> unlock your full potential and achieve success in the world of freelancing.</p>
            <div>
                <div className="mask-sub">
                    <img src={Tick} alt=""/>
                    <p>Get unlimited access to 1000+ of our top courses</p>
                </div>
                <div className="mask-sub">
                    <img src={Tick} alt=""/>
                    <p>Get access to updated topics</p>
                </div>
                <div className="mask-sub">
                    <img src={Tick} alt=""/>
                    <p>Find the best qualified tutors</p>
                </div>
            </div>
        </div>

        <div className="check-list">
            <p className="new-list">Checkout New List</p>
            <h1 className="courses">Explore Courses</h1>
            <div className="popular">
                <p>Popular Courses</p>
            </div>
            <div className="check-card">
                <div className="card">
                    <div className="card-imgbx">
                        <img src={Check1} alt=""/>
                    </div>
                    <img className="profile-log" src={Profile} alt=""/>
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

                <div className="card">
                    <div className="card-imgbx">
                        <img src={Check2} alt=""/>
                    </div>
                    <img className="profile-log" src={Profile} alt=""/>
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

                <div className="card">
                    <div className="card-imgbx">
                        <img src={Check3} alt=""/>
                    </div>
                    <img className="profile-log" src={Profile} alt=""/>
                    <div className="check-user">
                        <p className="user-name">John Wick</p>
                        <h4 className="user-field">Proposal Writing</h4>
                        <div className="star">
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star1} alt=""/>
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

                <div className="card">
                    <div className="card-imgbx">
                        <img src={Check1} alt=""/>
                    </div>
                    <img className="profile-log" src={Profile} alt=""/>
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

                <div className="card">
                    <div className="card-imgbx">
                        <img src={Check2} alt=""/>
                    </div>
                    <img className="profile-log" src={Profile} alt=""/>
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

                <div className="card">
                    <div className="card-imgbx">
                        <img src={Check3} alt=""/>
                    </div>
                    <img className="profile-log" src={Profile} alt=""/>
                    <div className="check-user">
                        <p className="user-name">John Wick</p>
                        <h4 className="user-field">Proposal Writing</h4>
                        <div className="star">
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star1} alt=""/>
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

            {/*  */}
            <div className="pls_check">
                <SliderTag/>
            </div>

            <div className="btn-container">
                <button className="btn-view" onClick={courses}>View All Courses</button>
            </div>
        </div>
        <div className="services-container">
            <h1 className="offer">Services we offer</h1>
            <div className="carbon-container">
                <div className="carbon-card">
                    <img src={Carbon1} alt=""/>
                    <h1>Online Training</h1>
                    <p>We offer a full range of professional courses from well renowed tutors all over the world.</p>
                </div>
                <div className="carbon-card">
                    <img src={Carbon3} alt=""/>
                    <h1>Blockchain Development</h1>
                    <p>We offer a full range of professional courses from well renowed tutors all over the world.</p>
                </div>
                <div className="carbon-card">
                    <img src={Carbon2} alt=""/>
                    <h1>Web/ Mobile App Dev.</h1>
                    <p>We offer a full range of professional courses from well renowed tutors all over the world.</p>
                </div>
            </div>
        </div>

        <div className="about-container">
            <div className="about">
                <div className="about_imgbx">
                    <img className="about_img1" src={AboutImg} alt=""/>
                    <img className="about_img2" src={AboutImg1} alt=""/>
                </div>
                <div className="about_note-container">
                    <h1>About Our Team</h1>
                    <p>We are a dynamic group of highly skilled professionals passionate about creating exceptional digital experiences. With a deep understanding of the latest web technologies and trends, we strive to deliver innovative and cutting-edge solutions that drive business growth and exceed client expectations.</p>
                    <div className="about-note">
                        <p>We take great pride in our commitment to nurturing and developing individuals through our comprehensive selection of professional courses, with a primary focus on freelancing, software development, and blockchain expertise. Our confidence in the calibre of our course offerings is rooted in their meticulous design, tailored to meet the needs of novices, junior professionals, and seasoned experts alike.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-icon">
                <div className="contact-card">
                    <img src={Location} alt=""/>
                    <p>Address</p>
                    <h6>55, Lukewarm Street, Abuja, Nigeria</h6>
                </div>
                <div className="contact-card">
                    <img src={Mail} alt=""/>
                    <p>Email Address</p>
                    <h6>futurebuildersagency@gmail.com</h6>
                </div>
                <div className="contact-card">
                    <img className="phone" src={Phone} alt=""/>
                    <p>Phone No.</p>
                    <h6>+234 901 842 9887</h6>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage
