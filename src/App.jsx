import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import ImageModal from './components/ImageModal';
import { Toaster } from 'react-hot-toast';
import './App.css'

const ACCESS_KEY = 'f1HEudA3z5y616iI9shkNkJ6-YGRUVWMUB0JdfUXu1o';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [modalImage, setModalImage] = useState(null);

useEffect(() => {
  if (!query) return;

  const fetchImages = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query,
          page,
          per_page: 12,
          client_id: ACCESS_KEY,
        },
      });

      const results = response.data.results;

      setImages((prev) => (page === 1 ? results : [...prev, ...results]));
        setError(null);
      } catch (err) {
        setError('Whoops, something went wrong! Please try reloading this page!');
      } finally {
        setIsLoading(false);
      }
    };

  fetchImages();
}, [query, page]);

const handleSearch = (newQuery) => {
  if (newQuery === query) return;
  setQuery(newQuery);
  setPage(1);
  setImages([]);
};

const handleLoadMore = () => {
  setPage((prev) => prev + 1);
};

const openModal = (image) => {
  setModalImage(image);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setModalImage(null);
};

return (
  <div>
    <Toaster />
    <SearchBar onSubmit={handleSearch} />
    {error ? (
      <ErrorMessage message={error} />
    ) : (
      <>
        <ImageGallery images={images} onImageClick={openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      </>
    )}

{modalImage && (
  <ImageModal
    isOpen={isModalOpen}
    onClose={closeModal}
    imageUrl={modalImage.urls.regular}
    alt={modalImage.alt_description}
    author={modalImage.user.name}
    authorAvatar={modalImage.user.profile_image.medium}
    authorLink={modalImage.user.links.html}
    likes={modalImage.likes}
    description={modalImage.description}
    shouldScrollLock={false}
  />
)}
  </div>
);
}

export default App;