import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const [products, setProducts] = useState([]);
  const [farmerInfo, setFarmerInfo] = useState("");
  const [customerInfo, setCustomerInfo] = useState("");
  const [retailerInfo, setRetailerInfo] = useState("");
  const [companyInfo, setCompanyInfo] = useState("");
  const farmer = useParams();
  const user = useSelector((state) => state.user._doc);
  const fetchProducts = async () => {
    const response = await fetch(
      `http://localhost:8080/product/getAllProductsOfFarmer/${farmer.id}`
    );
    const data = await response.json();
    setProducts(data);
  };
  const fetchFarmer = async () => {
    let response = await fetch(
      `http://localhost:8080/farmers/getFarmer/${farmer.id}`
    );
    let data = await response.json();
    setFarmerInfo(data);

    response = await fetch(
      `http://localhost:8080/farmers/getCustomer/${farmer.id}`
    );
    data = await response.json();
    setCustomerInfo(data);

    response = await fetch(
      `http://localhost:8080/farmers/getRetailer/${farmer.id}`
    );
    data = await response.json();
    setRetailerInfo(data);

    response = await fetch(
      `http://localhost:8080/farmers/getCompany/${farmer.id}`
    );
    data = await response.json();
    setCompanyInfo(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchFarmer();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="profile-container" style={{ marginTop: "100px" }}>
        {user.type === "Farmer" && (
          <div>
            <div
              className="img"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                style={{ border: "8px solid black" }}
                src={`http://localhost:8080/assets/${farmerInfo?.farmer?.picturePath}`}
                alt=""
              />
            </div>
            <div
              className="details"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h3">
                Name - {farmerInfo?.farmer?.firstName}{" "}
                {farmerInfo?.farmer?.lastName}
                <br />
                <br />
                City - {farmerInfo?.farmer?.city}
                <br />
                <br />
                State - {farmerInfo?.farmer?.state}
                <br />
                <br />
                Phone No. - {farmerInfo?.farmer?.phone}
              </Typography>
            </div>
          </div>
        )}
        {user.type === "Seller" && (
          <div>
            <div
              className="img"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                style={{ border: "8px solid black" }}
                src={`http://localhost:8080/assets/${customerInfo?.customer?.picturePath}`}
                alt=""
              />
            </div>
            <div
              className="details"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h3" color='black'>
                Name - {customerInfo?.customer?.firstName}{" "}
                {customerInfo?.customer?.lastName}
                <br />
                <br />
                City - {customerInfo?.customer?.city}
                <br />
                <br />
                State - {customerInfo?.customer?.state}
                <br />
                <br />
                Phone No. - {customerInfo?.customer?.phone}
              </Typography>
            </div>
          </div>
        )}
        <div
          className="products"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {console.log(products.products)}
          {products?.products?.map((product) => {
            return (
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Obcaecati asperiores modi eaque exercitationem praesentium
                    reprehenderit neque
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="large">
                    ₹{product.price} /{product.units}
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
