import "./Form.css";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
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

const Form = () => {
  const [id, setId] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    surname: "",
    email: "",
    validateEmail: "",
    phone: "",
    adress: "",
  });

  const { cartList, clearCartList, total } = useCartContext();

  const checkOut = async (e) => {
    e.preventDefault();

    let order = {};

    order.buyer = dataForm;
    order.total = total();

    order.products = cartList.map((cartProduct) => {
      const id = cartProduct.item.id;
      const name = cartProduct.item.name;
      const price = cartProduct.item.price * cartProduct.quantity;
      const quantity = cartProduct.quantity;

      return {
        id,
        name,
        price,
        quantity,
      };
    });

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, order)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err));

    setTimeout(async () => {
      const queryCollection = collection(db, "productos");

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
        .then((res) => {
          res.docs.forEach((res) => {
            batch.update(res.ref, {
              stock:
                res.data().stock -
                cartList.find((itm) => itm.item.id === res.id).quantity,
            });
          });
          batch.commit();
        })
        .catch((err) => console.log(err))
        .finally(
          () =>
            setDataForm({
              name: "",
              surname: "",
              email: "",
              validateEmail: "",
              phone: "",
              adress: "",
            }),
          clearCartList()
        );
    }, 3000);
  };

  const handleChange = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {id !== "" && (
        <div className="alert alert-warning" role="alert">
          Compra Exitosa!!! Tu número de compra es: {id}
        </div>
      )}
      <h2 className="mt-4">Complete los datos de envío</h2>
      <form
        onSubmit={checkOut}
        className="row g-3 needs- mt-4 mb-4 p-3 border border-1 border-warning"
      >
        <div className="col-md-4">
          <label className="form-label">
            Nombre
            <input
              type="text"
              name="name"
              placeholder="Ingrese Nombre..."
              className="form-control"
              onChange={handleChange}
              value={dataForm.name}
              required
            />
          </label>
          <label className="form-label">
            Email
            <input
              type="email"
              name="email"
              placeholder="Ingrese Email..."
              className="form-control"
              onChange={handleChange}
              value={dataForm.email}
              required
            />
          </label>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label className="form-label">
            Apellido
            <input
              type="text"
              name="surname"
              placeholder="Ingrese Apellido..."
              className="form-control"
              onChange={handleChange}
              value={dataForm.surname}
              required
            />
          </label>
          <label className="form-label">
            Email
            <input
              type="email"
              name="validateEmail"
              placeholder="Reingrese Email..."
              className="form-control"
              onChange={handleChange}
              value={dataForm.validateEmail}
              required
            />
          </label>
        </div>
        <div className="col-md-3">
          <label className="form-label">
            Teléfono
            <input
              type="number"
              name="phone"
              placeholder="Ingrese Teléfono..."
              className="form-control"
              onChange={handleChange}
              value={dataForm.phone}
              required
            />
          </label>

          <label className="form-label">
            Dirección
            <input
              type="text"
              name="adress"
              placeholder="Ingrese Dirección"
              className="form-control"
              onChange={handleChange}
              value={dataForm.adress}
              required
            />
          </label>
        </div>
        <div className="col-md-6">
          <div className="form-check">
            <label className="form-check-label">
              Estoy de acuerdo con los términos y condiciones.
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-warning">Terminar Compra</button>
        </div>
      </form>
    </>
  );
};

export default Form;
