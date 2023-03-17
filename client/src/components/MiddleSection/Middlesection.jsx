import React from "react";
import { motion } from "framer-motion";

import "./Middlesection.css";
import image4 from "../../assets/img1.jpg";
import image5 from "../../assets/img2.jpg";
import image6 from "../../assets/img3.jfif";
import image7 from "../../assets/img4.jpg";

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

const Middlesection = () => {
  return (
    <motion.div>
      <div className="middle-section">
        <div className="container-fluid">
          <motion.div
            className="gallery"
            whileInView={{ y: [-100, 0], scale: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
            <img src={image7} alt="" />
          </motion.div>
          <hr />
          <div className="row shadow">
            <motion.div
              className=" col col-lg-12 "
              whileInView={{ y: [100, 0], scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: .5 }}
            >
              <div className="main-heading">
                <div className="flicker">
                  <h1>
                    <u>Why to choose E-commerce platform ?</u>
                  </h1>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col col-lg-12 size"
              whileInView={{ y: [100, 0] }}
              transition={{ duration: 1 }}
            >
              <div className="list">
                <ul typeof="circles">
                  <h4 className="list-head">INCREASED SALES</h4>
                  <li className="list-item">
                    24*7/365 availability of goods and unlimited customer reach
                    generate more sale. When you aren’t limited to the local
                    market or to physical store capacity, you automatically sell
                    more and can adjust your stock to your customers’ needs. You
                    can provide your services or sell goods abroad by adjusting
                    prices to the global market. By spending less of your budget
                    running a store and making more capital at the same time,
                    you can save a significant amount of money and expand your
                    business faster.
                  </li>

                  <h4 className="list-head">REDUCED OPERATIONAL EXPENSES</h4>
                  <li className="list-item">
                    E-commerce is the most economical way to grow your retail
                    business. It doesn’t require high levels of initial capital
                    and it’s very cost-effective. Most of the investment is
                    repaid by early sales profits.
                  </li>

                  <h4 className="list-head">
                    INCREASED AVAILABILITY OF PRODUCTS AND SERVICES
                  </h4>
                  <li className="list-item">
                    With products and services listed online, retailers have a
                    better chance to reach out their customers and promote their
                    businesses. Your products and services are constantly
                    visible as e-commerce platforms offer online listings and
                    price comparison. Moreover, you can serve those who couldn’t
                    find items locally and decided to turn to the internet to
                    source the product. As websites are visual, online stores
                    also give you limitless opportunities to present your items
                    in an aesthetically pleasing way and stand out from the
                    crowd.
                  </li>

                  <h4 className="list-head"> A BROADER RANGE OF CUSTOMERS</h4>
                  <li className="list-item">
                    There is no doubt that e-commerce platforms help sellers
                    reach buyers globally and sell their goods on the wider
                    market. You’re scaling the business globally and being
                    online means that you can sell to people all over the world.
                    There is no limit to whom and where you reach. Broadening
                    your business horizons not only earns you more money but
                    helps your business grow.
                  </li>

                  <h4 className="list-head">SIMPLIFIED BUYING PROCESS</h4>
                  <li className="list-item">
                    The most convenient aspect of e-commerce is that the
                    customer can purchase directly from you after searching for
                    an item online, without leaving home or interacting with a
                    salesperson. Consumers expect goods to be available
                    instantly, e-stores answer that needs. Because buying online
                    doesn’t require a visit to a retail store and products can
                    be shipped from any place in the world, consumers aren’t
                    limited to shops in their local vicinity and spend less time
                    shopping. That’s what makes e-commerce an attractive
                    alternative for them. As a retailer, you need to meet them
                    online and give them what they’re looking for.
                  </li>

                  <h4 className="list-head">AUTOMATION</h4>
                  <li className="list-item">
                    E-commerce platforms offer full automation, including
                    finance systems, inventory, shipping and customer service.
                    That means everything is in one place and can easily be
                    managed by one person at their convenience. Chatbots can
                    help you out with most enquiries and artificial intelligence
                    provides a personal touch into this communication. These
                    simple solutions give you more time to grow your business
                    and keep your customers happy at the same time, and all of
                    this without hiring additional team members.
                  </li>
                </ul>
              </div>
            </motion.div>
            <div className="animate"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Middlesection;
