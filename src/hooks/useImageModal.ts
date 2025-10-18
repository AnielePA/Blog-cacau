import { useState } from 'react';

export const useImageModal = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return {
    modalImage,
    openModal,
    closeModal,
  };
};