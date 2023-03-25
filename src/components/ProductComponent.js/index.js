import React from "react";
import "./style.css";

export default function ProductComponent(props) {
  const { title, description, imageUrl } = props.data;
  return (
    <div className="grid-item">
      <img src={imageUrl} className="image_product" alt={"products_dukaan"} />
      <div className="title_product">{title}</div>
      <p className="description_product">{description}</p>
    </div>
  );
}
