import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

import "./Buy.css";
import table from "../../assets/pestTable.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import cartImg from "../../assets/trolley.png";
const Buy = () => {
  const [products, setProducts] = useState([]);
  const [isFruits, setIsFruits] = useState(true);
  const [isCrops, setIsCrops] = useState(false);
  const [isVegetables, setIsVegetables] = useState(false);
  const [isDairy, setIsDairy] = useState(false);
  const [isFarming, setIsFarming] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isWarningBox, setIsWarningBox] = useState(true);
  const user = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCart = (product) => {
    setCartItems((prevState) => [product, ...prevState]);
    console.log(cartItems);
  };

  const notify = (message, error = "success") => {
    if (error === "success") toast.success(`${message}`);
    else if (error === "error") {
      toast.error(`${message}`);
    } else if (error === "info") {
      toast.info(`${message}`);
    }
  };

  const handleBuy = () => {
    if (cartItems.length === 0) {
      return notify(`No item added`, "error");
    }
    cartItems.map(async (item) => {
      console.log(item._id, item.userId);
      const response = await fetch("http://localhost:8080/product/buy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: item._id,
          farmerId: item.userId,
          customerId: user._doc._id,
          status: "ordered",
        }),
      });
      const data = await response.json();
      notify(data.msg);
      setCartItems([]);
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

  const handleRemoveItems = (item) => {
    const newItems = cartItems.filter((product) => product._id !== item._id);
    setCartItems(newItems);
    notify("1 item removed", "info");
  };
  return (
    <div className="buy-main-container">
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="main-container" style={{ marginTop: "85px" }}>
        <div className="left-sidebar">
          {user._doc.type !== "Retailer" && (
            <button
              className={`button ${isDairy && "active"}`}
              onClick={() => {
                setIsDairy(true);
                setIsCrops(false);
                setIsFruits(false);
                setIsVegetables(false);
                setIsFarming(false);
              }}
            >
              Dairy Products
            </button>
          )}
          {user._doc.type !== "Retailer" && (
            <button
              className={`button ${isFruits && "active"}`}
              onClick={() => {
                setIsDairy(false);
                setIsCrops(false);
                setIsFruits(true);
                setIsVegetables(false);
                setIsFarming(false);
              }}
            >
              Fruits
            </button>
          )}
          {user._doc.type !== "Retailer" && (
            <button
              className={`button ${isVegetables && "active"}`}
              onClick={() => {
                setIsDairy(false);
                setIsCrops(false);
                setIsFruits(false);
                setIsVegetables(true);
                setIsFarming(false);
              }}
            >
              Vegetables
            </button>
          )}
          {user._doc.type !== "Retailer" && (
            <button
              className={`button ${isCrops && "active"}`}
              onClick={() => {
                setIsDairy(false);
                setIsCrops(true);
                setIsFruits(false);
                setIsVegetables(false);
                setIsFarming(false);
              }}
            >
              Crops
            </button>
          )}

          {(user._doc.type === "Farmer" || user._doc.type === "Retailer") && (
            <button
              className={`button ${isFarming && "active"}`}
              onClick={() => {
                setIsDairy(false);
                setIsCrops(false);
                setIsFruits(false);
                setIsVegetables(false);
                setIsFarming(true);
              }}
            >
              Farming Essentials
            </button>
          )}

          <button
            className="button"
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
          >
            CART <img src={cartImg} width="18" />
          </button>
        </div>
        <motion.div className="main-box">
          {products.map((product) => {
            if (product.category === "Crop" && isCrops) {
              if (user._doc.type === "Retailer") return;
              return (
                <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }}
                >
                  <Card
                    sx={{ maxWidth: 345, margin: 0 }}
                    className="card"
                    key={product._id}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image={`http://localhost:8080/assets/${product.picturePath}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Sold by: <Link>{product.username}</Link>
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati asperiores modi eaque exercitationem
                        praesentium reprehenderit neque
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="large">₹{product.price}</Button>
                      {user._doc._id === product.userId ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          title="View more "
                          sx={{ marginLeft: "60px" }}
                        >
                          Your Product
                        </Typography>
                      ) : (
                        <Button
                          size="large"
                          color="success"
                          variant="outlined"
                          className="buy-btn"
                          onClick={() => {
                            handleCart(product);
                            notify("1 Item added");
                          }}
                        >
                          Add to cart
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              );
            } else if (product.category === "Friuts" && isFruits) {
              if (user._doc.type === "Retailer") return;
              return (
                <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }}
                >
                  <Card
                    sx={{ maxWidth: 345, margin: 0 }}
                    className=""
                    key={product._id}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image={`http://localhost:8080/assets/${product.picturePath}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                        {product.name}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        title="View more "
                      >
                        Sold by: <Link>{product.username}</Link>
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati asperiores modi eaque exercitationem
                        praesentium reprehenderit neque
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="large">
                        ₹{product.price}
                        {"/"}
                        {product.units}
                      </Button>
                      {user._doc._id === product.userId ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          title="View more "
                          sx={{ marginLeft: "60px" }}
                        >
                          Your Product
                        </Typography>
                      ) : (
                        <Button
                          size="large"
                          color="success"
                          variant="outlined"
                          className="buy-btn"
                          onClick={() => {
                            handleCart(product);
                            notify("1 Item added");
                          }}
                        >
                          Add to cart
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              );
            } else if (product.category === "Vegetables" && isVegetables) {
              if (user._doc.type === "Retailer") return;
              return (
                <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }}
                >
                  <Card
                    sx={{ maxWidth: 345, margin: 0 }}
                    className="card"
                    key={product._id}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image={`http://localhost:8080/assets/${product.picturePath}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Sold by: <Link>{product.username}</Link>
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati asperiores modi eaque exercitationem
                        praesentium reprehenderit neque
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="large">
                        ₹{product.price}
                        {"/"}
                        {product.units}
                      </Button>
                      {user._doc._id === product.userId ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          title="View more "
                          sx={{ marginLeft: "60px" }}
                        >
                          Your Product
                        </Typography>
                      ) : (
                        <Button
                          size="large"
                          color="success"
                          variant="outlined"
                          className="buy-btn"
                          onClick={() => {
                            handleCart(product);
                            notify("1 Item added");
                          }}
                        >
                          Add to cart
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              );
            } else if (product.category === "Dairy" && isDairy) {
              if (user._doc.type === "Retailer") return;
              return (
                <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }}
                >
                  <Card
                    sx={{ maxWidth: 345, margin: 0 }}
                    className="card"
                    key={product._id}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image={`http://localhost:8080/assets/${product.picturePath}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Sold by: <Link>{product.username}</Link>
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati asperiores modi eaque exercitationem
                        praesentium reprehenderit neque
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="large">
                        ₹{product.price}
                        {"/"}
                        {product.units}
                      </Button>
                      {user._doc._id === product.userId ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          title="View more "
                          sx={{ marginLeft: "60px" }}
                        >
                          Your Product
                        </Typography>
                      ) : (
                        <Button
                          size="large"
                          color="success"
                          variant="outlined"
                          className="buy-btn"
                          onClick={() => {
                            handleCart(product);
                            notify("1 Item added");
                          }}
                        >
                          Add to cart
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              );
            } else if (product.category === "Farming" && isFarming) {
              console.log(product);
              console.log(user._doc._id);
              return (
                <motion.div
                  className="card"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5, ease: "easeIn" },
                  }}
                >
                  <Card
                    sx={{ maxWidth: 345, margin: 0 }}
                    className="card"
                    key={product._id}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image={`http://localhost:8080/assets/${product.picturePath}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h3" component="div">
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        Sold by: <Link>{product.username}</Link>
                      </Typography>
                      <Typography variant="h4" color="text.secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Obcaecati asperiores modi eaque exercitationem
                        praesentium reprehenderit neque
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="large">
                        ₹{product.price} {"/"}
                        {product.units}
                      </Button>

                      {user._doc._id === product.userId ? (
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          title="View more "
                          sx={{ marginLeft: "60px" }}
                        >
                          Your Product
                        </Typography>
                      ) : (
                        <Button
                          size="large"
                          color="success"
                          variant="outlined"
                          className="buy-btn"
                          onClick={() => {
                            handleCart(product);
                            notify("1 Item added");
                          }}
                        >
                          Add to cart
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              );
            }
          })}
        </motion.div>
      </div>
      {isCartOpen && (
        <motion.div
          style={{ width: "50%" }}
          className="cart"
          initial={{ opacity: 0, y: 80 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1 }}
          whileInView={{ opacity: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5, ease: "easeIn" },
          }}
          exit={{ opacity: 0 }}
        >
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
                  onClick={() => {
                    handleRemoveItems(item);
                  }}
                >
                  <Box>{item?.name}</Box>
                  <Box>₹{item?.price}</Box>
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
        </motion.div>
      )}
      {isWarningBox && user._doc.type === "Farmer" && (
        <div className="warning-box">
          <div className="warning">
            <h2 style={{ color: "red", marginLeft: "20px", marginTop: "20px" }}>
              Disclaimer
            </h2>
            <h4 style={{ color: "#bb4e4e", marginLeft: "20px" }}>
              The pesticides and fertilizers will be distributed according to
              land holded by the farmer
            </h4>
            <h5 style={{ color: "#bb4e4e", marginLeft: "20px" }}>
              Sales of pesticides and fertilizers will be validated after
              checking farmer's area in yards
            </h5>
            <img src={table} style={{ marginBottom: "10px" }} />
          </div>
          <div
            className="closebtn"
            onClick={() => {
              setIsWarningBox(!isWarningBox);
            }}
          >
            X
          </div>
        </div>
      )}
    </div>
  );
};

export default Buy;
