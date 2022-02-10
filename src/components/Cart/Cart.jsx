import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

export const Cart = () => {
  const { cartList, clearCartList, removeOne } = useCartContext();
    return (
      <>
        <table className="table table striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Unidades</th>
              <th scope="col">Subtotal</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {cartList.map((prod) => (
            <tbody id="table-body">
              <tr>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger buttonDelete"
                    type="button"
                    onClick={removeOne(prod)}
                  >
                    X
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <button onClick={clearCartList}>Vaciar Carrito</button>
      </>
    );
  }
};
