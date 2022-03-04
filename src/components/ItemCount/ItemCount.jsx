import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setcount] = useState(initial);

  const handlerDecrease = () => {
    if (count > initial) {
      setcount(count - 1);
    }
  };

  const handlerIncrease = () => {
    if (count < stock) {
      setcount(count + 1);
    }
  };

  const addItem = () => {
    if (stock >= 1) {
      onAdd(count);
    }
  };

  return (
    <div className="d-flex justify-content-center row">
      <div>
        <div className="justify-content-center card-body">
          <div className="card-title countNumber">Cantidad: {count}</div>
          <div className="row">
            <button
              className="btn-outline-warning btnCount"
              onClick={handlerIncrease}
            >
              +
            </button>
            <button
              className="btn-outline-warning btnCount"
              onClick={handlerDecrease}
            >
              -
            </button>
          </div>
          <div className="row">
            <button className="d-block btn btn-danger" onClick={addItem}>
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
