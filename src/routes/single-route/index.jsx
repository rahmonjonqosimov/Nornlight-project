import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import Url from "../../components/url";
import Single from "../../components/single";

const SingleRoute = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  return (
    <>
      <Url path={`/product/${id}`} title={"Single Route"} />
      <Single data={data} isLoading={isLoading} />
    </>
  );
};

export default SingleRoute;
