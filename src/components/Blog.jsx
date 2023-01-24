/** @format */

import React, { useEffect } from "react";
import "./Blog.css";
import AOS from 'aos';
import "aos/dist/aos.css";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
const Blog = () => {

  useEffect(() => {
        AOS.init({
          duration:600,
      
        });
   
  }, []);
  return (
    <>
      <div className="blog"  id ="blog" >
        <h2 data-aos ="fade-up" >Our Blog</h2>
       
        <p  data-aos ="fade-up">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est
          odio voluptates dolorum, voluptatibus, at totam consequuntur quaerat
          ab, quod deserunt vero.
        </p>
        
     

        <div className="row1" >
          <div className="col1" data-aos ="fade-up">
            <img src={image3} alt="" />

            <div className="schooling">
              <div className="better">
                <h4>Coaching better than Schooling </h4>
              </div>
              <div className="date">
                <h6>April 17,2019</h6>
              </div>
              <div className="paragra">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates similique iusto reprehenderit quam eaque cupiditate
                  neque in, aut amet deleniti? Minus,dolor sit amet consectetur
                  adipisicing elit. vitae?
                </p>
              </div>
            </div>
          </div>
          <div className="col2" data-aos ="fade-up">
            <img src={image1} alt="" />
            <div className="schooling">
              <div className="better">
                <h4>Coaching better than Schooling </h4>
              </div>
              <div className="date">
                <h6>April 17,2019</h6>
              </div>
              <div className="paragra">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates similique iusto reprehenderit quam eaque cupiditate
                  neque in, aut amet deleniti? Minus,Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. vitae?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row2"  data-aos ="fade-up">
          <div className="col1" data-aos ="fade-up">
            <img src={image2} alt="" />

            <div className="schooling">
              <div className="better">
                <h4>Coaching better than Schooling </h4>
              </div>
              <div className="date">
                <h6>April 17,2019</h6>
              </div>
              <div className="paragra">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates similique iusto reprehenderit quam eaque cupiditate
                  neque in, aut amet deleniti? Minus,dolor sit amet consectetur
                  adipisicing elit. vitae?
                </p>
              </div>
            </div>
          </div>
          <div className="col2" data-aos ="fade-up">
            <img src={image3} alt="" />
            <div className="schooling">
              <div className="better">
                <h4>Coaching better than Schooling </h4>
              </div>
              <div className="date">
                <h6>April 17,2019</h6>
              </div>
              <div className="paragra">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates similique iusto reprehenderit quam eaque cupiditate
                  neque in, aut amet deleniti? Minus,Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. vitae?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
