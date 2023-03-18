import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/wallpaper/21599.jpg";
import Common from "./Common";

const Home = () => {
  // console.log(web);
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/about"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
