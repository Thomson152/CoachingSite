/** @format */

import React from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Slider1 from "./components/Slider1";
import Training from "./components/Training";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Slider1 />
      <About />
      <Training />
      <Blog />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
