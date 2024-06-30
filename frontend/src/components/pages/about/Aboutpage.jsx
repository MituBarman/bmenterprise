import React from "react";
import "./style.css";
const About = () => {
  return (
    <main className="About-page-container">
      <div className="page-title">About Us</div>
      <div className="About-page-content">
        <div className="about-left">
          <iframe
            width="100%"
            height="400"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=27.26898877839168,%2094.12755487450325+(Bm%20Enterprise)&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
        
      </div>
    </main>
  );
};

export default About;
