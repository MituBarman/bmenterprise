import { React } from "react";
import "./Footer.css";

import { FaFacebook, FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="f-container ">
          <div className=" f-component-card">
            <FaLocationDot color="white" size={"30"} />
            <div className="title">Our Office</div>
            <p className="subtitle">
              choraimoria,
              787032. North Lakhimpur,Assam,India.
            </p>
          </div>
          <div className=" f-component-card">
            <div className="logo">
              <FaEnvelope color="white" size={"30"} />
            </div>

            <div className="title">Email Us {}</div>
            <a className="subtitle" href="mailto:satyaborah200@gmail.com">
              satyaborah2000@gmail.com
            </a>
          </div>
          <div className=" f-component-card">
            <FaPhone color="white" size={"30"} />
            <div className="title">Call Us</div>
            <a className="subtitle" href="tel:+919876543210">
              +919876543210
            </a>
          </div>
        </div>
        <div className="social-links">
          <FaFacebook size= {"40"} color="white" />
          <FaWhatsapp size= {"40"} color="white" />
          <FaInstagram size={"40"} color="white" />
        </div>

        <div className="cpyrght">
          <p> Copyright &copy; 2024 BM Enterprise. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
