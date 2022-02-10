import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

export const Cart = () => {
  const { cartList, clearCartList, removeOne, sumTotal } = useCartContext();
  return (
    <>
      {cartList.length !== 0 ? (
        <>
          <table className="table table striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
                <th scope="col">Unidades</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <>
              {cartList.map((prod) => (
                <tbody id="table-body">
                  <tr>
                    <td>{prod.item.id}</td>
                    <td>{prod.item.name}</td>
                    <td>{prod.item.price}</td>
                    <td>{prod.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger buttonDelete"
                        type="button"
                        onClick={() => removeOne(prod.item.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
              <tfoot>
                <tr>
                  <td>Total Compra</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>${sumTotal()}</td>
                </tr>
              </tfoot>
            </>
          </table>
          <button onClick={clearCartList}>Vaciar Carrito</button>
        </>
      ) : (
        <h2>Para realizar una compra, agregue productos.</h2>
      )}
    </>
  );
};
