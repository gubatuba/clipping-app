import React from "react";
import PropTypes from "prop-types";
import CheckInput from "../common/CheckInput";

const ProductCheckList = ({ products }) => (
  <>
    <h2>Produtos</h2>
    {products.map(product => {
      return (
        <div key={product.id}>
          <CheckInput label={product.name} name={product.name} value={false} />
        </div>
      );
    })}
  </>
);

ProductCheckList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductCheckList;
