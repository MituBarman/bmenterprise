import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../logo/logo";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { BurgerClose as Icon } from "react-icons-animated";

function Navbar() {
  const [menutoogle, setmenutoggle] = useState(false);

  return (
    <>
      <nav className="nav">
        <Link to={"/"}>
          <Logo width={"80px"} color={"white"} />
        </Link>

 
        <ul className={menutoogle ? "navlinks open" : "navlinks"}>

          <NavLink
            className="navlink"
            to={"/home"}
            onClick={() => {
              setmenutoggle(!menutoogle);
            }}
          >
            Home
          </NavLink>
          <NavLink
            className="navlink"
            to={"/products"}
            onClick={() => {
              setmenutoggle(!menutoogle);
            }}
          >
            Product
          </NavLink>
          <NavLink
            className="navlink"
            to={"/contact"}
            onClick={() => {
              setmenutoggle(!menutoogle);
            }}
          >
            Contact
          </NavLink>{" "}
          <NavLink
            className="navlink"
            to={"/about"}
            onClick={() => {
              setmenutoggle(!menutoogle);
            }}
          >
            About
          </NavLink>
        </ul>
        <div
          className="menu"
          onClick={() => {
            setmenutoggle(!menutoogle);
          }}
        >
          <Icon isClosed={menutoogle} />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
