import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Navbar from "../../components/Navbar/Navbar";
import "./Buy.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Buy = () => {
  const [products, setProducts] = useState([]);
  const [isFruits, setIsFruits] = useState(true);
  const [isCrops, setIsCrops] = useState(false);
  const [isVegetables, setIsVegetables] = useState(false);
  const [isDairy, setIsDairy] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch(
      "http://localhost:8080/product/getAllProducts",
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setProducts(data);
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="left-sidebar">
          <button
            className="button"
            onClick={() => {
              setIsDairy(true);
              setIsCrops(false);
              setIsFruits(false);
              setIsVegetables(false);
            }}
          >
            Dairy Products
          </button>
          <button
            className="button"
            onClick={() => {
              setIsDairy(false);
              setIsCrops(false);
              setIsFruits(true);
              setIsVegetables(false);
            }}
          >
            Fruits
          </button>
          <button
            className="button"
            onClick={() => {
              setIsDairy(false);
              setIsCrops(false);
              setIsFruits(false);
              setIsVegetables(true);
            }}
          >
            Vegetables
          </button>
          <button
            className="button"
            onClick={() => {
              setIsDairy(false);
              setIsCrops(true);
              setIsFruits(false);
              setIsVegetables(false);
            }}
          >
            Crops
          </button>
        </div>
        <div className="main-box">
          {products.map((product) => {
            if (product.category === "Crop" && isCrops) {
              return (
                <Card sx={{ maxWidth: 345 }} className="card" key={product._id}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`http://localhost:8080/assets/${product.picturePath}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Sold by: {product.username}
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Obcaecati asperiores modi eaque exercitationem praesentium
                      reprehenderit neque
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">₹{product.price}</Button>
                    <Button
                      size="large"
                      color="success"
                      variant="outlined"
                      className="buy-btn"
                    >
                      Buy
                    </Button>
                    <Button
                      size="small"
                      color="success"
                      variant="outlined"
                      className="buy-btn"
                    >
                      <Link to="/userpage">
                        View more from {product.username}
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              );
            } else if (product.category === "Friuts" && isFruits) {
              return (
                <Card sx={{ maxWidth: 345 }} className="card" key={product._id}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`http://localhost:8080/assets/${product.picturePath}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Sold by: {product.username}
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Obcaecati asperiores modi eaque exercitationem praesentium
                      reprehenderit neque
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">₹{product.price}</Button>
                    <Button
                      size="large"
                      color="success"
                      variant="outlined"
                      className="buy-btn"
                    >
                      Buy
                    </Button>
                    <Button
                      size="small"
                      color="success"
                      variant="outlined"
                      className="buy-btn"
                    >
                      <Link to="/userpage">
                        View more from {product.username}
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              );
            } else if (product.category === "Vegetables" && isVegetables) {
              return (
                <Card sx={{ maxWidth: 345 }} className="card" key={product._id}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`http://localhost:8080/assets/${product.picturePath}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Sold by: {product.username}
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Obcaecati asperiores modi eaque exercitationem praesentium
                      reprehenderit neque
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">₹{product.price}</Button>
                    <Button
                      size="large"
                      color="success"
                      variant="outlined"
                      className="buy-btn"
                    >
                      Buy
                    </Button>
                    <Button
                      size="small"
                      color="success"
                      variant="outlined"
                      className="buy-btn"
                    >
                      <Link to="/userpage">
                        View more from {product.username}
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              );
            } else if (product.category === "Dairy" && isDairy) {
              return (
                <Card sx={{ maxWidth: 345 }} className="card" key={product._id}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={`http://localhost:8080/assets/${product.picturePath}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Sold by: {product.username}
                    </Typography>
                    <Typography variant="h4" color="text.secondary">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Obcaecati asperiores modi eaque exercitationem praesentium
                      reprehenderit neque
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large">₹{product.price}</Button>
                    <Button
                      size="large"
                      color="success"
                      variant="outlined"
                      className="buy-btn"
                    >
                      Buy
                    </Button>
                    <Button
                      size="small"
                      color="success"
                      variant="outlined"
                      className="buy-btn"
                    >
                      <Link to="/userpage">
                        View more from {product.username}
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Buy;

/**
 {products.map((product) => (
            <Card sx={{ maxWidth: 345 }} className="card" key={product._id}>
              <CardMedia
                sx={{ height: 140 }}
                image={`http://localhost:8080/assets/${product.picturePath}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Sold by: {product.username}
                </Typography>
                <Typography variant="h4" color="text.secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati asperiores modi eaque exercitationem praesentium
                  reprehenderit neque
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large">₹{product.price}</Button>
                <Button
                  size="large"
                  color="success"
                  variant="outlined"
                  className="buy-btn"
                >
                  Buy
                </Button>
                <Button
                  size="small"
                  color="success"
                  variant="outlined"
                  className="buy-btn"
                >
                  <Link to="/userpage">View more from {product.username}</Link>
                </Button>
              </CardActions>
            </Card>
          ))}
 * 
 */
