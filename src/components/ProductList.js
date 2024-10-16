import React from 'react';

function ProductList() {
  const products = [
    { id: 1, name: 'Spider Plant', price: 12, image: '/path_to_image' },
    { id: 2, name: 'Peace Lily', price: 18, image: '/path_to_image' },
    { id: 3, name: 'Snake Plant', price: 15, image: '/path_to_image' },
  ];

  return (
    <div className="product-list">
      <h2>Our Products</h2>
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
