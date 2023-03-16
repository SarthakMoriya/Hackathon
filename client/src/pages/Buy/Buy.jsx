import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Navbar from "../../components/Navbar/Navbar";
import "./Buy.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Buy = () => {
  const [products, setProducts] = useState([]);
  const [isFruits, setIsFruits] = useState(true);
  const [isCrops, setIsCrops] = useState(false);
  const [isVegetables, setIsVegetables] = useState(false);
  const [isDairy, setIsDairy] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCart = (product) => {
    setCartItems((prevState) => [product, ...prevState]);
    console.log(cartItems);
  };

  const handleBuy = () => {
    console.log(cartItems[0]._id);
    cartItems.map(async (item) => {
      console.log(item._id, item.userId);
      const response = await fetch("http://localhost:8080/product/buy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: item._id,
          farmerId: item.userId,
          customerId:user._doc._id
        }),
      });
      const data = await response.json();
      console.log(data);
    });
  };

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
    <div className="buy-main-container">
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
                      onClick={() => {
                        handleCart(product);
                      }}
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
                      onClick={() => {
                        handleCart(product);
                      }}
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
                      onClick={() => {
                        handleCart(product);
                      }}
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
                      onClick={() => {
                        handleCart(product);
                      }}
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
      <button
        onClick={() => {
          setIsCartOpen(!isCartOpen);
        }}
        className="cart-opener"
      >
        Cart
      </button>
      {isCartOpen && (
        <Box width="50%" height="50vh" className="cart">
          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="space-around"
            width="100%"
            flexDirection="column"
          >
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
            >
              <Typography>Name</Typography>
              <Typography>Price</Typography>
              <Typography>Item</Typography>
            </Box>
            {cartItems.map((item) => {
              return (
                <Box
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-around"
                  className="cart-item"
                  key={item._id}
                >
                  <Box>{item?.name}</Box>
                  <Box>{item?.price}</Box>
                  <Box>
                    <img
                      src={`http://localhost:8080/assets/${item.picturePath}`}
                      width="80"
                      height="80"
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
          <button
            className="button"
            sx={{ width: "100%" }}
            onClick={() => {
              handleBuy();
            }}
          >
            Buy
          </button>
        </Box>
      )}
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
