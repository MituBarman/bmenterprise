import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "./prenavbar.css";
const Prenavbar = () => {
  return (
    <div className="prenavbar">
      <div className="prenav-element">
        <FaEnvelope color="white" size={"14px"} />
        <a className="subtitles" href="mailto:satyaborah2000@gmail.com">
          satyaborah2000@gmail.com
        </a>
      </div>
      <div className="prenav-element">
        <FaPhone color="white" size={"14px"} />
        <a className="subtitles" href="tel:+9181350 55960">
          +91-8135055960
        </a>
      </div>
    </div>
  );
};

export default Prenavbar;
