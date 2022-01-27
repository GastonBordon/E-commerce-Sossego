import React from "react";
import "./ItemDetail.css";

const ItemDetail = (props) => {
  const { name, category, stock, price, src, description } = props.product;
  return (
    <>
      <div className="card mb-3 cardItemContainer">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={src} class="img-fluid rounded-start" alt={name} />
          </div>
          <div className="col-md-8">
            <div class="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">Precio: ${price}</p>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemDetail;
