import * as React from "react";

import Typography from "@mui/material/Typography";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../state";
import "./Navbar.css";
import { Box, Button, useTheme } from "@mui/material";
function Navbar() {
  const user = useSelector((state) => state.user);
  console.log(user);
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
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <div className="nav-logo">
            <img src="" alt="" className="logo" />
          </div>
          <Link class="navbar-brand" to="/home">
            <b>Digital Farmer</b>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
              {/* <li class="nav-item">
                <Link class="nav-link p-3" aria-current="page" to="/home">
                  Add
                </Link>
              </li> */}
              { user?._doc?.type === "Farmer" && (
                <li class="nav-item">
                  <Link class="nav-link p-3" to="/sell">
                    Add Product
                  </Link>
                </li>
              )}

              <li class="nav-item">
                <Link class="nav-link p-3" to="/buy">
                  Buy
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link p-3" to={`/orders/${user._doc._id}`}>
                  Orders
                </Link>
              </li>
            </ul>
            <div class="row login">
              <div className=" col-lg-6 col-sm-12">
                <Box>
                  <Button
                    onClick={() => {
                      handleLoginout()
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
                    { user?._doc?._id ? "Logout" : "Login"}
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
