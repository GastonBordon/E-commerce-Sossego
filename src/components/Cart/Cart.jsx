import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";
import {
  getFirestore,
  collection,
  addDoc,
  documentId,
  query,
  where,
  getDocs,
  writeBatch,
} from "firebase/firestore";

export const Cart = () => {
  const { cartList, clearCartList, removeOne, total } = useCartContext();

  const checkOut = async (e) => {
    e.preventDefault();

    let order = {};

    order.buyer = {
      name: "Gaston",
      email: "gaston@gmail.com",
      phone: "3333444499",
    };
    order.total = total();

    order.products = cartList.map((cartProducts) => {
      const id = cartProducts.item.id;
      const name = cartProducts.item.name;
      const price = cartProducts.item.price * cartProducts.quantity;

      return {
        id,
        name,
        price,
      };
    });
    const purchaseId = cartList[0].item.id;
    alert(`Tu número de orden de compra es: ${purchaseId}`);
    // alert(`Tu numero de orden es: ${purchaseId}`);

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, order).then((res) => console.log(res));

    const queryCollection = collection(db, "items");

    const queryUpdateStock = query(
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((itm) => itm.item.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryUpdateStock)
      .then((res) =>
        res.docs.forEach((resp) =>
          batch.update(resp.ref, {
            stock:
              res.data().stock -
              cartList.find((itm) => itm.item.id === res.id).quantity,
          })
        )
      )
      .catch((err) => console.log(err))
      //en finally vaciar el carrito y alert con compra exitosa
      .finally(() => clearCartList());
    batch.commit();
  };

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
                <tr>
                  <td>Total Compra</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>${total()}</td>
                </tr>
              </tfoot>
            </>
          </table>
          <button onClick={checkOut}>Terminar Compra</button>
          <button onClick={clearCartList}>Vaciar Carrito</button>
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
