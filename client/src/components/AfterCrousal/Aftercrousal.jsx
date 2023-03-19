import React from "react";
import "./Aftcarosl.css";
import { motion } from "framer-motion";
import flowchart from "../../assets/flowchart.png";

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
        <motion.p
          whileInView={{ y: [100, -10], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          The agriculture sector, currently valued at US$ 370 billion, is one of
          the major sectors in the <a href="">Indian economy</a>. According to
          the <a href="">Economic Survey 2020-21</a>, GDP contribution by the
          agriculture sector is likely to be 19.9% in 2020-21, increasing from
          17.8% recorded in 2019-20. Over the years, the government has taken
          major steps to aid and enhance the agriculture sector with proven
          farming technologies and supportive policies. The recent evolution of
          digital technology in farming will further accelerate growth by
          ensuring higher crop yields and enhance sustainability by reducing
          water consumption and the use of agrochemicals. Digital technologies,
          such as artificial intelligence (AI) and machine learning (ML), remote
          sensing, big data, block chain and IoT, are transforming agricultural
          value chains and modernizing operations. While several countries, such
          as the Netherlands, the US, Australia and Israel, have successfully
          adopted and exploited digital solutions to revolutionise agriculture,
          their adoption in India is still in its infancy. The future adoption
          of digital agriculture in India is anticipated to nurture under the
          Public-Private Partnership (PPP) mode.
        </motion.p>
        <motion.h2
          initial={{ border: "0px solid black" }}
          whileInView={{ y: [100, 0], scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          Current Initiatives under Digital Agriculture in India
        </motion.h2>
        <div className="initiatives">
          <motion.p
            whileInView={{ y: [100, -10], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileInView={{ y: [100, -10], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              The demand for digitisation in Indian agriculture is well
              understood and acknowledged, likewise efforts have also been made
              towards digitising the prevailing value chain.
            </motion.div>
            <br />
            <motion.div
              whileInView={{ y: [100, -10], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              In September 2021, the Union Minister of Agriculture & Farmers
              Welfare, Mr. Narendra Singh Tomar, announced the initiation of the
              Digital Agriculture Mission 2021–2025, while signing five
              memorandum of understandings (MoUs) with CISCO, Ninjacart, Jio
              Platforms Limited, ITC Limited and NCDEX e-Markets Limited (NeML),
              to forward digital agriculture through pilot projects. The Digital
              Agriculture Mission 2021–2025 aims to support and accelerate
              projects based on new technologies, like AI, block chain, remote
              sensing and GIS technology and use of drones and robots.
            </motion.div>
            <br />
            <motion.div
              whileInView={{ y: [100, -10], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              Cisco developed an Agricultural Digital Infrastructure (ADI)
              solution in August 2019, that enhances farming and knowledge
              sharing. This ADI is likely to play a vital role in the data pool
              that will be created by the Department of Agriculture under the
              National Agri Stack. The pilot project for this initiative will
              take place at Kaithal (Haryana) and Morena (Madhya Pradesh).
            </motion.div>
            <br />
            <motion.div
              whileInView={{ y: [100, -10], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              The Jio Agri (JioKrishi) platform launched in February 2020,
              digitises the agricultural ecosystem along the entire value chain
              to empower farmers. The core function of the platform uses
              stand-alone application data to provide advisory, the advanced
              functions use data from various sources, feed the data into AI/ML
              algorithms and provide accurate personalised advice. The pilot
              project for this initiative will take place at Jalna and Nashik
              (Maharashtra).
            </motion.div>
            <br />
            <motion.div
              whileInView={{ y: [100, -10], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              ITC has proposed to create a personalized ‘Site Specific Crop
              Advisory’ service to turn conventional crop-level generic advice
              into a personalised site-specific crop advisory for farmers, using
              a digital crop monitoring platform, hosted on ITC’s e-Choupal 4.0
              digital platform. The pilot project for this initiative will take
              place at Sehore and Vidisha (Madhya Pradesh).
            </motion.div>
            <br />
            <motion.div
              whileInView={{ y: [100, -10], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              The Ministry of Agriculture & Farmers Welfare has developed major
              digital applications in order to boost technology adoption among
              farmers: -
            </motion.div>
            <br />
            <motion.div
              whileInView={{ y: [100, -10], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <a href="">National Agriculture Market (eNAM)</a>: - Launched in
              April 2016, the National Agriculture Market (eNAM) is a pan-India
              electronic trading portal that links the existing Agricultural
              Produce Market Committee (APMC) mandis, to create a unified
              national market for agricultural commodities. eNAM helps farmers
              sell products without the interference of any brokers or
              mediators, by generating competitive returns from their
              investment.
            </motion.div>
            <br />
            <motion.div
              whileInView={{ y: [100, -10], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <a href="">Direct Benefit Transfer (DBT) Central Agri Portal</a>:
              - Launched in January 2013, the DBT Agri Portal is a unified
              central portal for agricultural schemes across the country. The
              portal helps farmers adopt modern farm machineries through
              government subsidies.{" "}
            </motion.div>
            <br />
            <motion.div
              whileInView={{ y: [100, -10], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              In June 2021, The Ministry of Agriculture and Farmers Welfare
              signed an MoU with Microsoft to run a pilot programme for 100
              villages in 6 states. Under the MoU, Microsoft will create a
              ‘Unified Farmer Services Interface’ through its cloud computing
              services. This is a major part of the ministry’s future plan to
              create ‘AgriStack’ - a unified platform to provide end-to-end
              services across the agriculture food value chain to farmers. For
              this the government is planning to create unique farmer IDs for
              farmers across the country to integrate it with various{" "}
              <a href="" className="change-color">
                government schemes
              </a>{" "}
              and create digital agricultural ecosystems. <br /> <br />
            </motion.div>
          </motion.p>
          <div className="flowchart">
            <motion.div
              whileInView={{ y: [100, 0], rotate:[-360,360], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flowchart-heading"
            >
              <h1>How our website works ?</h1>
            </motion.div>
            <motion.div
              whileInView={{ y: [100, 0], scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="flowchart-img"
            >
              <img src={flowchart} alt="" />
              <motion.h5
                whileInView={{ y: [100, 0], scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
              >
                <i>Flow of our website</i>
              </motion.h5>
            </motion.div>
          </div>
          <div className="implementation">
            <motion.div
              className="implementation-heading"
              whileInView={{ y: [100, 0], scale: [0, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <h1>Implemenatation of Digital Agriculture in India</h1>
            </motion.div>
            <div className="implementation-content">
              <p>
                <motion.div
                  whileInView={{ y: [100, -10], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  The main factor behind the gradual acceptance of digital
                  farming in India is the prominence of segregated small-holder
                  farms in the country, this complicates data gathering.
                  Additionally, limited penetration of mechanisation tools and
                  frequent natural calamities, like droughts, floods and
                  excessive monsoon rains, have negatively impacted the
                  deployment of digital solutions in the sector. Thus, a
                  customised approach would be needed to implement digital
                  agriculture to a typical Indian small farm, this can be later
                  be scaled up and made available to many Indian farms.Following
                  measures could be implemented to make digital agriculture a
                  success in India: -
                </motion.div>
                <br />
                <motion.div
                  whileInView={{ y: [100, -10], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <a href="">Low cost technology</a>
                  <div>
                    : - The average annual income of an Indian farmer is US$
                    1,000. This low income explains the precarious
                    financialcircumstances in which a typical farmer operates in
                    India. Thus, lowering the cost of technology will help.
                  </div>
                </motion.div>
                <br />
                <motion.div
                  whileInView={{ y: [100, -10], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <a href="">Portable hardware</a>: - As typical Indian farms
                  are small, plug and play hardware has a better opportunity in
                  the Indian market. Also, agricultural land leasing is widely
                  prevalent under various farming arrangements, therefore a
                  farmer farming on a specific plot of land may move to another
                  farm plot next season. In such scenarios, investing in
                  portable equipment is better for farmers.
                </motion.div>
                <br />
                <motion.div
                  whileInView={{ y: [100, -10], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <a href="">
                    Renting and sharing platforms for agriculture equipment and
                    machinery
                  </a>
                  : - Owing to both constrained financial resources and small
                  farm plots, opportunity exists for digital platforms that
                  offer equipment renting and sharing services instead of
                  outright purchases. A few agritech start-ups like Farmkart
                  (rent4farm), EM3 AgriServices and Trringo, are already
                  providing equipment rental services.
                </motion.div>
                <br />
                <motion.div
                  whileInView={{ y: [100, -10], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <a href="">Academic support</a>: - The local agricultural
                  organisation and academic institutes regularly interact with
                  farmers through various locally conducted programs and
                  government initiatives. Training facilities provided by
                  various academic institutes and agricultural organisations
                  will improve digital adoption among farmers.
                </motion.div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Aftcarosl;
