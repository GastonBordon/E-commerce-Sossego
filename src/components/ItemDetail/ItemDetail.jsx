import { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [counter] = useState(0);
  const { addToCart } = useCartContext();

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
        <div className="mb-3 cardItemContainer">
          <div className="d-flex flex-row justify-content-center">
            <img
              src={src}
              className="img-fluid imgDetailSize rounded-start"
              alt={name}
            />
            <div className="d-flex flex-column">
              <div className="card card-body cardDetail">
                <h4 className="card-title">{name}</h4>
                <p className="card-text productPrice">Precio: ${price}</p>
                <div>
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
              </div>
            </div>
          </div>
          <p className="description">{description}</p>
        </div>
      )}
    </>
  );
};
export default ItemDetail;
