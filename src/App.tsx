import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BreweryList from "./components/BreweryList";
import SingleBrewery from "./components/SingleBrewery";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brewerylist/:id" element={<SingleBrewery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
