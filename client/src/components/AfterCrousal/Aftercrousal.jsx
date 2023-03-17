import React from "react";
import "./Aftcarosl.css";
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

const Aftcarosl = () => {
  return (
    <motion.div
      whileInView={{ y: [100, -10], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="benefits">
        <p>
          The agriculture sector, currently valued at US$ 370 billion, is one of
          the major sectors in the Indian economy. According to the Economic
          Survey 2020-21, GDP contribution by the agriculture sector is likely
          to be 19.9% in 2020-21, increasing from 17.8% recorded in 2019-20.
          Over the years, the government has taken major steps to aid and
          enhance the agriculture sector with proven farming technologies and
          supportive policies. The recent evolution of digital technology in
          farming will further accelerate growth by ensuring higher crop yields
          and enhance sustainability by reducing water consumption and the use
          of agrochemicals. Digital technologies, such as artificial
          intelligence (AI) and machine learning (ML), remote sensing, big data,
          block chain and IoT, are transforming agricultural value chains and
          modernizing operations. While several countries, such as the
          Netherlands, the US, Australia and Israel, have successfully adopted
          and exploited digital solutions to revolutionise agriculture, their
          adoption in India is still in its infancy. The future adoption of
          digital agriculture in India is anticipated to nurture under the
          Public-Private Partnership (PPP) mode.
        </p>
      </div>
    </motion.div>
  );
};

export default Aftcarosl;
