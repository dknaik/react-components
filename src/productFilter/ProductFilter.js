import React, { useState } from "react";
import "./productfilter.css";
import { items } from "./products.js";
const ProductFilter = () => {
  const [allProducts, setAllProducts] = useState(items);
  const [btnStatus, setBtnStatus] = useState(null);

  console.log("products", allProducts);
  const filters = ["bags", "watches", "Sports", "Sunglasses"];
  const FilterProducts = (item, index) => {
    setBtnStatus(index);

    const checkfCategory = allProducts.every((val) =>
      val.category.toLowerCase().includes(item.toLowerCase())
    );
    console.log("checkfCategory", checkfCategory);
    if (checkfCategory) {
      setBtnStatus(null);
      setAllProducts(items);
      return;
    }

    const result = items.filter(
      (val) => val.category.toLowerCase() == item.toLowerCase()
    );
    console.log(result);
    setAllProducts(result);
  };
  return (
    <div className="filters">
      <div className="filter-btns">
        {filters.flatMap((item, index) => {
          return (
            <div key={index}>
              <button
                style={{
                  background: btnStatus == index ? "black" : "",
                  color: btnStatus == index ? "white" : "",
                }}
                onClick={() => FilterProducts(item, index)}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>

      <div className="product-container">
        {allProducts.map((val) => {
          return (
            <div className="product-card">
              <span>{val.name}</span>
              <span>{val.category}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
