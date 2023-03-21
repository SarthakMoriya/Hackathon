import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./themes/theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useScroll } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
/**Pages Import */
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Sell from "./pages/Sell/Sell";
import Buy from "./pages/Buy/Buy";

import "./App.css";
import Order from "./pages/orders/Order";
import Farmers from "./pages/Farmers/Farmers";
import FarmerProducts from "./pages/FarmerProducts/FarmerProducts";
import GoogleTranslate from "./GoogleTranate";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error("I crashed!");
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}
function App() {
  const user = useSelector((state) => state.user);
  const theme = useMemo(() => createTheme(themeSettings("light")), []);


  return (
    <ErrorBoundary>
      <div className="">
        {/* <div style={{marginTop:"85px"}} id="google_translate_element"></div>
        <div id="google_translate_element" style={{ marginTop: "85px" }}></div> */}
        {/* <GoogleTranslate/> */}
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/home" title='Digital Farmers | Home'  element={user ? <Home /> : <Login />} />
              <Route path="/" title='Digital Farmers | Login' element={<Login />} />
              <Route path="/sell" title='Digital Farmers | Sell Products' element={user ? <Sell /> : <Login />} />
              <Route path="/buy" title='Digital Farmers | Buy Products' element={user ? <Buy /> : <Login />} />
              <Route path="/farmers" title='Digital Farmers | All Farmers' element={user ? <Farmers /> : <Login />} />
              <Route
                path="/orders/:userId" title='Digital Farmers | Your Orders'
                element={user ? <Order /> : <Login />}
              />
              <Route
                path="/farmer/products/:id" title='Digital Farmers | FarmerProducts'
                element={user ? <FarmerProducts /> : <Login />}
              />
              <Route
                path="/profile/:id" title='Digital Farmers | Profile Page'
                element={user ? <ProfilePage /> : <Login />}
              />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}
// lolo

export default App;
