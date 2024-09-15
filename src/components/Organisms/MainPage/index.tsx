"use client";

import { useContext, useState } from "react";
import { updateProduct } from "@/app/actions";
import { CartContext } from "@/app/context/CartContext";
import { Card, Cart, Modal, ShoppingCart } from "@/components";
import {
  CartButtonContainer,
  CartButtonInnerContainer,
  CartContainer,
  Container,
  List,
  ProductsContainer,
  QuantityContainer,
  Title,
} from "./styles";
import type { MainPageProps } from "./types";

const MainPage = ({ products }: MainPageProps) => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onClickFavorite = ({ id, favorite }) => {
    const updateFavorite = async () => {
      await updateProduct({
        id,
        favorite,
      });
    };
    updateFavorite();
  };

  const quantity = cartItems.length;

  return (
    <Container>
      <CartButtonContainer onClick={onOpenModal}>
        <CartButtonInnerContainer>
          <QuantityContainer>{quantity}</QuantityContainer>
          <ShoppingCart size={36} color="white" />
        </CartButtonInnerContainer>
      </CartButtonContainer>
      <Modal isOpen={isOpen} onCloseModal={onCloseModal} />
      <ProductsContainer>
        <Title>Products</Title>
        <List>
          {products.map(
            ({
              id,
              productName,
              price,
              productDescription,
              image_url,
              stock,
              favorite,
            }) => (
              <Card
                key={id}
                id={id}
                title={productName}
                price={price}
                description={productDescription}
                stock={stock}
                alt={productName}
                src={image_url}
                favorite={favorite}
                onClickFavorite={onClickFavorite}
              />
            )
          )}
        </List>
      </ProductsContainer>
      <CartContainer>
        <Cart />
      </CartContainer>
    </Container>
  );
};

export default MainPage;
