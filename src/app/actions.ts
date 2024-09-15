"use server";

import { revalidatePath } from "next/cache";
import type { Item } from "@/types";

export const getProducts = async (): Promise<Item[]> => {
  const data = await fetch("http://localhost:3000/grocery");
  return await data.json();
};

export const getProductById = async ({ id }: { id: string }): Promise<Item> => {
  const data = await fetch(`http://localhost:3000/grocery/${id}`);
  return await data.json();
};

export const updateProduct = async ({
  id,
  stock,
  favorite,
}: {
  id: string;
  stock?: number;
  favorite?: 0 | "1";
}) => {
  const data = await fetch(`http://localhost:3000/grocery/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ stock, favorite }),
  });

  revalidatePath("/");

  return await data.json();
};
