import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setLogin } from "../../state";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Form.css";

const Form = () => {
  const [firstName, setFirstName] = useState("sarthak");
  const [lastName, setLastName] = useState("Moriya");
  const [city, setCity] = useState("Amritsar");
  const [state, setState] = useState("Punjab");
  const [picture, setPicture] = useState("");
  const [phone, setPhone] = useState(Number(8544875229));
  const [password, setPassword] = useState("test1234");
  const [type, setType] = useState("Farmer");
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const notify = (message) => toast.success(`${message}`);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("picturePath", picture.name);
      formData.append("picture", picture);
      formData.append("type", type);

      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      if (data?.user?._id) {
        setPageType("login");
        notify("Successfully Registered!");
      } else {
        console.log("ERROR");
        notify("Invalid Credentials");
      }
    } else {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      });
      const data = await response.json();
      console.log(data);
      if (data.user) {
        notify("Redirecting...!");
        setTimeout(() => {
          navigate("/home");
          dispatch(
            setLogin({ user: data.user, token: data.token, type: data.type })
          );
        }, 3000);
      }
    }
  };
  return (
    <div className="ask-question">
      <form onSubmit={handleSubmit}>
        {/* Same as */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {isRegister && (
            <>
              <TextField
                label="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                label="State"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                label="City"
                name="City"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                sx={{ gridColumn: "span 4" }}
              />
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

              <Box sx={{ gridColumn: "span 4", border: "1px solid black" }}>
                <select
                  defaultValue="Farmer"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="Farmer">Farmer</option>
                  <option value="Seller">Customer</option>
                </select>
              </Box>
            </>
          )}

          <TextField
            label="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            sx={{ gridColumn: "span 4" }}
          />
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
              "&:hover": { color: palette.primary.main },
            }}
          >
            {isLogin ? "LOGIN" : "REGISTER"}
          </Button>
          <Typography
            onClick={() => {
              setPageType(isLogin ? "register" : "login");
            }}
            sx={{
              textDecoration: "underline",
              color: palette.primary.main,
              "&:hover": {
                cursor: "pointer",
                color: palette.primary.light,
              },
            }}
          >
            {isLogin
              ? "Don't have an account? Sign Up here."
              : "Already have an account? Login here."}
          </Typography>
        </Box>
      </form>
    </div>
  );
};

export default Form;
