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
  (prevProp, nextProp) =>
    prevProp.listProducts.length === nextProp.listProducts.length
);

export default ItemList;
