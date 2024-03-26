import { Link } from 'react-router-dom';
import { Search } from '../components';

export const Home = () => {
  return (
    <>
      <Search />
      <Link to="details">Movie Details</Link>
    </>
  );
};
