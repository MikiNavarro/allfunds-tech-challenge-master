"use client";

import { useContext, useEffect } from "react";
import { CartContext } from "@/app/context/CartContext";
import { Plus, Button } from "@/components";
import {
  Container,
  Description,
  FooterCard,
  ImageContainer,
  InnerContainer,
  ItemsLeft,
  NamePriceContainer,
  Price,
  StyledImage,
  Title,
} from "./styles";
import type { CardProps } from "./types";

const Card = ({
  id,
  title,
  price,
  description,
  stock,
  alt,
  src,
}: CardProps) => {
  const { addToCart } = useContext(CartContext);
  const disabled = stock === 0;

  return (
    <Container>
      <ImageContainer>
        <StyledImage
          width={200}
          height={70}
          alt={alt}
          src={src}
          quality={100}
        />
      </ImageContainer>
      <InnerContainer>
        <NamePriceContainer>
          <Title>{title}</Title>
          <Price>{price}€</Price>
        </NamePriceContainer>
        <Description>{description}</Description>
        <FooterCard>
          <ItemsLeft>{stock} left</ItemsLeft>
          <Button
            Svg={<Plus size={12} color={disabled ? "lightgray" : "#141a21"} />}
            text="Add"
            onClick={() => addToCart(id)}
            disabled={disabled}
          />
        </FooterCard>
      </InnerContainer>
    </Container>
  );
};

export default Card;
