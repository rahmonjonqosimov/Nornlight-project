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
import CartPage from "./routes/cart";
import BlogPage from "./routes/blog";
import ContactPage from "./routes/contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<AdminPage />}>
            <Route path="create-product" element={<CreateProduct />} />
            <Route path="manage-product" element={<ManageProduct />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="manage-category" element={<ManageCategory />} />
          </Route>
        </Route>

        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/category" element={<Catalog />} />
        <Route path="/wishlist" element={<Wishes />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
