import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import "./sass/main.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutPage from "./routes/about";
import PaymentPage from "./routes/payment";
import Login from "./routes/login";
import Auth from "./routes/auth";
import AdminPage from "./routes/admin";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateProduct from "./routes/admin/create-product";
import ManageProduct from "./routes/admin/manage-product";
import CreateCategory from "./routes/admin/create-category";
import ManageCategory from "./routes/admin/managa-category";
import SingleRoute from "./routes/single-route";
import Wishes from "./routes/wishes";
import NotFound from "./routes/not-found";
import Catalog from "./routes/catalog";
import AllProducts from "./routes/products";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishes />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/category" element={<Catalog />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="manage-category" element={<ManageCategory />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
