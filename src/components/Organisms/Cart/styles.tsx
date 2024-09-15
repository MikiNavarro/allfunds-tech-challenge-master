import styled from "styled-components";

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100dvh",
  color: "white",
  justifyContent: "space-between",
  padding: "50px 16px",
  "@media (width > 1200px)": {
    padding: "24px 16px 50px",
  },
});

export const Title = styled.h2({
  display: "flex",
  justifyContent: "center",
  alignItems: "top",
  fontSize: "2rem",
  color: "white",
  letterSpacing: "1px",
  height: "10dvh",
});

export const List = styled.ul({
  width: "100%",
  height: "85dvh",
  margin: "0 0 16px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  overflowY: "auto",
  "&::-webkit-scrollbar": { display: "none" },
});

export const ButtonContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  height: "5dvh",
});

export const Message = styled.span({
  height: "85dvh",
  textAlign: "center",
  color: "white",
});
