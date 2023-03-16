import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AddProduct.css";

const AddProduct = () => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Crop");
  const [picture, setPicture] = useState("");

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { palette } = useTheme();
  const user = useSelector((state) => state.user);

  const notify = (message) => toast(`${message}`);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(category, name);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("picture", picture);
    formData.append("category", category);
    formData.append("userId", user?._doc?._id);
    formData.append("username", user?._doc?.firstName + " "+user?._doc?.lastName);
    formData.append("picturePath", picture.name);

    const response = await fetch(
      "http://localhost:8080/product/createProduct",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        border="3px solid #58e073"
        width="40%"
        padding="20px"
        borderRadius="2%"
        boxShadow="rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
      >
        <Typography variant="h3">ADD PRODUCT</Typography>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <form onSubmit={handleSubmit}>
          {/* Same as */}
          <ToastContainer />
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                value={price}
                type="number"
                label="Price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                sx={{ gridColumn: "span 4" }}
              />
              <Box sx={{ gridColumn: "span 4", border: "1px solid black" }}>
                <select
                  onChange={(e) => {
                    setCategory(e.target.value);
                    console.log(setCategory(e.target.value));
                  }}
                >
                  <option value="Crops">Crops</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Friuts">Friuts</option>
                  <option value="Vegetables">Vegetables</option>
                </select>
              </Box>
              <TextField
                type="file"
                label="Photo"
                className="custom-file-upload"
                onChange={(e) => {
                  setPicture(e.target.files[0]);
                }}
                sx={{
                  gridColumn: "span 4",
                  cursor: "pointer",
                  opacity: "",
                }}
              ></TextField>
            </>
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": {
                  color: palette.primary.main,
                  border: "1px solid green",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddProduct;
