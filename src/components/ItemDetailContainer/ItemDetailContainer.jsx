import React, { useState, useEffect } from "react";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  let productId = id;
  console.log(productId);

  useEffect(() => {
    const db = getFirestore();

    const queryDb = doc(db, "productos", productId);
    getDoc(queryDb)
      .then((res) => setProduct({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productId]);

  console.log(product);
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
