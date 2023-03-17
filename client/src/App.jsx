import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./themes/theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";

/**Pages Import */
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Sell from "./pages/Sell/Sell";
import Buy from "./pages/Buy/Buy";

import "./App.css";
import Order from "./pages/orders/Order";
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
  useEffect(() => {
    const successfulLookup = (position) => {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=6762b72f67c840eeb736155d8b9b803d`
      )
        .then((response) => response.json())
        .then(console.log);
    };
    navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
  });
  return (
    <ErrorBoundary>
      <div className="">
        <div id="google_translate_element"></div>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/home" element={user ? <Home /> : <Login />} />
              <Route path="/" element={<Login />} />
              <Route path="/sell" element={user ? <Sell /> : <Login />} />
              <Route path="/buy" element={user ? <Buy /> : <Login />} />
              <Route
                path="/orders/:userId"
                element={user ? <Order /> : <Login />}
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
