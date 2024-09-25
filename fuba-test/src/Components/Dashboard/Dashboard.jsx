import React from 'react'
import Upload from '/src/IMG/upload.png'
import Upload1 from '/src/IMG/upload1.png'
import Payments from '/src/IMG/payments.png'
import AccountStudent from '/src/IMG/account-student.png'
import Noti from '/src/IMG/noti.png'
import Ellipse from '/src/IMG/ellipse.png'
import Tutor from '/src/IMG/tutor.png'
import Delete from '/src/IMG/mi_delete.png'
import Delete1 from '/src/IMG/mi_delete1.png'
import './dashboard.css'
import Mydashboard from '../Mydashboard/Mydashboard'
import SideNav from '../Side-Nav/SideNav'

const Dashboard = () => {
  return (
    <div className="my_dash_dash">
        <div className="side">
            <SideNav/>
        </div>
        <div className="my-dashboard">
            <div  className="dashboard_nav">
                <div className="dash-nav">
                    <div>
                        <h2>Dashboard</h2>
                    </div>
                    <div className="upload">
                        <img src={Upload} alt=""/>
                        <p>Upload Video</p>
                    </div>
                </div>

                <div className="noti">
                    <img className="noti-bell" src={Noti} alt=""/>
                    <img className="ellipse" src={Ellipse} alt=""/>
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

            <div className="student-upload_container">
                <div className="student-upload">
                    <img src={Upload1} alt=""/>
                    <h2>Uploads</h2>
                    <p>Nine (9)</p>
                </div>

                <div className="student-upload">
                    <img src={AccountStudent} alt=""/>
                    <h2>Active Students</h2>
                    <p>Twenty five (25)</p>
                </div>

                <div className="student-upload">
                    <img src={Payments} alt=""/>
                    <h2>Total Earnings</h2>
                    <p>200k ($)</p>
                </div>
            </div>

            <div className="dash-main_container">
                <Mydashboard/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
