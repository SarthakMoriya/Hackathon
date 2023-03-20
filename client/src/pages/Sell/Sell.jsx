import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AddProduct from "../../components/AddProducts/AddProduct";
import { useSelector } from "react-redux";
const Sell = () => {
  const user = useSelector((state) => state.user);
  console.log(user?._doc?.type);
  return (
    <div>
      <Navbar />
      {(user?._doc?.type === "Farmer" || user?._doc?.type === "Retailer") && (
        <AddProduct />
      )}
    </div>
  );
};

export default Sell;
