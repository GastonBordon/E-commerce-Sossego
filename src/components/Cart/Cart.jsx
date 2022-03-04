import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Form from "../Form/Form";
import "./Cart.css";

export const Cart = () => {
  const { cartList, clearCartList, removeOne, total } = useCartContext();

  return (
    <>
      {cartList.length !== 0 ? (
        <>
          <h2 className="mt-4">Productos Seleccionados</h2>
          <table className="container table border border-2 border-warning">
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
                <tbody id="table-body" key={prod.item.id}>
                  <tr>
                    <td>
                      <img
                        src={`${prod.item.src}`}
                        className="imgCart"
                        alt={`${prod.item.name}`}
                      />
                    </td>
                    <td>{prod.item.name}</td>
                    <td>${prod.item.price}</td>
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
                <tr className="totalRow">
                  <td>Total Compra</td>
                  <td></td>
                  <td>${total()}</td>
                  <td></td>
                  <td className="row justify-content-end">
                    <button
                      onClick={clearCartList}
                      className="d-block btn btn-danger"
                    >
                      Vaciar Carrito
                    </button>
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </>
          </table>
          <div className="container mt-3">
            <Form />
          </div>
        </>
      ) : (
        <>
          <p>Carrito Vacío</p>
          <Link to="/">
            <button className="btn btn-success">Ir a Productos</button>
          </Link>
        </>
      )}
    </>
  );
};
