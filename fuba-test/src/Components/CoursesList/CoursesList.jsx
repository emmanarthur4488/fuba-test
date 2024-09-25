import React, {useState} from 'react'
import './courseslist.css'
import Fubalogo from '/src/IMG/fuba-logo.png'
import Menu from '/src/IMG/menu.png'
import SearchBar from '/src/IMG/search-bar.png'
import Notification from '/src/IMG/notification.png'
import DropMenu from '/src/IMG/DropMenu.png'
import CourseImg from '/src/IMG/course-img.png'
import Mask1 from '/src/IMG/Mask1.png'
import Mask2 from '/src/IMG/mask2.png'
import Star from '/src/IMG/star.png'
import Clock from '/src/IMG/clock.png'
import Facebook2 from '/src/IMG/facebook2.png'
import Whatsapp from '/src/IMG/whatsapp.png'
import Twitter2 from '/src/IMG/twitter2.png'
import Instagram2 from '/src/IMG/instagram2.png'
import {Link, useNavigate} from "react-router-dom"
import Footer from '../Footer/Footer'
import CoureselistNav from '../CourseslistNav/CoureselistNav'

const CoursesList = () => {
    let navigate = useNavigate()
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = ()=>{
        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }
    function mycourse(){
        navigate('/mycourse')
    }
  return (
    <div>
      <div>
        <div>
            <CoureselistNav/>
        </div>
        <div>
            <img className="course-background" src={Mask1} alt=""/>
        </div>
        <div className="course-list">
            <p className="course-list">Courses List</p>
            <h1 className="course-courses">Explore Courses</h1>
        </div>
      </div>

      <div className="course_detail-card">
        <div className="detail-card">
            <div>
                <p className="course-title">Course Details</p>
                <img className="course-img" onClick={mycourse} src={CourseImg} alt=""/>
                <h3 className="upwork">Preparing Your Upwork Account for Proposals</h3>
            </div>
            <div className="enroll">
                <div>
                    <img src={Mask2} alt=""/>
                </div>
                <div>
                    <p>Daniel Phil</p>
                </div>
                <div>
                    <p>53 enrolled students</p>
                </div>
                <div className="enroll-star">
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <img src={Star} alt=""/>
                    <p>(5)</p>
                </div>
            </div>
            <div className="description-container">
                <button>Course Description</button>
                <p>In this comprehensive freelancing course, you will learn the essential skills and strategies needed to craft persuasive and effective proposals that will set you apart in the competitive world of freelancing. Whether you're a seasoned freelancer or just starting out, this course is designed to help you increase your client base and boost your income</p>
            </div>
        </div>
        
        <div className="course-modules">
            <p className="course-module_title">Course modules (4)</p>
            <div className="full-course">
                <p>Full course $250.00</p>
            </div>
            <div className="modules">
                <div className="module-card">
                    <p className="modules-head">Module 1</p>
                    <p className="prepare">Preparing your upwork account</p>
                    <div className="timing">
                        <div className="hours">
                            <img className="clock" src={Clock} alt=""/>
                            <p>3hrs 20mins</p>
                        </div>
                        <div>
                            <p>$60.00</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="module-btn">Buy</button>
                </div>
            </div>

            <div className="modules">
                <div className="module-card">
                    <p className="modules-head">Module 2</p>
                    <p className="prepare">Preparing your upwork account</p>
                    <div className="timing">
                        <div className="hours">
                            <img className="clock" src={Clock} alt=""/>
                            <p>3hrs 20mins</p>
                        </div>
                        <div>
                            <p>$60.00</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="module-btn">Buy</button>
                </div>
            </div>

            <div className="modules">
                <div className="module-card">
                    <p className="modules-head">Module 3</p>
                    <p className="prepare">Preparing your upwork account</p>
                    <div className="timing">
                        <div className="hours">
                            <img className="clock" src={Clock} alt=""/>
                            <p>3hrs 20mins</p>
                        </div>
                        <div>
                            <p>$60.00</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="module-btn">Buy</button>
                </div>
            </div>

            <div className="modules">
                <div className="module-card">
                    <p className="modules-head">Module 4</p>
                    <p className="prepare">Preparing your upwork account</p>
                    <div className="timing">
                        <div className="hours">
                            <img className="clock" src={Clock} alt=""/>
                            <p>3hrs 20mins</p>
                        </div>
                        <div>
                            <p>$60.00</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="module-btn">Buy</button>
                </div>
            </div>

            <div className="get-full">
                <button className="get-full_course">Get Full Course <br/> $250.00</button>
            </div>
            <div className="share">
                <p>Share this course:</p>
                <div className="share-icon">
                    <img src={Facebook2} alt=""/>
                    <img src={Instagram2} alt=""/>
                    <img src={Whatsapp} alt=""/>
                    <img src={Twitter2} alt=""/>
                </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default CoursesList