import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [listProducts, setListProducts] = useState([]);
  let categoryId = category;

  useEffect(() => {
    const db = getFirestore();

    const queryCollection = collection(db, "productos");

    const queryFilter = !categoryId
      ? queryCollection
      : query(queryCollection, where("category", "==", categoryId));

    getDocs(queryFilter)
      .then((res) =>
        setListProducts(
          res.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        )
      )
      .catch((err) => console.log(err));
  }, [categoryId]);

  return (
    <div className="bg-info">
      {" "}
      <h2>Bienvenido a la Ecommerce</h2>
      <ItemList listProducts={listProducts} />
    </div>
  );
};
