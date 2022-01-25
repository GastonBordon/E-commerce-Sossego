import { useState, useEffect } from "react";
import getProducts from "../../helpers/getProducts";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setListProducts(data))
      .catch((err) => console.log(err));
  }, []);

  function onAdd(cant) {
    console.log(cant);
  }

  return (
    <div className="bg-info">
      <h2>Bienvenido a la Ecommerce</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      <ItemList listProducts={listProducts} />
    </div>
  );
};
