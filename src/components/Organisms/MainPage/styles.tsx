import styled from "styled-components";

export const Container = styled.div({
  height: "100vh",
  position: "relative",
  display: "flex",
});

export const Title = styled.h1({
  fontSize: "2rem",
  textAlign: "center",
  color: "white",
  letterSpacing: "1px",
});

export const List = styled.ul({
  overflowY: "auto",
  "&::-webkit-scrollbar": { display: "none" },
  marginTop: "24px",
  display: "flex",
  gap: "12px",
  width: "100%",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  "@media (width > 768px)": {
    gap: "24px",
  },
});

export const CartButtonContainer = styled.button({
  backgroundColor: "transparent",
  border: "none",
  position: "fixed",
  top: "20px",
  right: "20px",
  cursor: "pointer",
  "@media (width > 1200px)": {
    display: "none",
  },
});

export const CartButtonInnerContainer = styled.div({
  position: "relative",
});

export const QuantityContainer = styled.div({
  position: "absolute",
  top: "-8px",
  right: "-8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: "#2196f3",
  color: "white",
  fontSize: "0.8rem",
});

export const ProductsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  padding: "24px 0",
  width: "100%",
  "@media (width > 1200px)": {
    width: "70%",
    gap: "24px",
    padding: "24px 8px",
  },
});

export const CartContainer = styled.div({
  display: "none",
  "@media (width > 1200px)": {
    display: "flex",
    width: "30%",
  },
});

export const HeartButtonContainer = styled.div({
  width: "fit-content",
});
