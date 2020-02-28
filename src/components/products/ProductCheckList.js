import React from "react";
import PropTypes from "prop-types";
import CheckInput from "../common/CheckInput";

const ProductCheckList = ({ products, onChange }) => (
  <>
    <h2>Produtos</h2>
    {products.map(product => {
      return (
        <div key={product.id}>
          <CheckInput
            id={product.id}
            label={product.name}
            name={product.name}
            value={product.isEnable}
            onChange={onChange}
          />
        </div>
      );
    })}
  </>
);

ProductCheckList.propTypes = {
  products: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ProductCheckList;
