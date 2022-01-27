import React, { useState, useEffect } from "react";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let productId = 1;

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProduct(data.find((item) => item.id === productId));
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};
