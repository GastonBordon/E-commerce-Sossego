import "./Item.css";
import { NavLink } from "react-router-dom";

const Item = ({ id, name, price, src }) => {
  return (
    <>
      <div className="card mb-3 cardItemContainer">
        <div className="row g-0 d-flex flex-column">
          <div>
            <img src={src} className="img-fluid rounded-start" alt={name} />
          </div>
          <div>
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
