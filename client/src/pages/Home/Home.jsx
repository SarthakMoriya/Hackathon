import React from "react";
import AddProduct from "../../components/AddProducts/AddProduct";
import { useDispatch,useSelector } from "react-redux";
import { setLogout } from "../../state";
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
  const dispatch=useDispatch();
  
  const handleLogout=(e)=>{
    dispatch(setLogout())
  }
  return (
    <div>
      <Navbar/>
      
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
