import React from "react";
import "./style.css";

import { PRODUCTS } from "../../assets/data/ProductsData";
import ProductComponent from "../../components/ProductComponent.js";

export default function Products() {
  return (
    <div className="product_outer_container">
      <div className="product">Try our other free products</div>
      <div class="grid-container">
        {PRODUCTS.map((item) => {
          return <ProductComponent data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}
