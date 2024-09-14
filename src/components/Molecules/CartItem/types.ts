export interface CartItemProps {
  id: string;
  quantity: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
}
