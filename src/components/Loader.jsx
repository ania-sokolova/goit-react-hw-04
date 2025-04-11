import { ClipLoader } from 'react-spinners';

function Loader() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <ClipLoader color="#3f51b5" size={40} />
    </div>
  );
}

export default Loader;