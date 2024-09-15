import { Item } from "@/types";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  border: "1px solid #1c252e",
  maxWidth: "200px",
  width: "100%",
  height: "220px",
  alignItems: "center",
  borderRadius: "6px",
  backgroundColor: "#1c252e",
  color: "white",
  transition: "all 300ms",
  "&:hover": {
    boxShadow: "6px 6px 10px 0px rgba(51, 167, 113, 0.4)",
    transition: "all 300ms",
  },

  "@keyframes show": {
    from: { opacity: 0, scale: "50%" },
    to: { opacity: 1, scale: "100%" },
  },

  "view-timeline-name": "--reveal",

  animationName: "show",
  animationFillMode: "both",

  "animation-timeline": "--reveal",
  animationRange: "entry 10% cover 25%",
});

export const StyledImage = styled(Image)({
  objectFit: "cover",
  borderRadius: "6px 6px 0 0",
});

export const ImageContainer = styled.div({
  width: "100%",
  display: "flex",
});

export const InnerContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  padding: "12px",
  justifyContent: "space-between",
});

export const NamePriceContainer = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Title = styled.h3({
  display: "flex",
  alignItems: "center",
  fontSize: ".9rem",
  width: "75%",
  fontWeight: "bold",
});

export const Price = styled.span({
  display: "flex",
  alignItems: "center",
  fontSize: "1.15rem",
});

export const Description = styled.p({
  maxWidth: "100%",
  fontSize: ".75rem",
  display: "-webkit-box",
  "-webkit-line-clamp": "2",
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  opacity: 0.7,
});

export const FooterCard = styled.div({
  display: "flex",
  width: "100%",
  alignItems: "end",
  justifyContent: "center",
  "@media (width > 768px)": {
    justifyContent: "space-between",
  },
});

export const ItemsLeft = styled.span({
  display: "none",
  fontSize: ".8rem",
  "@media (width > 768px)": {
    display: "block",
  },
});

export const HeartContainer = styled.div<{ $isFavorite: Item["favorite"] }>(
  ({ $isFavorite }) => ({
    position: "absolute",
    top: "5px",
    right: "5px",
    cursor: "pointer",

    "&:hover": {
      "> svg": {
        stroke: $isFavorite === "1" ? "white" : "red",
      },
      " path": {
        fill: $isFavorite === "1" ? "white" : "red",
      },
    },
  })
);
