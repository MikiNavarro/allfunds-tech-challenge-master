"use client";

import { Button, Minus, Plus } from "@/components";
import { ButtonsContainer } from "./styles";
import { CounterProps } from "./types";

const Counter = ({
  number,
  isDisabled,
  onClickMinus,
  onClickPlus,
}: CounterProps) => (
  <ButtonsContainer>
    <Button Svg={<Minus size={16} />} onClick={onClickMinus} />
    <p>{number}</p>
    <Button
      Svg={<Plus size={16} />}
      onClick={onClickPlus}
      disabled={isDisabled}
    />
  </ButtonsContainer>
);

export default Counter;
