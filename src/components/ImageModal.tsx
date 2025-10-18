import "./imageModal.css";

interface ImageModalProps {
  modalImage: string | null;
  closeModal: () => void;
}

function ImageModal({ modalImage, closeModal }: ImageModalProps) {
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
