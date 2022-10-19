import React from "react";

function ProductsList({ products, setCart, cart }) {
  const addCart = (product) => {
    const addList = [...cart, { ...product }];
    setCart(addList);
  };

  const List = products.map((product, index) => (
    <div key={index} className="card">
      <img src={product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <button onClick={() => addCart(product)} className="add btn btn-dark">
          Add to Cart
        </button>
      </div>
    </div>
  ));
  return <>{List}</>;
}

export default ProductsList;
