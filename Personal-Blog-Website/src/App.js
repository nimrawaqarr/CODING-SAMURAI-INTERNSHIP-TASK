import React from "react";
import NavBar from "./components/Header/NavBar";
import ArticlePage from "./components/Article/ArticlePage";
import Contactpage from "./components/ContactPage/ContactPage";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/article" element={<ArticlePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contactpage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
