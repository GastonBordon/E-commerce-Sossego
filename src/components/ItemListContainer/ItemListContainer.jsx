import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  function onAdd(cant) {
    console.log(cant);
  }

  return (
    <div className="bg-info">
      <h2>Bienvenido a la Ecommerce</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  );
};
