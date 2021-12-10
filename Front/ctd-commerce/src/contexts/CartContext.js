import React, { createContext, useContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  function insertInToCart(product) {
    let arrayProducts = [];
    const dataLocalStorage = localStorage.getItem('@CART');
    console.log(dataLocalStorage)
    if(dataLocalStorage){
      const data = JSON.parse(dataLocalStorage);
      arrayProducts = [...data]
    }

    arrayProducts.push(product);
    localStorage.setItem('@CART', JSON.stringify(arrayProducts));
  

    setProducts([...products, product[0]]);
    console.log('CONTEXT', product[0])
  }

  return (
    <CartContext.Provider value={{ insertInToCart, cart: "Carrinho", products }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}

export default CartContext;
