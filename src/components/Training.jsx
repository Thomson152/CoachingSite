/** @format */

import React from "react";
import "./Training.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image1 from "../images/1.jpg";
import Image2 from "../images/2.jpg";
import Image3 from "../images/3.jpg";

const Training = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,

      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="training" id="training">
      <h2> Life Coach Training</h2>
      <div className="life">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          labore sed consectetur nihil. Quibusdam incidunt explicabo omnis
          nihil. Fugiat quod aliquid deleniti ducimus
        </p>
      </div>

       <div className="training-carousel">
        <Carousel responsive={responsive} swipeable={true} draggable={true}>
          <div className="card">
            <img src={Image1} />

            <h2>Realese Your Potential</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              eum velit alias facilis dolore saepe, ratione quod ad illum
            </p>
          </div>

          <div className="card">
            <img src={Image2} />

            <h2>Life Coaching</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              eum velit alias facilis dolore saepe, ratione quod ad illum
            </p>
          </div>
          <div className="card">
            <img src={Image3} />

            <h2>Transforming Lives</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              eum velit alias facilis dolore saepe, ratione quod ad illum
            </p>
          </div>
          <div className="card">
            <img src={Image1} />

            <h2>Life Coaching Training</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              eum velit alias facilis dolore saepe, ratione quod ad illum
            </p>
          </div>
          <div className="card">
            <img src={Image2} />

            <h2>Life Coaching</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              eum velit alias facilis dolore saepe, ratione quod ad illum
            </p>
          </div>
          <div className="card">
            <img src={Image3} />

            <h2>Transforming Lives</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              eum velit alias facilis dolore saepe, ratione quod ad illum
            </p>
          </div>
        </Carousel>
      </div> 
    </div>
  );
};

export default Training;
