import React from "react";
import "./style.css";
const Contactpage = () => {
  return (
    <main className="Contactpage-container">
      <div className="page-title">Contact Us</div>
      <div className="Contactpage-content">
        <div className="left"></div>
        <div className="right">
          <form action="">
            <div className="name group">
              <label className="label" for="name">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="email group">
              <label className="label" for="email">
                Email Address
              </label>
              <input
                type="email"
                className="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="message group">
              <label className="label" for="#">
                Message
              </label>
              <textarea
                name="c"
                className="message"
                id="message"
                cols="30"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <input type="submit" name="sumbit" value={"Send Message"} id="" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contactpage;
