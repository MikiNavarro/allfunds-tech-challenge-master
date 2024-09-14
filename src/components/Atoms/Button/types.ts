export interface ButtonProps {
  Svg?: JSX.Element;
  text?: string;
  onClick: () => void;
  disabled?: boolean;
}
