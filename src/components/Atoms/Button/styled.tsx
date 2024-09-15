import styled from "styled-components";

export const StyledButton = styled.button({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: "#33a771",
  border: "1px solid #33a771",
  color: "white",

  "&:hover": {
    backgroundColor: "#29875a",
    border: "1px solid #29875a",
  },

  "&:disabled": {
    border: "1px solid gray",
    backgroundColor: "gray",
    color: "lightgray",
    cursor: "not-allowed",
  },
});
