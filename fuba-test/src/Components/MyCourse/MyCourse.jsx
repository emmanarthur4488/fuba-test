import React from 'react'
import './mycourse.css'
import Fubalogo from '/src/IMG/fuba-logo.png'
import SearchBar from '/src/IMG/search-bar.png'
import Noti from '/src/IMG/noti.png'
import Tutor from '/src/IMG/tutor.png'
import Previous from '/src/IMG/previous.png'
import Next from '/src/IMG/next.png'
import CourseImg from '/src/IMG/course-img.png'
import Progress from '/src/IMG/Progress.png'
import Subtitle from '/src/IMG/subtitle.png'
import Fullscreen from '/src/IMG/fullscreen.png'
import BlackStar from '/src/IMG/black-star.png'
import Play from '/src/IMG/play.png'
import GreenTick from '/src/IMG/green-tick.png'
import WhiteTick from '/src/IMG/white-tick.png'
import Clock from '/src/IMG/clock.png'

const MyCourse = () => {
  return (
    <div>
      <nav className="tut-container">
        <img className="logo" src={Fubalogo} alt=""/>
        <div className="tut-ul">
          <li>
            <button className="student-search">
              <input type="search" placeholder="search course"/>
              <img src={SearchBar} alt=""/>
            </button>
          </li>
        </div>
        <div className="notificationcontainer">
          <div>
            <img className="noti_img" src={Noti} alt=""/>
          </div>
          <div className="tutor_cont">
            <div>
              <img className="tutor_img" src={Tutor} alt=""/>
            </div>
            <div className="tutor_feild">
              <p>Daniel Phil</p>
              <p>Tutor</p>
            </div>
          </div>
        </div>
      </nav>

        <div className="mycourse-container">
          <div className="mycourse-left">
            <div className="calibartor">
              <div>
                <p className="back-course">Back to courses</p>
              </div>
              <div className="cali">
                <div className="prev">
                  <img src={Previous} alt=""/>
                  <p>Prev</p>
                </div>
                <div className="next">
                  <p>Next</p>
                  <img src={Next} alt=""/>
                </div>
              </div>
            </div>
            <img className="course-video" src={CourseImg} alt=""/>
            <img className="progress-bar" src={Progress} alt=""/>
            <div className="prog-screen">
              <div className="fullscreen">
                <img src={Fullscreen} alt=""/>
                <p>Fullscreen</p>
              </div>

              <div className="subtitle">
                <p>Subtitle</p>
                <img src={Subtitle} alt=""/>
              </div>
            </div>
            <div className="mycourse-note">
              <h2>Creating Your Upwork Account</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi commodi consequuntur minus placeat perferendis. Dignissimos alias ullam deleniti dolorem placeat porro consequuntur laudantium vel quisquam quibusdam aliquam sunt, accusantium fugiat unde! Reiciendis itaque dolores officia alias ipsa exercitationem expedita molestias?</p>
            </div>
            <div className="rated-course">
              <p>Rate this course</p>
            </div>
            <div className="black-star">
              <img src={BlackStar} alt=""/>
              <img src={BlackStar} alt=""/>
              <img src={BlackStar} alt=""/>
              <img src={BlackStar} alt=""/>
              <img src={BlackStar} alt=""/>
              <p>(5)</p>
            </div>
          </div>

          <div className="mycourse-right">
            <div className="Course-Module">
              <h2>Course Module</h2>
            </div>
            <div className="course_module_container">
              <div className="my_module-container">
                <h2>Module 1</h2>
                <img src={Play} alt=""/>
              </div>

              <div className="module-tick-container">
                <div className="tick">
                  <img src={GreenTick} alt=""/>
                  <p>Planning your proposal</p>
                </div>

                <div className="mins-container">
                  <img src={Clock} alt=""/>
                  <p>2hrs 20mins</p>
                </div>
              </div>
            </div>

            <div className="course_module_container">
              <div className="my_module-container">
                <h2>Module 2</h2>
                <img src={Play} alt=""/>
              </div>

              <div className="module-tick-container">
                <div className="tick">
                  <img src={WhiteTick} alt=""/>
                  <p>Planning your proposal</p>
                </div>

                <div className="mins-container">
                  <img src={Clock} alt=""/>
                  <p>50mins</p>
                </div>
              </div>
            </div>

            <div className="course_module_container">
              <div className="my_module-container">
                <h2>Module 3</h2>
                <img src={Play} alt=""/>
              </div>

              <div className="module-tick-container">
                <div className="tick">
                  <img src={WhiteTick} alt=""/>
                  <p>Planning your proposal</p>
                </div>

                <div className="mins-container">
                  <img src={Clock} alt=""/>
                  <p>50mins</p>
                </div>
              </div>
            </div>

            <div className="course_module_container">
              <div className="my_module-container">
                <h2>Module 4</h2>
                <img src={Play} alt=""/>
              </div>

              <div className="module-tick-container">
                <div className="tick">
                  <img src={WhiteTick} alt=""/>
                  <p>Planning your proposal</p>
                </div>

                <div className="mins-container">
                  <img src={Clock} alt=""/>
                  <p>50mins</p>
                </div>
              </div>
            </div>

            <div className="course_module_container">
              <div className="my_module-container">
                <h2>Module 5</h2>
                <img src={Play} alt=""/>
              </div>

              <div className="module-tick-container">
                <div className="tick">
                  <img src={WhiteTick} alt=""/>
                  <p>Planning your proposal</p>
                </div>

                <div className="mins-container">
                  <img src={Clock} alt=""/>
                  <p>50mins</p>
                </div>
              </div>
            </div>

            <div className="course_module_container">
              <div className="my_module-container">
                <h2>Module 6</h2>
                <img src={Play} alt=""/>
              </div>

              <div className="module-tick-container">
                <div className="tick">
                  <img src={WhiteTick} alt=""/>
                  <p>Planning your proposal</p>
                </div>

                <div className="mins-container">
                  <img src={Clock} alt=""/>
                  <p>50mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MyCourse
