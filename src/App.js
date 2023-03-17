import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/testimonial" exact element={<Testimonials />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
