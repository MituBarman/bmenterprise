import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const Home = () => {
  return (
    <>
      <section
        className="
    homepage-container"
      >
        <div className="homepage-content">
          <div className="headline">
            <span>
              <TypeAnimation sequence={["Upgrade Your Manufacturing: Explore Our Advanced Machinery Solutions",100]} cursor={false} speed={50}
              />
            </span>
            <span> </span>
          </div>
          <Link className="homepage-link" to={"/products"}>
            <h2>Explore</h2>
          </Link>
        </div>
      </section>
    </>
  );
};
