import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

export const Home = () => {
  return (
    <main className="homepage-container">
      <section
        className="
     homepage-content"
      >
          <div className="headline">
            <ReactTyped
              strings={[
                "Upgrade Your Manufacturing: Explore Our Advanced Machinery Solutions",
              ]}
              typeSpeed={20}
              showCursor={false}
            />
            {/* <p>Upgrade Your Manufacturing: Explore Our Advanced Machinery Solutions</p> */}
          </div>
          <Link className="homepage-link" to={"/products"}>
            <h2>Explore</h2>
          </Link>
      </section>
    </main>
  );
};
