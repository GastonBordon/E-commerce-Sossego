import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function useCartContext() {
  return useContext(cartContext);
}

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    const index = cartList.findIndex((prod) => prod.item.id === item.item.id);
    if (index === -1) {
      item.key = item.id;
      return setCartList([...cartList, item]);
    } else {
      const cant = cartList[index].quantity;
      cartList[index].quantity = item.quantity + cant;
      const newCartList = [...cartList];
      setCartList(newCartList);
    }
  }

  const total = () => {
    return cartList.reduce(
      (acum, prod) => (acum = acum + prod.item.price * prod.quantity),
      0
    );
  };

  const quantity = () => {
    return cartList.reduce((acum, prod) => (acum += prod.quantity), 0);
  };

  function clearCartList() {
    setCartList([]);
  }

  function removeOne(id) {
    setCartList(cartList.filter((prod) => prod.item.id !== id));
  }
  return (
    <cartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCartList,
        removeOne,
        total,
        quantity,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
