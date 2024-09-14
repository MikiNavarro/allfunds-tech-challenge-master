import styled from "styled-components";

export const Container = styled.div({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const ImageContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20%",
});

export const InfoContainer = styled.div({
  width: "60%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

export const NameTypography = styled.span({
  fontSize: ".9rem",
  fontWeight: "bold",
  textAlign: "center",
});

export const ButtonsContainer = styled.div({
  display: "flex",
  gap: "16px",
  alignItems: "center",
});

export const PriceTypography = styled.span({
  width: "20%",
});
