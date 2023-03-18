import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "./Order.css";
import { resetOrders, setOrders } from "../../state";

const Order = () => {

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
          {[].map((product, i) => {

            return (
              <Box
                // key={orders[`${i}`]?._id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                  borderBottom: "2px solid black",
                  padding: "15px",
                }}
              >
                {/* <Typography variant="h4">{product.product.name}</Typography> */}
                {/* <Typography variant="h4">₹{product.product.price}</Typography> */}
                <img
                  // src={`http://localhost:8080/assets/${product.product.picturePath}`}
                  width="80"
                  height="80"
                />
                {/* {user._doc.type === "Seller" && (
                  // <Typography variant="h4">{orders[i].status}</Typography>
                  <Typography variant="h4">hihi</Typography>
                )} */}

                {/* {user._doc.type === "Farmer" && (
                  <Box sx={{ gridColumn: "span 4", border: "1px solid black" }}>
                    <select
                      defaultValue="Ordered"
                      onChange={(e) => {
                        setOrderStatus(e.target.value);
                        console.log(orderStatus);
                      }}
                    >
                      <option value="Farmer">Ordered</option>
                      <option value="Seller">Delivered</option>
                    </select>
                  </Box>
                )} */}
              </Box>
            );
          })}
        </Box>
      </div>
    </div>
  );
};

export default Order;
