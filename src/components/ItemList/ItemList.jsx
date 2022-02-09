import Item from "../Item/Item";
const ItemList = ({ listProducts }) => {
  //agregar memo!!!
  return (
    <>
      {listProducts.length ? (
        listProducts.map((elem) => (
          <Item
            key={elem.id}
            name={elem.name}
            stock={elem.stock}
            price={elem.price}
            category={elem.category}
            id={elem.id}
            src={elem.src}
          />
        ))
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default ItemList;
