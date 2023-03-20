import React from "react";
import "./Aftnav2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import image8 from "../../assets/main.png";

const Aftnav = () => {
  return (
    <motion.div
      style={{ height: "85vh" }}
      // initial={{ opacity: 0 }}
      // animate={{ x: [-1000, 0],opacity:1 }}
      // transition={{
      //   ease: "linear",
      //   type: "spring",
      //   stiffness: 200,
      //   duration: 5,
      // }}
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="aftnav" style={{ height: "80vh" }}>
        <div className="container-fluid">
          <div className="row aftnav-section">
            <div className=" col col-lg-6 col-sm-12 animate-charcter p-2 ">
              <h2 style={{ paddingLeft: "4%", paddingTop: "8%" }}>
                How To build An E-Commerce Organic Platform That Links Farmers
                Directly To The Buyers ?
              </h2>
            </div>
            <div className="col col-lg-6 col-sm-12  ">
              <img src={image8} alt="" className="aftnav-img" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </motion.div>
  );
};

export default Aftnav;
