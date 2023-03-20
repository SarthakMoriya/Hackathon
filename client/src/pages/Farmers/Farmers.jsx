import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";

import "./Farmers.css";

const Farmers = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [search, setSearch] = useState(false);
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
    console.log(state, city);
  }, []);
  useEffect(() => {
    fetchFarmers();
  }, []);
  return (
    <div
      style={{ backgroundColor: "rgb(179 212 245 / 25%) ", height: "100vh" }}
    >
      <Navbar />
      <div className="search-box">
        <TextField
          id="outlined-basic"
          label="State"
          variant="outlined"
          value={state}
          onChange={(e) => {
            setState("");
            setState(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="District"
          variant="outlined"
          value={city}
          onChange={(e) => {
            setCity("");
            setCity(e.target.value);
          }}
        />
        <Button
          variant="outlined"
          onClick={() => {
            setSearch(!search);
          }}
        >
          Search
        </Button>
      </div>
      <motion.div
        whileInView={{ y: [100, -10], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="cards-section"
      >
        {farmers?.map((farmer) => {
          if (search) {
            if (farmer.state === state && farmer.city === city) {
              return (
                <motion.div
                  className="motion-div"
                  sx={{ width: "25vw", padding: "20px" }}
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
                      >
                        <Link to={`/farmer/products/${farmer._id}`}>
                          View Products
                        </Link>
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
            }
          } else {
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
                      <Link to={`/profile/${farmer._id}`}>
                        View Profile
                      </Link>
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
          }
        })}
      </motion.div>
    </div>
  );
};

export default Farmers;

/**
        
 */
