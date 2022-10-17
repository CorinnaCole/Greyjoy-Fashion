import React, { useState, useEffect } from 'react';

const ProductName = ({productInfo}) => {

  return (
    <div>
      <>Stars *****</>
      <h4 className = "category">CATEGORY: {productInfo.category}</h4>
      <h1>{productInfo.name}</h1>
      <p>${productInfo.default_price}</p>
    </div>
  );
};

export default ProductName;