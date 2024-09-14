"use client";

import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import { Button, CartItem } from "@/components";
import { ButtonContainer, Container, List, Message, Title } from "./styles";

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, clearCart, totalPrice } =
    useContext(CartContext);

  return (
    <Container>
      <Title>Cart</Title>
      {cartItems?.length === 0 ? (
        <Message>The cart is empty</Message>
      ) : (
        <List>
          {cartItems?.map(({ id, quantity }) => (
            <CartItem
              key={id}
              id={id}
              quantity={quantity}
              onClickMinus={() => decreaseQuantity(id)}
              onClickPlus={() => addToCart(id)}
            />
          ))}
        </List>
      )}
      <ButtonContainer>
        <Button text={`Checkout ${totalPrice} €`} onClick={clearCart} />
      </ButtonContainer>
    </Container>
  );
};

export default Cart;
