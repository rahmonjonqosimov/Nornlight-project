import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./routes/about";
import AdminPage from "./routes/admin";
import CreateCategory from "./routes/admin/create-category";
import CreateProduct from "./routes/admin/create-product";
import ManageCategory from "./routes/admin/managa-category";
import ManageProduct from "./routes/admin/manage-product";
import Auth from "./routes/auth";
import BlogPage from "./routes/blog";
import CartPage from "./routes/cart";
import Catalog from "./routes/catalog";
import ContactPage from "./routes/contact";
import Garant from "./routes/garant";
import Home from "./routes/home";
import Login from "./routes/login";
import NotFound from "./routes/not-found";
import PaymentPage from "./routes/payment";
import AllProducts from "./routes/products";
import Return from "./routes/return";
import SingleRoute from "./routes/single-route";
import Wishes from "./routes/wishes";

import "./sass/main.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./routes/layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Route path="/garant" element={<Garant />} />
          <Route path="/return" element={<Return />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
