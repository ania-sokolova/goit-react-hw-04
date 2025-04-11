import Modal from 'react-modal';
import './ImageModal.css';

Modal.setAppElement('#root'); 

function ImageModal({ isOpen, onClose, imageUrl, alt, author, likes, description }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} 
      contentLabel="Image Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
      shouldCloseOnOverlayClick={true}
    >
      <button className="close-button" onClick={onClose}>✕</button>
      <img src={imageUrl} alt={alt} className="modal-image" />
      <div className="modal-info">
        <h2>{alt || 'No title'}</h2>
        {description && <p><strong>Description:</strong> {description}</p>}
        <p><strong>Author:</strong> {author}</p>
        <p><strong>Likes:</strong> ❤️ {likes}</p>
      </div>
    </Modal>
  );
}

export default ImageModal;







/*{
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <img src={imageUrl} alt={alt} style={{ width: '100%' }} />
    </Modal>
  );
}

export default ImageModal;*/