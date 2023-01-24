/** @format */

import React, { useState } from "react";
import { Cancel, Menu } from "@material-ui/icons";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const changeBcakground = () => {
    if (window.scrollY > 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBcakground);
  return (
    <>
      
        <nav className={navbar ? "nav active" : "nav"}>
          <div className="logo">
            <a className={navbar ? "active" : "a"} href="Coaching">
              Coaching <span className={navbar ? "active" : "a"}>.</span>
            </a>
          </div>

          <div className={navbar ? "active" : "icons"} onClick={handleClick}>
            {open ? "" : <Menu />}
          </div>

          <div className="nav-container">
            <ul className={`${open ? "nav-links actives" : "nav-links"}`}>
              <div className={navbar ? "cancel" : "cancelActive"} onClick={handleClick}>
                <Cancel    />
              </div>
              <li className="nav-item">
                <a className={navbar ? "active" : "a"} href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={navbar ? "active" : "a"} href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={navbar ? "active" : "a"} href="#training">
                  Our Training
                </a>
              </li>
              <li className="nav-item">
                <a className={navbar ? "active" : "a"} href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className={navbar ? "active" : "a"} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
  
    </>
  );
};

export default Navbar;
