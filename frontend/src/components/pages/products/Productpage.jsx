import { React, useState, useEffect } from "react";
import "./productpage.css";
import products from "../../../assets/data/products.json";
import ProductCard from "../../common/productcard/ProductCard";

const Productpage = () => {
  return (
    <main className="productpage-container ">
      <h1 className="page-title">Our Products</h1>
      <div className="productpage-content">
        <div className="products">
          {products.map((e, index) => (
            <section className="products-container" key={index}>
              <ProductCard props={e} />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Productpage;
