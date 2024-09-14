"use client";

import { createPortal } from "react-dom";
import { Container, Dialog, ArrowLeftContainer } from "./styles";
import { ArrowLeft, Cart } from "@/components";
import type { ModalProps } from "./types";

const Modal = ({ isOpen, onCloseModal }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <Dialog open aria-modal="true">
      <Container>
        <ArrowLeftContainer onClick={onCloseModal}>
          <ArrowLeft color="white" size={40} />
        </ArrowLeftContainer>
        <Cart />
      </Container>
    </Dialog>,
    document.body
  );
};

export default Modal;
