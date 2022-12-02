import React from "react";
import PropTypes from "prop-types";
import defaulImage from "../../../assets/default-image.jpeg";
const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaulImage} alt={name} />
      <h4>{name}</h4>
      <p>{price || 3.99}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: 3.99,
//   image: defaulImage,
// };

export default Product;
