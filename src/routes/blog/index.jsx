import React, { useEffect } from "react";
import Blog from "../../components/blog";
import Url from "../../components/url";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Url title={"Блог"} path={"/blog"} />
      <Blog count={6} btn={false} />
    </>
  );
};

export default BlogPage;
