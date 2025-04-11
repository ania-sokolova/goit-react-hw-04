import ImageCard from './ImageCard';
import './ImageGallery.modules.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="image-gallery">
      {images.map((image) => (
        <li className="image-gallery li"  key={image.id} onClick={() => onImageClick(image)}>
          <div>
            <img className="image-gallery img" src={image.urls.small} alt={image.alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
}
  
  export default ImageGallery;

