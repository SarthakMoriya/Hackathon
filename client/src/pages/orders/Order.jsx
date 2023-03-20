import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "./Order.css";
import { resetOrders, setOrders } from "../../state";

const Order = () => {
  const user = useSelector((state) => state.user._doc);
  const [products, setProducts] = useState([]);
  const [orderStatus, setOrderStatus] = useState("");
  const [counter, setCounter] = useState(0);

  const fetchProductIds = async () => {
    const response = await fetch(
      `http://localhost:8080/product/buy/${user?._id}/${user?.type}`
    );

    const data = await response.json();
    console.log(data);
    setProducts(() => data);
  };

  useEffect(() => {
    fetchProductIds();
  }, []);

  const updateOrderStatus = async (product, order) => {
    console.log(order)
    const status = order?.status;
    console.log("status::", status);
    const updatedStatus = status === "Ordered" ? "Delivered" : "Ordered";
    console.log("UpdatedStatus::", updatedStatus);
    const response = await fetch(`http://localhost:8080/product/updateorder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId: order._id, status: updatedStatus }),
    });

    const data = await response.json();
    console.log(data);
  };

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

          {/* {products.products?.map((product, i) => {
            if (products.userOrders.length === 0) {
              return;
            }
            setCounter((prev) => prev + 1);
            return (
              <Box
                key={products.userOrders[i]?._id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                  borderBottom: "2px solid black",
                  padding: "15px",
                }}
              >
                <Typography variant="h4">{product.name}</Typography>
                <Typography variant="h4">₹{product.price}</Typography>
                <img
                  src={`http://localhost:8080/assets/${product.picturePath}`}
                  width="80"
                  height="80"
                />
                {user.type === "Seller" && (
                  <Typography variant="h4">
                    {products.userOrders[i]?.status}
                  </Typography>
                )}

                {user?.type === "Farmer" && (
                  <Box sx={{ gridColumn: "span 4", border: "1px solid black" }}>
                    <select
                      defaultValue={products.userOrders[i]?.status}
                      onChange={(e) => {
                        // console.log(e.target.value)
                        setOrderStatus(e.target.value);
                        updateOrderStatus(product, products.userOrders[i]);
                      }}
                    >
                      <option value="Ordered">Ordered</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </Box>
                )}
              </Box>
            );
          })} */}
          {products?.userOrders?.map((order, i) => {
            const product = products?.products?.filter(
              (product) => product._id === order.productId
            );
            console.log(product);

            return (
              <Box
                key={order?._id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                  borderBottom: "2px solid black",
                  padding: "15px",
                }}
              >
                <Typography variant="h4">{product[0].name}</Typography>
                <Typography variant="h4">₹{product[0].price}</Typography>
                <img
                  src={`http://localhost:8080/assets/${product[0].picturePath}`}
                  width="80"
                  height="80"
                />
                {user.type === "Seller" && (
                  <Typography variant="h4">
                    {order?.status}
                  </Typography>
                )}

                {user?.type === "Farmer" && (
                  <Box sx={{ gridColumn: "span 4", border: "1px solid black" }}>
                    <select
                      defaultValue={order?.status}
                      onChange={(e) => {
                        console.log(e.target.value)
                        setOrderStatus(e.target.value);
                        updateOrderStatus(product, order);
                      }}
                    >
                      <option value="Ordered">Ordered</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
      </div>
    </div>
  );
};

export default Order;
