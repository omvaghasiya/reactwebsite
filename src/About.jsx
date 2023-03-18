import React from "react";
import web from "../src/wallpaper/699287.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome To About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
