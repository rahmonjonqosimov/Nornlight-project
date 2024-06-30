import React, { useEffect } from "react";
import Brend from "../../components/brend";
import Blog from "../../components/blog";
import Url from "../../components/url";
import About from "../../components/about";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Url title={"О компании"} path={"/about"} />
      <About />
      <Brend />
      <Blog />
    </>
  );
};

export default AboutPage;
