import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './studentdashboard.css'
import Frame1 from '/src/IMG/Frame1.png'
import Frame2 from '/src/IMG/frame2.png'
import Frame3 from '/src/IMG/frame3.png'
import Active from '/src/IMG/fe_activity.png'
import Arrow from '/src/IMG/arrow-left.png'
import ArrowUp from '/src/IMG/arrow-up.png'
import SearchBar from '/src/IMG/search-bar.png'
import Noti from '/src/IMG/noti.png'
import Ellipse from '/src/IMG/ellipse.png'
import MaskStudent from '/src/IMG/mask-student.png'
import Schedule from '/src/IMG/uil_schedule.png'
import HourGlass from '/src/IMG/hourglass.png'
import Group7 from '/src/IMG/Group7.png'
import Rect1 from '/src/IMG/Rect1.png'
import Rect2 from '/src/IMG/Rect2.png'
import MdiLearn from '/src/IMG/mdi_learn.png'
import Mask3 from '/src/IMG/mask3.png'
import Mask4 from '/src/IMG/mask4.png'
import Mask5 from '/src/IMG/mask5.png'
import Mask7 from '/src/IMG/mask7.png'
import TaskLine from '/src/IMG/task-line.png'
import Stopwatch from '/src/IMG/mdi_stopwatch.png'
import Rectangle1 from '/src/IMG/Rectangle1.png'
import Rectangle2 from '/src/IMG/Rectangle2.png'
import Rectangle3 from '/src/IMG/Rectangle3.png'
import NotDone from '/src/IMG/not-done.png'
import Ellipse1 from '/src/IMG/ellipse1.png'
import Ellipse2 from '/src/IMG/ellipse2.png'
import Ellipse3 from '/src/IMG/ellipse3.png'
import Notification from '../SubPage/NotificationTag'



const StudentDashboard = () => {
  const [date, setDate] = useState(new Date())

  const onChange = date => {
    setDate(date)
  }
  return (
    <div>
      <div className="student-dashboard_container">
        {/* <div className="student-left">
            <img src={Frame1} alt=""/>
        </div> */}
        <div className="student-right">
          <div>
            <div className="hello">
              <p>Welcome Philip!</p>
              <img src={Frame2} alt=""/>
            </div>
          </div>

          <div className="student-nav">
            <div>
              <button className="category">
                <p>Category</p>
                <img src={Arrow} alt=""/>
              </button>
            </div>

            <div>
              <button className="student-search">
                <input type="search" placeholder="search course"/>
                <img src={SearchBar} alt=""/>
              </button>
            </div>

            <div className="student-bell">
              <img className="student-noti" src={Noti} alt=""/>
              <img className="ell" src={Ellipse} alt=""/>
            </div>

            <div className="student_drop">
              <div>
                <img src={MaskStudent} alt=""/>
              </div>
              <div>
                <h3>Philip</h3>
                <p>student</p>
              </div>
              <div>
                <img className="arrow-up" src={ArrowUp} alt=""/>
              </div>
            </div>
          </div>

          <div className="student_not_container">
            {/* <Notification/> */}
          </div>

          <div className="activity">
            <div className="act">
              <img src={Active} alt=""/>
              <p>Activity</p>
            </div>

            <div className="schedule-container">
              <div className="schedule-1">
                <img src={Schedule} alt=""/>
                <p>Schedule Session</p>
              </div>
              <button className="schedule-2">
                <p>Select Tutor</p>
                <img src={Arrow} alt=""/>
              </button>
            </div>
          </div>

          <div className="active-container">
            <div className="active">
              <div className="grahp">
                <img src={Frame3} alt=""/>
              </div>
            </div>

            <div className="calendar">
              <Calendar onChange={onChange} value={date}/>
            </div>
          </div>

          <div className="main_rating-container">
            <div className="mainrating1">
              <div className="main-rat">
                <div className="hour_container">
                  <img src={HourGlass} alt=""/>
                  <p>Completion Rate</p>
                </div>

                <div className="cicle-bar_container">
                  <img className="cicle-bar" src={Group7} alt=""/>
                </div>

                <div className="progress_container">
                  <div className="learners_progress">
                    <img src={Rect2} alt=""/>
                    <p>Completed</p>
                  </div>
                  <div className="learners_progress">
                    <img src={Rect1} alt=""/>
                    <p>Progress</p>
                  </div>
                </div>
              </div>

              <div className="rect-container">
                <div className="stopwatch-container">
                  <img src={Stopwatch} alt=""/>
                  <p>Studying Hours</p>
                </div>
                <div className="study_note">
                  <p>26 15 hours minutes in total <img src={NotDone} alt=""/></p>
                </div>
                <div className="study-rect">
                  <img className="img1" src={Rectangle1} alt=""/>
                  <img className="img2" src={Rectangle2} alt=""/>
                  <img className="img3" src={Rectangle3} alt=""/>
                </div>
                <div className="elli-container">
                  <div className="ellipse">
                    <img src={Ellipse1} alt=""/>
                    <p>Video</p>
                  </div>
                  <div className="ellipse">
                    <img src={Ellipse2} alt=""/>
                    <p>Writing</p>
                  </div>
                  <div className="ellipse">
                    <img src={Ellipse3} alt=""/>
                    <p>Quizzes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="main_rating1">
              <div className="Top_learner-container">
                <img src={MdiLearn} alt=""/>
                <p>Top Learners</p>
              </div>
              <div className="learners_name">
                <p>Name</p>
                <p>Rating</p>
              </div>

              <div>
                <div className="mask-rating">
                  <div className="mask_naming">
                    <img src={Mask3} alt=""/>
                    <p>Sophia Momodu</p>
                  </div>
                  <button>93%</button>
                </div>
                <div className="mask-rating1">
                  <div className="mask_naming">
                    <img src={Mask4} alt=""/>
                    <p>Jude Michael</p>
                  </div>
                  <button>80%</button>
                </div>
                <div className="mask-rating2">
                  <div className="mask_naming">
                    <img src={MaskStudent} alt=""/>
                    <p>Philip Alex</p>
                  </div>
                  <button>68%</button>
                </div>
                <div className="mask-rating3">
                  <div className="mask_naming">
                    <img src={Mask7} alt=""/>
                    <p>John Kay</p>
                  </div>
                  <button>50%</button>
                </div>
                <div className="mask-rating4">
                  <div className="mask_naming">
                    <img src={Mask5} alt=""/>
                    <p>Bola Olu</p>
                  </div>
                  <button>48%</button>
                </div>
              </div>
              <button className="top-learners-btn">View All</button>
            </div>

            <div className="main_rating1">
              <div className="tasks_container">
                <img src={TaskLine} alt=""/>
                <p>My Tasks</p>
              </div>
              <div>
                <div className="task-container">
                  <p>Complete course assignment</p>
                  <input type="checkbox" name="" id=""/>
                </div>
                <div className="task-container">
                  <p>Complete framer module 2.</p>
                  <input type="checkbox" name="" id=""/>
                </div>
                <div className="task-container">
                  <p>Take module 2 test <span>Due</span></p>
                  <input type="checkbox" name="" id=""/>
                </div>
                <div className="task-container">
                  <p>Read Course 1</p>
                  <input type="checkbox" name="" id=""/>
                </div>
                <div className="task-container">
                  <p>Components & Variants test</p>
                  <input type="checkbox" name="" id=""/>
                </div>
                <div className="task-container">
                  <p>Take module 3 test <span>Due</span></p>
                  <input className="checkbox" type="checkbox" name="" id="checkbox"/>
                </div>
              </div>
              <button className="tast-btn">View All</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default StudentDashboard
