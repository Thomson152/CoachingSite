/** @format */

import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact" id ="contact">
      <h3>Contact Me</h3>

      <div className="address">
        <div className="view">
          <h4>Address</h4>
          <p>
            {" "}
            305 Fake St. Montain View, San Francisco,
            <br /> Califonia USA
          </p>
        </div>

        <div className="phone">
          <h4>Phone</h4>
          <p>+1 232 3235 324</p>
        </div>

        <div className="email">
          <h4>Email Address</h4>
          <p>youremail@domain.com</p>
        </div>
      </div>

      <div className="input">
        <div className="name">
          <input placeholder="First name" className="firstname" />
          <input placeholder="Last name" />
        </div>

        <div className="ema">
          <input placeholder="Email address" />
        </div>

        <div className="text">
          <textarea placeholder="write your message" />
        </div>
      </div>
      <div className="bt">
      <a href="#"  className="btnn" > send Message</a>

      </div>
    </div>
  );
};

export default Contact;
