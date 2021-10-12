import useFetch from '../hooks/useFetch';
import { GetheroByPublisher } from '../selectors/getheroByPublisher';
import './heroList.css';
import HeroCard from './HeroCard';

const HeroList = ({ publisher, senData }) => {
  const { data, loading, error } = useFetch(
    'https://akabab.github.io/superhero-api/api/all.json'
  );

  let heroes = [];
  if (data) {
    heroes = GetheroByPublisher(data, publisher, error);
    senData(loading);
  }
  return (
    <section className="mt-1 ml2 row justify-content-center animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </section>
  );
};

export default HeroList;
