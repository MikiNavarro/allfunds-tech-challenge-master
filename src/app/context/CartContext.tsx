"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { addItem, removeItem } from "@/utils";
import { getProductById, updateProduct } from "@/app/actions";

export const CartContext = createContext({
  cartItems: [],
  addToCart: (id) => {},
  decreaseQuantity: (id) => {},
  clearCart: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  useEffect(() => {
    const getTotalPrice = async () => {
      const items = await Promise.all(
        cartItems.map(async ({ id, quantity }) => {
          const product = await getProductById({ id });
          return { ...product, quantity };
        })
      );
      setTotalPrice(
        items.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
      );
    };

    if (isMounted) {
      getTotalPrice();
    }
  }, [cartItems, isMounted]);

  const addToCart = async (id) => {
    const product = await getProductById({ id });

    if (product.stock > 0) {
      setCartItems((prevCartItems) => addItem(prevCartItems, id));
      updateProduct({
        id,
        stock: product.stock - 1,
      });
    }
  };

  const decreaseQuantity = async (id) => {
    setCartItems((prevItems) => {
      return removeItem(prevItems, id);
    });
    const product = await getProductById({ id });
    return updateProduct({
      id,
      stock: product.stock + 1,
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
