import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Aftnav from "../../components/Afternav/Aftnav";
import Middlesection from "../../components/MiddleSection/Middlesection";
import Carousal from "../../components/Carousal/Carousal";
import AfterCarousal from '../../components/AfterCrousal/Aftercrousal'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Aftnav/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Middlesection/>
      <Carousal/>
      <AfterCarousal/>
    </div>
  );
};

export default Home;
