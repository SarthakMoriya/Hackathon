import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Typography } from "@mui/material";

const Order = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Box>
          <Typography>Name</Typography>
          <Typography>Price</Typography>
          <Typography>Item</Typography>
          <Typography>Status</Typography>
        </Box>
        <Box>
          <Typography>Apple</Typography>
          <Typography>230</Typography>
          <Typography>photu</Typography>
          <Typography>Delivered</Typography>
        </Box>
      </div>
    </div>
  );
};

export default Order;
