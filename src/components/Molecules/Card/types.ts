import type { Item } from "@/types";

export interface CardProps {
  id: Item["id"];
  title: Item["productName"];
  price: Item["price"];
  description: Item["productDescription"];
  stock: Item["stock"];
  alt: Item["productName"];
  src: Item["image_url"];
  favorite: Item["favorite"];
  onClickFavorite: ({
    id,
    favorite,
  }: {
    id: string;
    favorite: Item["favorite"];
  }) => void;
}
