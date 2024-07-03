import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
