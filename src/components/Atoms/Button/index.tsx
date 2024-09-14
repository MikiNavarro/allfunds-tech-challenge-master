"use client";

import { StyledButton } from "./styled";
import type { ButtonProps } from "./types";

const Button = ({ Svg, text, onClick, disabled = false }: ButtonProps) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {Svg}
    {text}
  </StyledButton>
);

export default Button;
