import { memo } from "react";
import Item from "../Item/Item";

const ItemList = memo(
  ({ listProducts }) => {
    return (
      <>
        {listProducts.length ? (
          listProducts.map((prod) => <Item key={`${prod.id}`} prod={prod} />)
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </>
    );
  },
  (prevProp, nextProp) => {
    return prevProp.listProducts.length === 0 ||
      nextProp.listProducts.length === 0
      ? false
      : nextProp.listProducts[0]?.category ===
          prevProp.listProducts[0]?.category;
  }
);

export default ItemList;
