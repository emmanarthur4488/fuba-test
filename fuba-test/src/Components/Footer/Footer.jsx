import React from 'react'
import FooterBackground from '/src/IMG/footer-background.png'
import FooterLogo from '/src/IMG/Fuba-Logo1.png'
import Facebook from '/src/IMG/facebook.png'
import Instagram from '/src/IMG/instagram.png'
import Twitter from '/src/IMG/twitter.png'
import CopyRight from '../CopyRight/CopyRight'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img className="footer-img" src={FooterBackground} alt=""/>
        <h4>Subscribe To Our Newsletter</h4>
        <p className="update">Stay updated on latest news</p>
        <div className="input">
          <input type="email" placeholder="Enter your email"/>
          <button>Send</button>
        </div>

        <div className="main-footer">
          <div>
            <img className="footer-logo" src={FooterLogo} alt=""/>
          </div>
          <div className="footer-links">
            <div className="footer-link">
              <h3>Get in touch</h3>
              <p>Address:</p>
              <p>55, Thailand Street, Daha, Abuja , Nigeria.</p>
            </div>

            <div className="footer-link">
              <h3>Get in touch</h3>
              <p>Email:</p>
              <p>Futurebuildersagency@gmail.com</p>
            </div>

            <div className="footer-link">
              <h3>Get in touch</h3>
              <p>Phone:</p>
              <p>+234 901 842 9887</p>
            </div>
          </div>

          <div className="footer-icon">
            <h3>Fellow Us</h3>
            <div className="footer-icons">
              <img src={Instagram} alt=""/>
              <img src={Twitter} alt=""/>
              <img src={Facebook} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <CopyRight/>
    </div>
  )
}

export default Footer
