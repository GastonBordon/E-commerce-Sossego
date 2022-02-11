import React, { useState, useEffect } from "react";
import getProducts from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  console.log("itemdetailcontainer");
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  let productId = parseInt(id);
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProduct(data.find((item) => item.id === productId));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productId]);

  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="d-flex">
          <ItemDetail product={product} />
        </div>
      )}
    </>
  );
};
