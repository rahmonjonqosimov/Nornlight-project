import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Single from "../../components/single";
import SingleRouteSkeleton from "../../components/skeleton/single-route-skeleton";
import Url from "../../components/url";
import { useGetProductByIdQuery } from "../../context/api/productApi";

const SingleRoute = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetProductByIdQuery(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      <Url path={`/product/${id}`} title={"Single Route"} />
      {isFetching ? <SingleRouteSkeleton /> : <></>}
      {isLoading ? (
        <>
          <SingleRouteSkeleton />
          <div style={{ height: "300px" }}></div>
        </>
      ) : (
        <Single data={data} isLoading={isLoading} id={id} />
      )}

      <div className="product__wrapper">
        <div className="product__card"></div>
      </div>
    </>
  );
};

export default SingleRoute;
