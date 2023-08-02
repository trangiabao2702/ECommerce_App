import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react"

import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";

const Products = () => {
  const [menuProducts, setMenuProducts] = useState(ProductsData);
  const parent = useAutoAnimate()

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type))
  };

  return (
    <div className={css.container}>
      <img src={Plane} alt="Plane" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <div className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </div>

        <div className={css.list} ref={parent}>
          {menuProducts.map((product, i) => (
            <div className={css.product} key={i}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>${product.price}</span>
                <div>Show Now</div>
              </div>

              <img src={product.img} alt="Product" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
