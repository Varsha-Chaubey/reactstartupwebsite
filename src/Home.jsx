import React from "react";
import Images from "../src/images/hlanding.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your mind and skills with"
        image={Images}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};
export default Home;
