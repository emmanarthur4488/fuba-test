import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import LoginTutor from './Components/Pages/LoginTutor'
import SignupTutor from './Components/Pages/SignupTutor'
import LoginLearner from './Components/Pages/LoginLearner'
import SignupLearner from './Components/Pages/SignupLearner'
import LandingPage from './Components/LandingPage/LandingPage'
import Footer from './Components/Footer/Footer'
import CopyRight from './Components/CopyRight/CopyRight'
import Buuton from './Components/SubPage/Button'
import SliderTag from './Components/SubPage/SliderTag'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Courses from './Components/Courses/Courses'
import ProgramTag from './Components/ProgramTag/ProgramTag'
import CoursesList from './Components/CoursesList/CoursesList'
import MyCourse from './Components/MyCourse/MyCourse'
import Dashboard from './Components/Dashboard/Dashboard'
import Mydashboard from './Components/Mydashboard/Mydashboard'
import SideNav from './Components/Side-Nav/SideNav'
import StudentDashboard from './Components/StudentDashboard/StudentDashboard'
import NotificatonTag from './Components/SubPage/NotificationTag'
import Sliding from './Components/SubPage/Sliding'
import SignupRight from './Components/Pages/SignupContainer/SignupRight'
import Signupphone from './Components/Pages/SignupContainer/Signupphone'
import SignupTutorphone from './Components/Pages/SignupContainer/SignupTutorphone'
import LoginTutorphone from './Components/Pages/LoginTutorphone'
import TutorDashboard from './Components/TutorDashboard/TutorDashboard'
import AdminBlog from './Components/AdminBlog/AdminBlog'
import VideoUplaod from './Components/VideoUpload/VideoUpload'
import Landnav from './Components/LandNav/Landnav'
import Coursesnav from './Components/CoursesNav/Coursesnav'
import CoureselistNav from './Components/CourseslistNav/CoureselistNav'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logintutor' element={<LoginTutor/>}/>
        <Route path='/signuptutor' element={<SignupTutor/>}/>
        <Route path='/loginlearner' element={<LoginLearner/>}/>
        <Route path='/signuplearner' element={<SignupLearner/>}/>
        <Route path='/landingpage' element={<LandingPage/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courseslist' element={<CoursesList/>}/>
        <Route path='/mycourse' element={<MyCourse/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/studentdashboard' element={<StudentDashboard/>}/>
        <Route path='/notificatontag' element={<NotificatonTag/>}/>
        <Route path='/sliding' element={<Sliding/>}/>
        <Route path='/tutordashboard' element={<TutorDashboard/>}/>
        <Route path='/adminblog' element={<AdminBlog/>}/>
        <Route path='/videouplaod' element={<VideoUplaod/>}/>
        <Route path='/coureselistnav' element={<CoureselistNav/>}/>
      </Routes>
        
      </BrowserRouter>
  );
}

export default App;
