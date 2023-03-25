import React from "react";

import "./style.css";

const FeatureComponent = (props) => {
  const { title, description, Image } = props.data;
  // console.log(imageUrl);
  return (
    <div className="feature">
      <Image />
      <div className="title_feature">{title}</div>
      <span>{description}</span>
    </div>
  );
};

export default FeatureComponent;
