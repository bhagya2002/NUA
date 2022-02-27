import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  // hamburger menu
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  //   when click then toggle the state to opposite
  const handleClick = () => setClick(!click);

  // navbar
  return (
    <>
      <IconContext.Provider value={{ color: "#1c2237" }}>
        <div className="navbar">
          <div className="navbar-container container">
            {/* <a> tag but using React router */}
            <Link
              to="/"
              className="navbar-logo navbar-title"
              onClick={closeMobileMenu}
            >
              <img
                src="img/nua_logo.png"
                alt="logo"
                className="navbar-logo-img"
              />
              {/* icon for title */}
              {/* <GiHealthNormal className="navbar-icon" /> */}
              NUA
            </Link>

            {/* the nav burger */}
            <div className="menu-icon" onClick={handleClick}>
              {/* depending on the screen size determine the navbar burger or not */}
              {click ? <FaTimes /> : <FaBars />}
            </div>

            {/* list in navbar, classes depend on the active or not */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/about-us"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/get-involved"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Get Involved
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/awards-scholarships"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Awards/Scholarships
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cnsa"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  CNSA
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/mentorship"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Mentorship
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/partnerships"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Partnerships
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/council"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Council
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/subgroups"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Subgroups
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
