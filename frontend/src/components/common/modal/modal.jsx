import { React, useState, useEffect } from "react";
import "./style.css";

const Modal = ({ closeModal, info }) => {
  console.log(info);
  return (
    <div className="overlay">

    <div className="modalcontainer">
      <div className="modalcontent">
        <div className="close">
          <button onClick={closeModal}>x</button>
        </div>
        <div className="modalcontent-left">
          <div className="info-product-image">
            <img src={info.imgurl.main} alt="" />
          </div>
        
        </div>
        <div className="modalcontent-right">
        <div className="info-product-name">
            <h4>{info.name}</h4>
          </div>
          <div className="number-input">
            <input prefix="+91" name="number" type="tel" placeholder="Enter you number" />
            <label htmlFor="number">
              we will contact you soon on this number
            </label>
            <input type="submit" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Modal;
