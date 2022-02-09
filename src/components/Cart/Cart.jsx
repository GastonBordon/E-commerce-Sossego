import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

export const Cart = () => {
  const { cartList, clearCartList } = useCartContext();
  return (
    <>
      <table className="table table striped">
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Precio</th>
        <th scope="col">Unidades</th>
        <th scope="col">Subtotal</th>
        <th scope="col"></th>
        {cartList.map((prod) => (
          <tbody id="table-body">
            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td>{prod.quantity}</td>
            <td>
              <button className="btn btn-danger buttonDelete" type="button">
                X
              </button>
            </td>
          </tbody>
        ))}
      </table>
      <button onClick={clearCartList}>Vaciar Carrito</button>
    </>
  );
};
