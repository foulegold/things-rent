import React from "react";
import s from "./ProductList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../../globalCss/globalCss.css";

const obj = {
  product: [
    {
      product_id: 1,
      product_name: "Наушники",
      product_desc: "отличные наушники",
      product_img:
        "https://www.bt-deluxe.ru/upload/iblock/524/524c38286b3e68eacd74abcf437a9283.jpg",
      product_price: 1000,
      favorites: true,
    },
    {
      product_id: 2,
      product_name: "Телевизор",
      product_desc: "бомба",
      product_img: "https://cdn1.ozone.ru/s3/multimedia-p/6036967921.jpg",
      product_price: 500,
      favorites: false,
    },
  ],
};

const toggleFavorites = (id) => {
  obj.product.map((e, id) => {
    if ((e.product_id = id)) {
      if (e.favorites) {
        e.favorites = false;
      } else {
        e.favorites = true;
      }
      console.log(e.favorites);
    }
  });
};

const colorIconFavorites = (favorites) => {
  if (favorites)
    return <FontAwesomeIcon className={s.color_red} icon={faHeart} size="lg" />;

  return <FontAwesomeIcon className={s.color} icon={faHeart} size="lg" />;
};

const ProductList = (props) => {
  const elements = obj.product.map((el) => {
    return (
      <div key={el.product_id} className={s.list_element}>
        <button
          id={el.product_id}
          className={s.element_btn_favorites}
          onClick={(e) => {
            toggleFavorites(e.target.id);
          }}
        >
          {colorIconFavorites(el.favorites)}
        </button>

        <div className={s.element_img_inner}>
          <img className={s.element_img} src={el.product_img} />
        </div>
        <div className={s.line}></div>
        <h2 className={s.element_title}>{el.product_name}</h2>
        <h3 className={s.element_price}>{el.product_price} $</h3>
      </div>
    );
  });
  return (
    <div className={s.productList + " appContainer"}>
      <h1>Новые объявления</h1>
      <section className={s.productList_wrapper}>{elements}</section>
    </div>
  );
};

export default ProductList;
