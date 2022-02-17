import { useState } from "react";

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
    <div className="d-flex justify-content-center">
      <div className="card w-20">
        <div className="justify-content-center card-body bg-warning">
          <div className="card-title">{count}</div>
          <button className="btn btn-primary" onClick={handlerDecrease}>
            -
          </button>
          <button className="btn btn-primary" onClick={handlerIncrease}>
            +
          </button>
          <button className="d-block btn btn-danger" onClick={addItem}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
