"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getProductById } from "@/app/actions";
import { Counter } from "@/components";
import {
  Container,
  InfoContainer,
  NameTypography,
  PriceTypography,
  ImageContainer,
} from "./styles";
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
      const data = await getProductById({ id });
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
        <Counter
          number={quantity}
          isDisabled={disabled}
          onClickMinus={() => {
            onClickMinus();
            setCurrentStock(currentStock + 1);
          }}
          onClickPlus={() => {
            onClickPlus();
            setCurrentStock(currentStock - 1);
          }}
        />
      </InfoContainer>
      <PriceTypography>{item.price * quantity} €</PriceTypography>
    </Container>
  );
};

export default CartItem;
