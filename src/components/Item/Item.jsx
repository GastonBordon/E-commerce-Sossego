import "./Item.css";
import { NavLink } from "react-router-dom";
import { memo } from "react";

const Item = memo(
  ({ prod }) => {
    return (
      <>
        <div className="card mb-3 cardItemContainer border border-warning m-2">
          <div className="row g-0 d-flex flex-column">
            <div>
              <img
                src={`${prod.src}`}
                className="img-fluid rounded-start"
                alt={`${prod.name}`}
              />
            </div>
            <div>
              <div className="card-body">
                <h5 className="card-title">{`${prod.name}`}</h5>
                <p className="card-text">Precio: {`${prod.price}`}</p>
                <NavLink to={`/item/${prod.id}`}>
                  <button className="btn btn-outline-warning">
                    Ver Producto
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },
  (prevProps, nextProps) =>
    prevProps.prod.modifyDate === nextProps.prod.modifyDate
);

export default Item;
