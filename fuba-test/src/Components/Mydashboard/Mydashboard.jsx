import React from 'react'
import './mydashboard.css'
import Delete from '/src/IMG/mi_delete.png'
import Delete1 from '/src/IMG/mi_delete1.png'
import MaskRated1 from '/src/IMG/mask-rated.png'
import MaskRated2 from '/src/IMG/mask-rated2.png'
import Star from '/src/IMG/star.png'
import Star1 from '/src/IMG/star1.png'

const Mydashboard = () => {
  return (
    <div>
        <div className="dashcourse">
            <p>Course</p>
            <p>Modules</p>
            <p>Status</p>
            <p>Manage</p>
        </div>
      <div className="mydash-container">
        <div className="dash-left">

            <div className="dash_chart1">
                <div className="chart">
                    <h2>Becoming a freelancer</h2>
                    <p>Freelance</p>
                </div>

                <div className="chart">
                    <h2>Five(5)</h2>
                    <p>Full course</p>
                </div>

                <div className="chart">
                    <h2>Uploaded</h2>
                    <p>1 hour</p>
                </div>

                <div className="chart">
                    <img src={Delete} alt=""/>
                </div>
            </div>

            <div className="dash_chart1">
                <div className="chart">
                    <h2>Proposal writing</h2>
                    <p>Freelance</p>
                </div>

                <div className="chart">
                    <h2>Three (3)</h2>
                    <p>Full course</p>
                </div>

                <div className="chart">
                    <h2>Uploaded</h2>
                    <p>2 hour</p>
                </div>

                <div className="chart">
                    <img src={Delete1} alt=""/>
                </div>
            </div>

            <div className="dash_chart1">
                <div className="chart">
                    <h2>Proposal writing</h2>
                    <p>Freelance</p>
                </div>

                <div className="chart">
                    <h2>Three (3)</h2>
                    <p>Full course</p>
                </div>

                <div className="chart">
                    <h2>Uploaded</h2>
                    <p>1 Week</p>
                </div>

                <div className="chart">
                    <img src={Delete1} alt=""/>
                </div>
            </div>

            <div className="dash_chart1">
                <div className="chart">
                    <h2>Blockchain Expertise</h2>
                    <p>Development</p>
                </div>

                <div className="chart">
                    <h2>Two (2)</h2>
                    <p>Full course</p>
                </div>

                <div className="chart">
                    <h2>Uploaded</h2>
                    <p>2 Weeks</p>
                </div>

                <div className="chart">
                    <img src={Delete1} alt=""/>
                </div>
            </div>

            <div className="dash_chart1">
                <div className="chart">
                    <h2>Becoming a freelancer</h2>
                    <p>Freelance</p>
                </div>

                <div className="chart">
                    <h2>Five (5)</h2>
                    <p>Full course</p>
                </div>

                <div className="chart">
                    <h2>Uploaded</h2>
                    <p>2 Weeks</p>
                </div>

                <div className="chart">
                    <img src={Delete1} alt=""/>
                </div>
            </div>

            <div className="dash_chart1">
                <div className="chart">
                    <h2>Becoming a freelancer</h2>
                    <p>Freelance</p>
                </div>

                <div className="chart">
                    <h2>Three (3)</h2>
                    <p>Full course</p>
                </div>

                <div className="chart">
                    <h2>Uploaded</h2>
                    <p>2 Months</p>
                </div>

                <div className="chart">
                    <img src={Delete1} alt=""/>
                </div>
            </div>
        </div>
        <div className="dash-right">
            <div className="rated-container">
                <h2>Top Rated</h2>
                <p>(Last month)</p>
            </div>

            <div>
                <div className="rated-sub">
                    <div>
                        <img src={MaskRated1} alt=""/>
                    </div>
                    <div className="rated-sub_div">
                        <h2>Becoming a <br/> freelancer</h2>
                        <div className="lancer">
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <p>(5)</p>
                        </div>
                    </div>
                </div>

                <div className="rated-sub">
                    <div>
                        <img src={MaskRated2} alt=""/>
                    </div>
                    <div className="rated-sub_div">
                        <h2>Becoming a <br/> freelancer</h2>
                        <div className="lancer">
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star1} alt=""/>
                            <p>(4)</p>
                        </div>
                    </div>
                </div>

                <div className="rated-sub">
                    <div>
                        <img src={MaskRated1} alt=""/>
                    </div>
                    <div className="rated-sub_div">
                        <h2>Becoming a <br/> freelancer</h2>
                        <div className="lancer">
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <p>(5)</p>
                        </div>
                    </div>
                </div>

                <div className="rated-sub">
                    <div>
                        <img src={MaskRated2} alt=""/>
                    </div>
                    <div className="rated-sub_div">
                        <h2>Becoming a <br/> freelancer</h2>
                        <div className="lancer">
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <p>(5)</p>
                        </div>
                    </div>
                </div>

                <div className="rated-sub">
                    <div>
                        <img src={MaskRated1} alt=""/>
                    </div>
                    <div className="rated-sub_div">
                        <h2>Becoming a <br/> freelancer</h2>
                        <div className="lancer">
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <img src={Star} alt=""/>
                            <p>(5)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mydashboard
