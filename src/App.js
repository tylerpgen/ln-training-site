import React from "react";
// import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import NewNavbar from "./components/NewNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Footer from "./components/Footer";

const theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="content-wrapper">
          <NewNavbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/testimonial" exact element={<Testimonials />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/products" exact element={<Products />} />
          </Routes>
          <Footer className="footer" />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
