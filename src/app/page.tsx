import { MainPage } from "@/components";
import { getProducts } from "@/app/actions";

export default async function Page() {
  const products = await getProducts();

  return <MainPage products={products} />;
}
