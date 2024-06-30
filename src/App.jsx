import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import "./sass/main.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutPage from "./routes/about";
import PaymentPage from "./routes/payment";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
