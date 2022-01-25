import React from "react";

const Item = ({ id, name, stock, price, category, src }) => {
  console.log(src);
  return (
    <>
      <img src={src} alt={name} />
      <h1>{name}</h1>
      <h3>Precio:{price}</h3>
      <h3>Categoría:{category}</h3>
      <h3>Stock:{stock}</h3>
    </>
  );
};

export default Item;
