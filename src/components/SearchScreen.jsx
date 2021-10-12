import { useHistory, useLocation } from 'react-router';
import useForm from '../hooks/useForm';
import HeroCard from './HeroCard';
import queryString from 'query-string';
import useFetch from '../hooks/useFetch';
import { GetHeroByName } from '../selectors/getHeroByName';

const SearchScreen = () => {
  const history = useHistory();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [value, handleChange] = useForm({ search: q });

  let heroesFiltered = [];
  const { data, error } = useFetch(
    'https://akabab.github.io/superhero-api/api/all.json'
  );
  if (data) {
    heroesFiltered.push(
      GetHeroByName(q.charAt(0).toUpperCase() + q.slice(1), data, error)
    );
  }
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${value.search}`);
  };
  if (heroesFiltered[0] === undefined) {
    heroesFiltered.pop();
  }
  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find Your Heroe"
              className="form-control"
              name="search"
              value={value.search}
              onChange={handleChange}
              autoComplete="false"
            />

            <button
              type="submit"
              className="btn m-1 d-block btn-outline-primary"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          {q === '' && (
            <div className="alert alert-info">
              Search a hero {heroesFiltered.length}
            </div>
          )}

          {heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is no a hero with {q}
            </div>
          )}
          {heroesFiltered.length >= 1 &&
            heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
