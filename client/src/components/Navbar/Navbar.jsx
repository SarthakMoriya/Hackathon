import * as React from "react";

import Typography from "@mui/material/Typography";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../state";
import "./Navbar.css";
import { Box, Button, useTheme } from "@mui/material";
function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { palette } = useTheme();

  const handleLoginout = () => {
    if (user !== null && user?._doc?._id) {
      dispatch(setLogout());
      navigate("/");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <div className="nav-logo">
            <img src="" alt="" className="logo" />
          </div>
          <Link className="navbar-brand" to="/home">
            <h1>Digital Farmer</h1>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
              {/* <li className="nav-item">
                <Link className="nav-link p-3" aria-current="page" to="/home">
                  Add
                </Link>
              </li> */}
              {(user?._doc?.type === "Farmer" ||
                user?._doc?.type === "Retailer") && (
                <li className="nav-item">
                  <Link className="nav-link p-3" to="/sell">
                    <h4 style={{ color: "rgba(0 ,0 ,0 ,0.55)" }}>
                      Add Product
                    </h4>
                  </Link>
                </li>
              )}
              {user?._doc?.type === "Seller" && (
                <li className="nav-item">
                  <Link className="nav-link p-3" to="/farmers">
                    <h4
                      style={{ color: "rgba(0 ,0 ,0 ,0.55)", fontSize: "22px" }}
                    >
                      Farmers
                    </h4>
                  </Link>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link p-3" to="/buy">
                  <h4
                    style={{ color: "rgba(0 ,0 ,0 ,0.55)", fontSize: "22px" }}
                  >
                    Shop
                  </h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-3" to={`/orders/${user._doc._id}`}>
                  <h4
                    style={{ color: "rgba(0 ,0 ,0 ,0.55)", fontSize: "22px" }}
                  >
                    Orders
                  </h4>
                </Link>
              </li>
            </ul>
            <div className="row login">
              <div className=" col-lg-6 col-sm-12">
                <Box>
                  <Button
                    onClick={() => {
                      handleLoginout();
                    }}
                    fullWidth
                    type="submit"
                    sx={{
                      // m: "2rem 0",
                      // p: "1rem",
                      backgroundColor: palette.primary.dark,
                      color: palette.background.alt,
                      "&:hover": {
                        color: palette.primary.dark,
                        border: "1px solid green",
                        backgroundColor: palette.primary.light,
                      },
                    }}
                  >
                    {user?._doc?._id ? "Logout" : "Login"}
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
