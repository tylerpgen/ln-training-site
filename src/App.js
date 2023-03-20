import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import NewNavbar from "./components/NewNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NewHome from "./pages/NewHome";
import NewTestimonial from "./pages/NewTestimonial";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Products2 from "./pages/Products2";
import NewFooter from "./components/NewFooter";

const theme = createTheme();

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NewNavbar />
        <Routes>
          <Route path="/" exact element={<NewHome />} />
          <Route path="/testimonial" exact element={<NewTestimonial />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/2" exact element={<Products2 />} />
        </Routes>
        <NewFooter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
