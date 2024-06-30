import { React, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../Table/table";
import "./style.css";
import Modal from "../modal/modal";
const ProductCard = ({ props }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';


  };
  return (
    <div className="productcard-container">
      <div className="productcard-product-name">
        <p>{props.productdeails.name}</p>
      </div>
      <hr />
      <div className="productcard-content">
        <div className="productcard-product-image">
          <img src={props.productdeails.imgurl.main} alt={props.productdeails.name} />
        </div>
        <div className="productcard-product-details">
          <div className="productcard-product-price">
            <p>{`₹${props.productdeails.price}`}</p>
          </div>
          <div className="description">
            <p>{props.productdeails.description}</p>
          </div>
          <Link to={"/contact"}></Link>

          <Table data={props.productspecifications} />
          <div className="quote-btn">
            <button className="quote-btn" onClick={openModal}>
              Get quote
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal closeModal={closeModal} info={props.productdeails} />
      )}
    </div>
  );
};

export default ProductCard;
