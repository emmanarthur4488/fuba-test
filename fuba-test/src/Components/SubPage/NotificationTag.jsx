import React, {useRef} from "react";
import './notification.css'
import Group1 from '/src/IMG/group1.png'
import Group2 from '/src/IMG/group2.png'
import Group3 from '/src/IMG/group3.png'
import Group4 from '/src/IMG/group4.png'
import Group5 from '/src/IMG/group5.png'
import Group6 from '/src/IMG/group6.png'
import Gift from '/src/IMG/gift.png'
import Colorful from '/src/IMG/colorful.png'



function SliderTag() {
  const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
    if(tx > -55){
      tx -= 15;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = ()=>{
    if(tx < 0){
      tx += 15;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
    }
  
  return (
    <div className="slidercontainer">
      
      <div className="my_slider">
        <i className="fa-solid fa-circle-chevron-right" onClick={slideForward}></i>
        <i className="fa-solid fa-circle-chevron-left" onClick={slideBackward}></i>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="slide-container">
                  <img src={Group1} alt=""/>
                  <p>Philippa Ede</p>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="slide-container">
                  <img src={Group2} alt=""/>
                  <p>Joy Peters</p>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="slide-container">
                  <img src={Group3} alt=""/>
                  <p>John Kay</p>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="slide-container">
                  <img src={Group4} alt=""/>
                  <p>Jude Michael</p>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="slide-container">
                  <img src={Group5} alt=""/>
                  <p>Bola Ola</p>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="slide-container">
                  <img src={Group6} alt=""/>
                  <p>Add story</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="reward-container">
        <div className="reward-note">
          <p>Hello Philip,</p>
          <p>You have completed 60% of your courses this week!</p>
          <button>
            <p>Claim Reward</p>
            <img src={Gift} alt=""/>
          </button>
        </div>
        <div>
          <img src={Colorful} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default SliderTag;
