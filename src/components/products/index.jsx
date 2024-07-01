import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import Path from "../path";
import CategoryData from "../category-data";
import { useGetCategotyQuery } from "../../context/api/categoryApi";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import ProductsSkeleton from "../skeleton/products-skeleton";

const Products = ({
  data: products,
  isLoading,
  admin,
  setDeleteProduct,
  setEditProduct,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const { data } = useGetCategotyQuery();
  const [limit, setLimit] = useState(+sessionStorage.getItem("limit") || 1);
  const [loading, setLoading] = useState(false);

  const productItems = products?.slice(0, limit * 8)?.map((product) => (
    <div key={product.id} className="product__card">
      <div className="product__image">
        <img src={product.images[0]} alt={product.title} />
        {pathname.includes("admin") ? <></> : <IoHeartOutline />}
      </div>
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="product__desc"
      >
        {product.title}
      </div>
      <div className="product__row">
        <div className="product__price">
          <span>{parseInt(product.price * 1.2)}$</span>
          <h4>{product.price}₽</h4>
        </div>

        {admin ? (
          <>
            <div
              style={{ marginTop: "0", gap: "8px" }}
              className="btn__wrapper"
            >
              <button onClick={() => setEditProduct(product)}>
                <MdOutlineModeEdit />
              </button>
              <button onClick={() => setDeleteProduct(product)}>
                <MdDeleteOutline />
              </button>
            </div>
          </>
        ) : (
          <>
            <button>
              <IoCartOutline />
            </button>
          </>
        )}
      </div>
    </div>
  ));

  const handleLimitIncrement = () => {
    setLoading(true);

    setTimeout(() => {
      setLimit((p) => p + 1);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    sessionStorage.setItem("limit", limit);
  }, [loading]);

  return (
    <>
      {!pathname.includes("admin") ? (
        <>
          <Path
            title={"Популярные товары"}
            url={"products"}
            btnTitle={"Все товары"}
          />
          <CategoryData
            category={category}
            setCategory={setCategory}
            data={data}
          />
        </>
      ) : (
        <></>
      )}

      <section id="products">
        <div
          className={
            !pathname.includes("admin") ? "container" : "admin__container"
          }
        >
          <div className="product__wrapper">{productItems}</div>
        </div>

        {isLoading ? <ProductsSkeleton /> : <></>}

        {loading ? (
          <>
            <ProductsSkeleton />
          </>
        ) : (
          <></>
        )}

        <button
          disabled={limit * 8 >= products?.length}
          onClick={handleLimitIncrement}
          className="see__more"
        >
          {limit * 8 >= products?.length
            ? "Maxsulotlar tugadi"
            : `${loading || isLoading ? "Loading..." : "See More"}`}
        </button>
      </section>

      {!pathname.includes("admin") ? (
        <Link to={"/products"} className="phone__link">
          <button>
            Все товары <GoArrowRight />
          </button>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default Products;
