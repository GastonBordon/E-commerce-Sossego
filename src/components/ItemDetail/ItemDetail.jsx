import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
  const { name, price, src, description } = props.product;

  function onAdd(cant) {
    console.log(cant);
  }

  return (
    // Me falta poner el loader, no me sale
    <>
      {props.product === {} ? (
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
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          </div>
        </div>
      )}
    </>
  );
};
export default ItemDetail;
