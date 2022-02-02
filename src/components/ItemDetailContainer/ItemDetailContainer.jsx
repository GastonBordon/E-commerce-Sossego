import React, { useState, useEffect } from "react";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  let productId = parseInt(id);
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProduct(data.find((item) => item.id === productId));
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="d-flex">
      <ItemDetail product={product} />
    </div>
  );
};
