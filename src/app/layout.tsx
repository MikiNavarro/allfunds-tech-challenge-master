import StyledComponentsRegistry from "@/lib/registry";
import CartProvider from "@/app/context/CartContext";
import "./global.css";

export const metadata = {
  title: "allfunds-tech-challenge-master",
  description:
    "The user of the web application should be able to see a list of products and add them to the shopping cart.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <CartProvider>{children}</CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
