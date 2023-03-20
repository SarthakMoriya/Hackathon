import React from "react";
import "./Carousal.css";
import picture from "../../assets/img2.jpg";
import picture2 from "../../assets/img1.jpg";
import picture3 from "../../assets/img4.jpg";
import { motion } from "framer-motion";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Carousal = () => {
  return (
    <motion.div
      className="Carousal-main"
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="carousel-heading"
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <h1 style={{ textTransform: "uppercase",  }}>
          News Of The Day
        </h1>
      </motion.div>
      <div
        id="carouselExampleInterval"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2600">
            <img src={picture} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2600">
            <img src={picture2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2600">
            <img src={picture3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Carousal;
