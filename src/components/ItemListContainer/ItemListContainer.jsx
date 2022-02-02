import { useState, useEffect } from "react";
import getProducts from "../../helpers/getProducts";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  const [listProducts, setListProducts] = useState([]);
  let categoryId = category;
  useEffect(() => {
    getProducts()
      .then((data) =>
        setListProducts(
          categoryId
            ? data.filter((elem) => elem.category === categoryId)
            : data
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
