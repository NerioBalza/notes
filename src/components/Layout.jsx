import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, onApp }) => {
  return (
    <>
      <Header /> {children}
      {!onApp ? <Footer /> : null}
    </>
  );
};

export default Layout;
