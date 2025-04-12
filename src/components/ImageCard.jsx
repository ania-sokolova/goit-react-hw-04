import './ImageCard.modules.css';

function ImageCard({ image, onClick }) {
  return (
    <div className="image-card" onClick={onClick}>
      <img className="image-card img" src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;