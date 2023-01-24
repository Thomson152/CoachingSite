/** @format */

import React from "react";
import Typewriter from "typewriter-effect";
import "./Navbar.css";
import './Home.css'


const Home = () => {
  return (
    <div className="background" id ="home">
      <section className="typewriter-container">
        <div className="typewriter">
          <h1>
            I'm Professional
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                // wrapperClassName:'typed-wrapper'
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Business Speakers")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Life Coach")
                  .pauseFor(2500)
                  .start();
              }}
            />
          </h1>
        </div>

        <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
        <a className="btn">Contact Me</a>
      </section>
     
    </div>
  );
};

export default Home;
