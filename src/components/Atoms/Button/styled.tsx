import styled from "styled-components";

export const StyledButton = styled.button({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "5px",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: "#2196f3",
  border: "1px solid #2196f3",
  color: "#141a21",

  "&:hover": {
    backgroundColor: "#2369aa",
    border: "1px solid #2369aa",
  },

  "&:disabled": {
    border: "1px solid gray",
    backgroundColor: "gray",
    color: "lightgray",
    cursor: "not-allowed",
  },
});
