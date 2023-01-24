/** @format */

import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div className="footerbg">
      <div  className="footer">
        <div className="abou">
          <h4>About Coaching</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            excepturi odit a molestias atque nihil non necessitatibus eum
            temporibus.
          </p>
        </div>

        <div className="lin">
          <h4>Quick Links</h4>
          <ul className ="quick">
            <li>
              <a href="#">About us</a>
            </li>

            <li>
              <a href="#">Our Training</a>
            </li>

            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </div>

          <div className="news">
            <h4>Subscribe Newsletter</h4>
            <input placeholder="Enter Email" />
          </div>
        </div>
      </div>
      <hr/>

      <div className="copy">
      <h6 >Copywrite &#169; 2023 All rigth reserved  </h6>
      </div>
    </div>
  );
};

export default Footer;
