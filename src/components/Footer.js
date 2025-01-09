import React from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="Firstfooterrow">
        <div className="insiderow">
          <div >
            <FontAwesomeIcon icon={faPhoneVolume} className="icon" />
          </div>
          <div>
            <p>Phone Number</p>
            <p>+91 9731125090, 9731125090 </p>
          </div>
        </div>

        <div className="insiderow">
          <div >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
          <div>
            <p>Email Address</p>
            <p>unitedbuildpro@gmail.com</p>
          </div>
        </div>

        <div className="insiderow">
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
          </div>
          <div>
            <p>Office Location</p>
            <p>#63/A, E Block, 2nd Stage, Dr.Rajkumar Road, Subramanya Nagar Bangalore-560010</p>
          </div>
        </div>
      </div>

      <div className="lastfooterrow">
        <div>
          <img src="/images/logo.png" alt="Elbrit Logo" className="logo" />
          <p>orporate clients and leisure travelers has
          been relying on Groundlink for dependable</p>
        </div>
        <div>
          <p><br /> <br /> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
