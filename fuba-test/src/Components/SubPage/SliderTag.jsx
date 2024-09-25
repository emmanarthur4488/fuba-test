import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from '/src/IMG/star.png'
import Star1 from '/src/IMG/star1.png'
import Profile from '/src/IMG/profile.png'
import Check1 from '/src/IMG/check1.png'
import Check2 from '/src/IMG/check2.png'
import Check3 from '/src/IMG/check3.png'
import {useNavigate} from "react-router-dom"

function SliderTag() {

  let navigate = useNavigate()

  function courseslist(){
    navigate('/courseslist')
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 3,
    arrow: true,
    centerPadding: '30px',
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className ="slider-card" onClick={courseslist}>
          <div className="card">
            <div className="card-imgbx">
              <img src={Check1} alt=""/>
              </div>
                <img className="profile-log" src={Profile} alt=""/>
              <div className="check-user">
              <p className="user-name">Patricia Paul</p>
              <h4 className="user-field">Preparing Your Portfolio</h4>
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
        </div>
        
        <div className ="slider-card" onClick={courseslist}>
          <div className="card">
              <div className="card-imgbx">
                <img src={Check2} alt=""/>
                </div>
                  <img className="profile-log" src={Profile} alt=""/>
                <div className="check-user">
                <p className="user-name">Philip Ola</p>
                <h4 className="user-field">Becoming a Developer</h4>
                <div className="star">
                  <img src={Star} alt=""/>
                  <img src={Star} alt=""/>
                  <img src={Star} alt=""/>
                  <img src={Star} alt=""/>
                  <img src={Star1} alt=""/>
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
        </div>

        <div className ="slider-card" onClick={courseslist}>
          <div className="card">
            <div className="card-imgbx">
              <img src={Check3} alt=""/>
              </div>
                <img className="profile-log" src={Profile} alt=""/>
              <div className="check-user">
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
        </div>

        <div className ="slider-card" onClick={courseslist}>
          <div className="card">
            <div className="card-imgbx">
              <img src={Check1} alt=""/>
              </div>
                <img className="profile-log" src={Profile} alt=""/>
              <div className="check-user">
              <p className="user-name">Philip Ola</p>
              <h4 className="user-field">Becoming a Developer</h4>
              <div className="star">
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star1} alt=""/>
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
        </div>

        <div className ="slider-card" onClick={courseslist}>
          <div className="card">
            <div className="card-imgbx">
              <img src={Check2} alt=""/>
              </div>
                <img className="profile-log" src={Profile} alt=""/>
              <div className="check-user">
              <p className="user-name">Patricia Paul</p>
              <h4 className="user-field">Preparing Your Portfolio</h4>
              <div className="star">
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star1} alt=""/>
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
        </div>

        <div className ="slider-card" onClick={courseslist}>
          <div className="card">
            <div className="card-imgbx">
              <img src={Check3} alt=""/>
              </div>
                <img className="profile-log" src={Profile} alt=""/>
              <div className="check-user">
              <p className="user-name">John Wick</p>
              <h4 className="user-field">Proposal Writing</h4>
              <div className="star">
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star} alt=""/>
                <img src={Star1} alt=""/>
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
        </div>
      </Slider>
    </div>
  );
}

export default SliderTag;
