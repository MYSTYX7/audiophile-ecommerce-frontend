import React from "react";
import { Link } from "react-router-dom";

const ProductButton = (props) => {
  return (
    <Link to={props.path} className={`product-btn product-btn--${props.class}`}>
      see product
    </Link>
  );
};

export default ProductButton;
