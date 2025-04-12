import ImageCard from './ImageCard';
import './ImageGallery.modules.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li className="image-gallery li" key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
