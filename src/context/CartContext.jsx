import { createContext, useContext, useState, useEffect } from "react";

const cartContext = createContext([]);

export function useCartContext() {
  return useContext(cartContext);
}

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const listStorage = getStorage();

    if (listStorage) {
      const cartListStorage = JSON.parse(listStorage);
      setCartList([...cartListStorage]);
    }
  }, []);

  function saveStorage() {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }

  function getStorage() {
    return localStorage.getItem("cartList");
  }

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
    saveStorage();
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
    localStorage.clear();
  }

  function removeOne(id) {
    setCartList(cartList.filter((prod) => prod.item.id !== id));
    localStorage.removeItem(setCartList);
    saveStorage();
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
