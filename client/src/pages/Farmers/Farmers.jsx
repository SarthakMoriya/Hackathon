import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";

import "./Farmers.css";

const Farmers = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [farmers, setFarmers] = useState([]);
  const fetchFarmers = async () => {
    const response = await fetch("http://localhost:8080/farmers/getAllFarmers");
    const data = await response.json();
    console.log(data.farmers[0]);
    setFarmers(data.farmers);
  };
  useEffect(() => {
    const successfulLookup = async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=6762b72f67c840eeb736155d8b9b803d`
      );

      const data = await response.json();
      setCity(data.results[0].components.city);
      setState(data.results[0].components.state);
    };
    navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
  });
  useEffect(() => {
    fetchFarmers();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="search-box">
        <TextField
          id="outlined-basic"
          label="State"
          variant="outlined"
          value={state}
        />
        <TextField
          id="outlined-basic"
          label="District"
          variant="outlined"
          value={city}
        />
        <Button variant="outlined">Search</Button>
      </div>
      <motion.div
        whileInView={{ y: [100, -10], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="cards-section"
      >
        {farmers?.map((farmer) => {
          return (
            <motion.div
              className="motion-div"
              sx={{ width: "25vw" }}
              whileInView={{ y: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ width: "100%" }} className="">
                <CardMedia
                  sx={{ height: 270 }}
                  image={`http://localhost:8080/assets/${farmer.picturePath}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    {farmer.firstName + " " + farmer.lastName}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    title="View more "
                  >
                    {farmer.city}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    title="View more "
                  >
                    {farmer.state}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    color="success"
                    variant="outlined"
                    className="buy-btn"
                    onClick={() => {
                      //   handleCart(product);
                      //   notify("1 Item added");
                    }}
                  >
                    Check Profile
                  </Button>
                  <Button
                    size="large"
                    color="success"
                    variant="outlined"
                    className="buy-btn"
                  >
                    <Link to={`/farmer/products/${farmer._id}`}>
                      View Products
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Farmers;

/**
        
 */
