import React from "react";

const ItemDetail = (props) => {
  const { name, category, stock, price, src } = props.product;
  return (
    <>
      <img src={src} alt={name} />
      <h1>{name}</h1>
      <h3>Precio: ${price}</h3>
      <h3>Categoría: {category}</h3>
      <h3>Stock: {stock}</h3>
    </>
  );
};
export default ItemDetail;
