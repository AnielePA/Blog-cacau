import "./imageModal.css";
import { useImageModal } from "../context/modalContext";

function ImageModal() {
  const { modalImage, closeModal } = useImageModal();

  if (!modalImage) return null;

  return (
    <div className='modal-overlay' onClick={closeModal}>
      <div className='modal-content'>
        <img src={modalImage} alt='Imagem ampliada' />
      </div>
    </div>
  );
}

export default ImageModal;
