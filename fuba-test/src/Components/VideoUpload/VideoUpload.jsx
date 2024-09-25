import React, {useState} from 'react'
import './videoupload.css'
import Fubalogo from '/src/IMG/fuba-logo.png'
import Tutor from '/src/IMG/tutor.png'
import Noti from '/src/IMG/noti.png'
import Group16 from '/src/IMG/group16.png'
import UploadCraw from '/src/IMG/upload-filled.png'
import Checkbox from '/src/IMG/checkbox.png'

const VideoUpload = () => {

  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No selected file")

  
  return (
    <div>
      <div>
          <div className="video-nav">
            <div>
              <img className="video-logo" src={Fubalogo} alt=""/>
            </div>
            <div className="upload-note">
              <p>Video Upload</p>
            </div>
            <div className="video-noti_container">
                <img className="video-notification" src={Noti} alt=""/>
                <div className="video-tutor_container">
                    <img className="video-tutor" src={Tutor} alt=""/>
                    <div>
                        <p className="phil">Daniel Phil</p>
                        <p className="tutorr">Tutor</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="video-main">
            <div className="video_thumbnail">
              <div>
                <h3>Video thumbnail</h3>
                <img className="my-thumbnail" src={Group16} alt=""/>
                <div className="check_check">
                  <button>Project Category</button>
                  <div>
                    <div className="check_container">
                      <div className="check-inner">
                        <img src={Checkbox} alt=""/>
                        <p>Freelance</p>
                      </div>
                      <div className="check-inner">
                        <input type="checkbox" name="" id=""/>
                        <p>Blockchain</p>
                      </div>
                    </div>

                    <div className="check_container">
                      <div className="check-inner">
                        <input type="checkbox" name="" id=""/>
                        <p>Development</p>
                      </div>
                      <div className="check-inner">
                        <input type="checkbox" name="" id=""/>
                        <p>Design</p>
                      </div>
                    </div>
                    <div className="check_container">
                      <div className="check-inner">
                        <input type="checkbox" name="" id=""/>
                        <p>Featured</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="upload_container">
              <div className="upload_dashing">
                <div className="uploadheader">
                  <h4>Upload video</h4>
                  <p>Upload video you want to <br/> share with learners</p>
                </div>
                <div className="upload-dash">
                  <img src={UploadCraw} alt=""/>
                  <p>Drag and drop file here</p>
                </div>
                <div className="upload-btn">
                  <button>Browse File</button>
                </div>
              </div>
              <div className="upload-input">
                <label htmlFor="video title">Video title:</label><br/>
                <input type="text"/>
                <label htmlFor="course description">Course Description:</label><br/>
                <input type="text"/>
              </div>
              <div className="done">
                <button>Done</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default VideoUpload
