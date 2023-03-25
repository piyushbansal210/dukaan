import React from "react";

import "./style.css";

import { FEATURE } from "../../assets/data/Feature";
import FeatureComponent from "../../components/FeatureComponent";

export default function Features() {
  console.log(FEATURE);
  return (
    <div className="features">
      <div className="feature-grid-container ">
        {FEATURE.map((item) => {
          return <FeatureComponent data={item} />;
        })}
      </div>
    </div>
  );
}
