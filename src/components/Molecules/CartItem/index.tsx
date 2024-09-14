"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Minus, Plus } from "@/components";
import {
  ButtonsContainer,
  Container,
  InfoContainer,
  NameTypography,
  PriceTypography,
  ImageContainer,
} from "./styles";
import { Item } from "@/types";
import type { CartItemProps } from "./types";

const CartItem = ({
  id,
  quantity,
  onClickMinus,
  onClickPlus,
}: CartItemProps) => {
  const [item, setItem] = useState(null);
  const [currentStock, setCurrentStock] = useState(0);

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(`http://localhost:3000/grocery/${id}`);
      const data: Item = await response.json();
      setItem(data);
      setCurrentStock(data.stock);
    }
    fetchItem();
  }, []);

  if (!item) return null;

  const disabled = currentStock === 0;

  return (
    <Container>
      <ImageContainer>
        <Image
          width={75}
          height={75}
          alt={item.productName}
          src={item.image_url}
          quality={100}
        />
      </ImageContainer>
      <InfoContainer>
        <NameTypography>{item.productName}</NameTypography>
        <ButtonsContainer>
          <Button
            Svg={<Minus size={16} />}
            onClick={() => {
              onClickMinus();
              setCurrentStock(currentStock + 1);
            }}
          />
          <p>{quantity}</p>
          <Button
            Svg={<Plus size={16} />}
            onClick={() => {
              onClickPlus();
              setCurrentStock(currentStock - 1);
            }}
            disabled={disabled}
          />
        </ButtonsContainer>
      </InfoContainer>
      <PriceTypography>{item.price * quantity} €</PriceTypography>
    </Container>
  );
};

export default CartItem;
