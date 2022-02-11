import React, { useState, memo } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(0);
  const { cartList, addToCart } = useCartContext();

  const { name, price, src, description, stock } = product;

  function onAdd(cant) {
    addToCart({ item: product, quantity: cant });
  }
  return (
    // Me falta poner el loader, no me sale
    <>
      {product === {} ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="card mb-3 cardItemContainer">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={src} className="img-fluid rounded-start" alt={name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">{description}</p>
              </div>
            </div>
          </div>
          {counter === 0 ? (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          ) : (
            <>
              <Link to="/cart">
                <button>Terminar Compra</button>
              </Link>
              <Link to="/">
                <button>Seguir Comprando</button>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default ItemDetail;
