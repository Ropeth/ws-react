const ImageModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="image-modal"
      onClick={onClose} // close when clicking outside the image
    >
      {" "}
      <div className="image-content" onClick={(e) => e.stopPropagation()}>
        <button
          id="stop"
          type="button"
          className="image-close-button"
          aria-label="Close"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
};

export default ImageModal;
