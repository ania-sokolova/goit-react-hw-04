import './LoadMoreBtn.modules.css';

function LoadMoreBtn({ onClick }) {
    return <button className="load-more-btn" onClick={onClick}>Load More</button>;
  }
  
  export default LoadMoreBtn;