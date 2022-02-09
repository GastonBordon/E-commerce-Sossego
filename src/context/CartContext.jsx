import { createContext, useContext, useState } from "react";

const cartContext = createContext([]);

export function useCartContext() {
  return useContext(cartContext);
}

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    if (noDuplicate(item)) {
      const changeQuantity = [...cartList];
      changeQuantity.forEach((x) => {
        if (x.id === item.id) {
          x.quantity += 1;
        }
      });
      return setCartList(changeQuantity);
    }
    return setCartList([...cartList, { item, quantity: 1 }]);
  }
  function clearCartList() {
    setCartList([]);
  }
  function noDuplicate(item) {
    const findCartList = cartList.find((i) => {
      return i.id === item.id;
    });
    return findCartList;
  }

  return (
    <cartContext.Provider value={{ cartList, addToCart, clearCartList }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
