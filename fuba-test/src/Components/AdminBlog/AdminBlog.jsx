import React, {useState} from 'react'
import './adminblog.css'
import Frame2 from '/src/IMG/frame2.png'
import Noti from '/src/IMG/noti.png'
import Ellipse from '/src/IMG/ellipse.png'
import Mask2 from '/src/IMG/mask2.png'
import Searchicon from '/src/IMG/icon_search.png'
import Group8 from '/src/IMG/group8.png'
import Group9 from '/src/IMG/group9.png'
import Group10 from '/src/IMG/group10.png'
import Group11 from '/src/IMG/group11.png'
import Group12 from '/src/IMG/group12.png'
import Group13 from '/src/IMG/group13.png'
import Group14 from '/src/IMG/group14.png'
import Group15 from '/src/IMG/group15.png'
import Rectt3 from '/src/IMG/Rect2.png'
import Rectt4 from '/src/IMG/Rect1.png'
import Rectt5 from '/src/IMG/Rect4.png'
import Editor from '/src/IMG/editor.png'
import MaskStudent from '/src/IMG/mask-student.png'
import Rect3 from '/src/IMG/Rect3.png'
import Chart from "react-apexcharts";
import Mask3 from '/src/IMG/mask3.png'
import Mask4 from '/src/IMG/mask4.png'
import Mask5 from '/src/IMG/mask5.png'
import Mask7 from '/src/IMG/mask7.png'
import Fubalogo from '/src/IMG/fuba-logo.png'
import Video from '/src/IMG/video.png'
import Window from '/src/IMG/window.png'
import Logout from '/src/IMG/Logout.png'

const AdminBlog = () => {
    const [state, setState] =useState({
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [5, 7, 14, 21, 28]
          }
        },
        series: [
          {
            name: "series-1",
            data: [38, 28, 41, 35, 49]
          }
        ]
    })
  return (
    <div>
      <div className="admin-hero">
          <div className="left-side_nav-container">
            <div className="admin-left">
                <div className="siddeebar">
                    <div className="sidelogo">
                        <img src={Fubalogo} alt=""/>
                    </div>

                    <div className="blocksidee1">
                        <img src={Window} alt=""/>
                        <p>Dashboard</p>
                    </div>

                    <div className="blockside">
                        <p>Content Review</p>
                    </div>

                    <div className="blockside">
                        <p>Dashboard</p>
                    </div>

                    <div className="blockside">
                        <p>Dashboard</p>
                    </div>

                    <div className="blockside">
                        <p>Dashboard</p>
                    </div>

                    <div className="blockLogout">
                        <p>Logout</p>
                        <img src={Logout} alt=""/>
                    </div>
                </div>
            </div>
          </div>
          <div className="right-side_blog">
            <div className="admin_navbar">
                <div className="admin_welcome">
                    <div className="lekan-note">
                        <h3>Welcome Lekan!</h3>
                        <img src={Frame2} alt=""/>
                    </div>
                    
                    <div>
                        <p>Find out the latest happenings</p>
                    </div>
                </div>

                <div className="admin_noti">
                    <div className="admin_noti-container">
                    <img className="admin-bell" src={Noti} alt=""/>
                    <img className="admin-ellipse" src={Ellipse} alt=""/>
                    <img className="search-icon" src={Searchicon} alt=""/>
                    </div>

                    <div className="admin-masks">
                        <img src={Mask2} alt=""/>
                        <div>
                            <h1>Lekan</h1>
                            <p>Admin</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="admin-graph_section">
                <div className="admin-graph_section-left">
                    <div className="lekan-left">
                        <div className="lekan-card_right">
                            <div className="lekan-left_card">
                            <img src={Group8} alt=""/>
                            <p>Total no. of Tutors</p>
                            <h3>152</h3>
                            </div>
                            <div className="lekan-left_card">
                            <img src={Group9} alt=""/>
                            <p>Total no. of Courses</p>
                            <h3>40</h3>
                            </div>
                            <div className="lekan-left_card">
                            <img className="reading" src={Group10} alt=""/>
                            <p>Total no. of Students</p>
                            <h3>256</h3>
                            </div>
                        </div>

                        <div className="chart">
                            <Chart
                            options={state.options}
                            series={state.series}
                            type="area"
                            width="520"
                            height="300"
                            />
                        </div>

                        <div className="admin-rating">
                            <div>
                                <div className="admin_rating-card">
                                    <img className="rate-logo" src={Group11} alt=""/>
                                    <p className="revenue">Total Revenue</p>
                                    <div className="admin-rat_inner-card">
                                        <div>
                                            <p className="value">$150.08</p>
                                        </div>
                                        <div className="rate-value">
                                            <img src={Group12} alt=""/>
                                            <p className="rate-value_rate">+23.2%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="admin_rating-card">
                                    <img className="rate-logo" src={Group11} alt=""/>
                                    <p className="revenue">Total Expense</p>
                                    <div className="admin-rat_inner-card">
                                    <div>
                                        <p className="value">$200.08</p>
                                    </div>
                                    <div className="rate-value">
                                        <img src={Group13} alt=""/>
                                        <p className="rate-value_rate1">+23.2%</p>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="admins_active-container">
                                <h3>Activity Level</h3>
                                <div className="admin-activity_level">
                                    <div>
                                    <img className="activity-range" src={Group14} alt=""/>
                                    </div>
                                    <div>
                                        <div className="admins-rating">
                                            <img src={Rectt3} alt=""/>
                                            <p>Dropoff Rate</p>
                                            <p>87%</p>
                                        </div>

                                        <div className="admins-rating">
                                            <img className="rating_dot" src={Rectt5} alt=""/>
                                            <p>Onboarding</p>
                                            <p>50%</p>
                                        </div>

                                        <div className="admins-rating">
                                            <img src={Rectt4} alt=""/>
                                            <p>Total Cost</p>
                                            <p>58%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="database">
                            <div className="database-container">
                                <div>
                                    <p>Database</p>
                                </div>
                                <div className="data-bar">
                                    <p>Admin</p>
                                    <p>Tutor</p>
                                    <button>Student</button>
                                </div>
                            </div>
                            <div className="data-container">
                                <div>
                                    <h3>Student Name</h3>
                                    <p>Sophia Momodu</p>
                                    <p>Philip Alex</p>
                                    <p>Sani Maleek</p>
                                </div>
                                <div>
                                    <h3>Course Regstered</h3>
                                    <p>UIUX Design</p>
                                    <p>Website Development+1</p>
                                    <p>Blockchain+2</p>
                                </div>
                                <div>
                                    <h3>Date</h3>
                                    <p>12/05/24</p>
                                    <p>15/06/24</p>
                                    <p>22/06/24</p>
                                </div>
                                <div>
                                    <h3>Progress</h3>
                                    <p><span>75%</span></p>
                                    <p className="second-progress">96%</p>
                                    <p className="third-progress">30%</p>
                                </div>
                                <div>
                                    <h3>Manage</h3>
                                    <img src={Editor} alt=""/><br/>
                                    <img src={Editor} alt=""/><br/>
                                    <img src={Editor} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="admin-graph">
                    <div className="admin-graph_section-right">
                        <div className="lekan-right">
                            <h1>Recent Activity</h1>
                            <div className="recent-card">
                            <img src={MaskStudent} alt=""/>
                            <p><span>Philip Alex</span> just completed <br/> <span>Introduction to Figma</span></p>
                            </div>
                            <div className="rectangle_3">
                            <img src={Rect3} alt=""/>
                            </div>
                            <div className="recent-card">
                            <img src={Mask3} alt=""/>
                            <p><span>Sophia Momudu</span> started <br/><span>Introduction to Figma</span></p>
                            </div>
                            <div className="rectangle_3">
                            <img src={Rect3} alt=""/>
                            </div>
                            <div className="recent-card">
                            <img src={Mask4} alt=""/>
                            <p><span>Sani Maleek</span> just completed <br/> <span>Introduction to Figma</span></p>
                            </div>
                            <div className="rectangle_3">
                            <img src={Rect3} alt=""/>
                            </div>
                            <div className="recent-card">
                            <img src={Mask5} alt=""/>
                            <p><span>Sani Maleek</span> just completed <br/> <span>Introduction to Figma</span></p>
                            </div>
                            <div className="rectangle_3">
                            <img src={Rect3} alt=""/>
                            </div>
                            <div className="recent-card">
                            <img src={Mask7} alt=""/>
                            <p><span>Sani Maleek</span> just completed <br/> <span>Introduction to Figma</span></p>
                            </div>
                            <div className="rectangle_3">
                            <img src={Rect3} alt=""/>
                            </div>
                            <div className="recent-card">
                            <img src={Mask5} alt=""/>
                            <p><span>Sani Maleek</span> just completed <br/> <span>Introduction to Figma</span></p>
                            </div>
                            <div className="activemore-btn">
                                <button className="active_more-btn">More</button>
                            </div>
                        </div>
                    </div>
                    <div className="complete-course_container">
                        <h3>Course Completion Rate</h3>
                        <div className="complete-imgbx">
                            <img src={Group15} alt=""/>
                            <button>Average Success Rate</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default AdminBlog
