import { useState } from 'react';
import HeroList from './HeroList';
import Loader from './Loader';

const DcScreen = () => {
  const [ds, setDs] = useState(true);
  const getLoading = (val) => {
    setDs(val);
  };
  return (
    <div>
      <h1>Dc Comics</h1>
      {ds && <Loader />}
      <HeroList publisher="DC Comics" senData={getLoading} />
    </div>
  );
};

export default DcScreen;
