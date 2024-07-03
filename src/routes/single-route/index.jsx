import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/productApi";
import Url from "../../components/url";
import Single from "../../components/single";
import SingleRouteSkeleton from "../../components/skeleton/single-route-skeleton";

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
    </>
  );
};

export default SingleRoute;
