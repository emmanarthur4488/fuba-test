import React, {useRef} from 'react'
import Check1 from '/src/IMG/check1.png'
import Check2 from '/src/IMG/check2.png'
import Check3 from '/src/IMG/check3.png'
import Star from '/src/IMG/star.png'
import Star1 from '/src/IMG/star1.png'
import Profile from '/src/IMG/profile.png'
import {useNavigate} from "react-router-dom"
import './sliding.css'

const Sliding = () => {
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

    let navigate = useNavigate()

    function courseslist(){
        navigate('/courseslist')
    }
  return (
    <div className="slidingcontainer">
        <i className="fa-solid fa-circle-chevron-right" onClick={slideForward}></i>
        <i className="fa-solid fa-circle-chevron-left" onClick={slideBackward}></i>
        <div className="sliders">
            <ul ref={slider}>
                <li>
                    <div className="slides" onClick={courseslist}>
                        <div className="user-info">
                            <div className="cardimgbx">
                                <img src={Check1} alt=""/>
                            </div>
                        </div>
                        <div className="user_container">
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
                </li>

                <li>
                    <div className="slides">
                        <div className="user-info">
                            <div className="cardimgbx">
                                <img src={Check2} alt=""/>
                            </div>
                        </div>
                        <div className="user_container">
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
                </li>

                <li>
                    <div className="slides">
                        <div className="user-info">
                            <div className="cardimgbx">
                                <img src={Check3} alt=""/>
                            </div>
                        </div>
                        <div className="user_container">
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
                </li>

                <li>
                    <div className="slides">
                        <div className="user-info">
                            <div className="cardimgbx">
                                <img src={Check1} alt=""/>
                            </div>
                        </div>
                        <div className="user_container">
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
                </li>

                <li>
                    <div className="slides">
                        <div className="user-info">
                            <div className="cardimgbx">
                                <img src={Check2} alt=""/>
                            </div>
                        </div>
                        <div className="user_container">
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
                </li> 

                <li>
                    <div className="slides">
                        <div className="user-info">
                            <div className="cardimgbx">
                                <img src={Check1} alt=""/>
                            </div>
                        </div>
                        <div className="user_container">
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
                            <h3 className="price">$30.00</h3>
                            <hr/>
                            <div className="modules">
                                <p>4 Modules</p>
                                <p>3 Hours</p>
                                <p>Beginner</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sliding
