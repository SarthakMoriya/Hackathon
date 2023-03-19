import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOrders } from "../../state";

import Navbar from "../../components/Navbar/Navbar";
import Aftnav from "../../components/Afternav/Aftnav";
import Middlesection from "../../components/MiddleSection/Middlesection";
import Carousal from "../../components/Carousal/Carousal";
import AfterCarousal from "../../components/AfterCrousal/Aftercrousal";
import Footer from '../../components/Footer/Footer'
const Home = () => {

  return (
    <div>
      <Navbar />
      <Aftnav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Middlesection />
      <Carousal />
      <AfterCarousal />
      <Footer/>
    </div>
  );
};

export default Home;
