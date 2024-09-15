"use client";

import { useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import { Plus, Button, Heart } from "@/components";
import {
  Container,
  Description,
  FooterCard,
  HeartContainer,
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
  favorite,
  onClickFavorite,
}: CardProps) => {
  const { addToCart } = useContext(CartContext);
  const disabled = stock === 0;

  return (
    <Container>
      <HeartContainer
        onClick={() =>
          onClickFavorite({ id, favorite: favorite === "1" ? 0 : "1" })
        }
        $isFavorite={favorite}
      >
        <Heart size={24} color={favorite ? "red" : "white"} />
      </HeartContainer>
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
            Svg={<Plus size={12} color={disabled ? "lightgray" : "white"} />}
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
