import React from "react";
import "./App.css";
import Navbar from "./components/layout/header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home/Home";
import Footer from "./components/layout/Footer/Footer";
import Productpage from "./components/pages/products/Productpage";
import Prenavbar from "./components/layout/prenavbar/Prenavbar";
import Contactpage from "./components/pages/contact/Contactpage";
import About from "./components/pages/about/Aboutpage";
import Errorpage from "./components/pages/error/Errorpage";
function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <Routes>
        <Route path="*" element={<Errorpage />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/products" element={<Productpage />}></Route>
        <Route exact path="/contact" element={<Contactpage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
