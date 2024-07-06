import React, { useEffect, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

import { BsCart, BsCartCheck } from "react-icons/bs";

import { GoArrowRight } from "react-icons/go";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGetCategotyQuery } from "../../context/api/categoryApi";
import { addToCart } from "../../context/slices/cartSlice";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import CategoryData from "../category-data";
import Detail from "../detail";
import Model from "../model";
import Path from "../path";
import ProductsSkeleton from "../skeleton/products-skeleton";

const Products = ({
  data: products,
  isLoading,
  admin,
  setDeleteProduct,
  setEditProduct,
}) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((s) => s.wishlist.value);
  const cart = useSelector((s) => s.cart.value);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const { data } = useGetCategotyQuery();
  const [limit, setLimit] = useState(+sessionStorage.getItem("limit") || 1);
  const [loading, setLoading] = useState(false);
  const [categorySort, setCategorySort] = useState(null);
  const [model, setModel] = useState(null);
  useEffect(() => {
    if (category !== "all") {
      setCategorySort(
        products?.filter((el) =>
          el.category.toLowerCase().includes(
            category
              .split(" ")
              .map((item) => item.toLowerCase())
              .join("-")
          )
        )
      );
    } else {
      setCategorySort(products);
    }
  }, [category]);

  let isCategory = null;
  if (pathname.includes("wishlist")) {
    isCategory = products;
  } else {
    isCategory = categorySort ? categorySort : products;
  }

  const productItems = isCategory?.slice(0, limit * 8)?.map((product) => (
    <div key={product.id} className="product__card">
      <div className="product__image">
        <img
          onClick={() => setModel(product)}
          src={product.images[0]}
          alt={product.title}
        />
        {pathname.includes("admin") ? (
          <></>
        ) : wishlist.some((el) => el.id === product.id) ? (
          <IoIosHeart
            style={{ color: "#454545" }}
            onClick={() => dispatch(toggleHeart(product))}
          />
        ) : (
          <IoIosHeartEmpty onClick={() => dispatch(toggleHeart(product))} />
        )}
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
            <button onClick={() => dispatch(addToCart(product))}>
              {cart.some((el) => el.id === product.id) ? (
                <BsCartCheck style={{ fontSize: "20px" }} />
              ) : (
                <BsCart style={{ fontSize: "20px" }} />
              )}
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
            btn={pathname.includes("products") ? false : true}
          />
          {!pathname.includes("wishlist") ? (
            <CategoryData
              category={category}
              setCategory={setCategory}
              data={data}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {!isCategory?.length ? (
        <div className="container category__not">
          <h2>Товаров не найдено !</h2>
        </div>
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

        {!pathname.includes("wishlist") ? (
          <>
            {limit * 8 >= isCategory?.length ? (
              <></>
            ) : (
              <button onClick={handleLimitIncrement} className="see__more">
                {loading || isLoading ? "Загрузка..." : "Узнать больше"}
              </button>
            )}
          </>
        ) : (
          <></>
        )}
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
      {model ? (
        <Model close={() => setModel(null)}>
          <Detail model={model} setModel={setModel} />
        </Model>
      ) : (
        <></>
      )}
    </>
  );
};

export default Products;
