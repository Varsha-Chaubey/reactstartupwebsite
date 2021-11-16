import React from "react";
import Images from "../src/images/landingpage.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to our family. Here you all go.. "
        image={Images}
        visit="/contact"
        btnname="Contact now"
      />
    </>
  );
};
export default About;
