import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";

import "./Farmers.css";

const Farmers = () => {
  const [farmers, setFarmers] = useState([]);
  const fetchFarmers = async () => {
    const response = await fetch("http://localhost:8080/farmers/getAllFarmers");
    const data = await response.json();
    console.log(data.farmers[0]);
    setFarmers(data.farmers);
  };

  useEffect(() => {
    fetchFarmers();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="search-box">
        <input type="text" />
      </div>
      <div className="cards-section">
        {farmers?.map((farmer) => {
          return (
            <Card sx={{ width: "33%" }} className="">
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
                  <Link to={`/farmer/products/${farmer._id}`}>View Products</Link>
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Farmers;

/**
        
 */
