import { createContext, useContext } from "react";

export interface ModalContextType {
  modalImage: string | null;
  openModal: (imageSrc: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useImageModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useImageModal deve ser usado dentro de um ModalProvider");
  }
  return context;
};
