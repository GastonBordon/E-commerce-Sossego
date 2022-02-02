import React from "react";
import "./Item.css";
import { NavLink } from "react-router-dom";

const Item = ({ id, name, stock, price, category, src }) => {
  console.log(src);
  return (
    <>
      <div className="card mb-3 cardItemContainer">
        <div className="row g-0">
          <div className="col-md-4">
            <NavLink to={`/item/${id}`}>
              <img src={src} className="img-fluid rounded-start" alt={name} />
            </NavLink>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Precio: ${price}</p>
              <NavLink to={`/item/${id}`}>
                <button>Ver Producto</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
