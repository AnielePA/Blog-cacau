import { useState, type ReactNode } from "react";

import { ModalContext } from "./modalContext";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.classList.remove("modal-open");
  };

  const value = { modalImage, openModal, closeModal };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
