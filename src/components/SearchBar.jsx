import { useState } from 'react';
import toast from 'react-hot-toast';
import './SearchBar.modules.css';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Enter text for image search');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="searchbar">
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-form input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button className="search-form button" type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;