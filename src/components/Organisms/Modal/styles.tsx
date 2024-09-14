import styled from "styled-components";

export const Dialog = styled.dialog({
  position: "fixed",
  top: "0",
  height: "100dvh",
  width: "100vw",
  backgroundColor: "rgba(16, 16, 17, 1)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
});

export const Container = styled.div({
  width: "100%",
  height: "100%",
  position: "relative",
  backgroundColor: "rgba(25, 25, 25, 1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 10px",
  gap: "30px",
  "@media (width > 768px)": {
    position: "relative",
    minWidth: "714px",
    width: "40%",
    padding: "100px 150px 150px",
    justifyContent: "center",
  },
});

export const ArrowLeftContainer = styled.button({
  backgroundColor: "transparent",
  border: "none",
  position: "absolute",
  top: "20px",
  left: "20px",
  cursor: "pointer",
});
