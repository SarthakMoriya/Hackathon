import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "./Order.css";

const Order = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const fetchOrders = () => {
    setOrders(user._doc.orders);
    console.log(orders, user);
  };

  const getProduct = async () => {
    orders.map(async (product) => {
      const response = await fetch(
        `http://localhost:8080/product/buy/${product?.productId}`
      );
      const data = await response.json();
      console.log(data);
      setCurrentOrder((prevState) => [...prevState, data]);
    });
    console.log("PRODUCTS INFO ACQUIRED");
    console.log(currentOrder);
  };
  useEffect(() => {
    fetchOrders();
    getProduct();
  }, [orders]);
  return (
    <div>
      <Navbar />
      <div className="order-box">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            border: "1px solid black",
            width: "50%",
            backgroundColor: "#E6FBFF",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              backgroundColor: "#00353F",
            }}
          >
            <Typography variant="h3">Name</Typography>
            <Typography variant="h3">Price</Typography>
            <Typography variant="h3">Image</Typography>
            <Typography variant="h3">Status</Typography>
          </Box>
          {currentOrder.map((product, i) => {
            console.log(product);
            return (
              <Box
                key={product.product?._id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                  borderBottom: "2px solid black",
                  padding: "15px",
                }}
              >
                <Typography variant="h4">{product.product.name}</Typography>
                <Typography variant="h4">₹{product.product.price}</Typography>
                <img
                  src={`http://localhost:8080/assets/${product.product.picturePath}`}
                  width="80"
                  height="80"
                />
                <Typography variant="h4">{orders[i].status}</Typography>
              </Box>
            );
          })}
        </Box>
      </div>
    </div>
  );
};

export default Order;
