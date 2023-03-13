import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./themes/theme";
import { useMemo } from "react";

/**Pages Import */
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Sell from "./pages/Sell/Sell";
import Buy from "./pages/Buy/Buy";

import "./App.css";
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
  const theme = useMemo(() => createTheme(themeSettings("light")), []);

  return (
    <ErrorBoundary>
      <div className="">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/buy" element={<Buy />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </div>
    </ErrorBoundary>
  );
}

export default App;
