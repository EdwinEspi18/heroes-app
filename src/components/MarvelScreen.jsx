import { useState } from 'react';
import HeroList from './HeroList';
import Loader from './Loader';

const MarvelScreen = () => {
  const [ds, setDs] = useState(true);
  const getLoading = (val) => {
    setDs(val);
  };
  return (
    <div>
      <h1>Marvel Comics</h1>
      {ds && <Loader />}
      <HeroList publisher="Marvel Comics" senData={getLoading} />
    </div>
  );
};

export default MarvelScreen;
