import { Redirect, useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import Loader from '../components/Loader';

const HeroScreen = ({ history }) => {
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };
  const { heroeId } = useParams();
  const { data, loading } = useFetch(
    `https://akabab.github.io/superhero-api/api/id/${heroeId}.json`
  );
  if (!data) {
    <Redirect to="/" />;
  }
  return (
    <div className="row mt-5">
      {loading && <Loader />}
      {data && (
        <>
          <div className="col-4">
            <img
              className="img-thumbnail animate__animated animate__fadeInLeft"
              src={data.images.lg}
              alt={data.name}
            />
          </div>
          <div className="col-8">
            <h3>{data.name}</h3>

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b> {data.connections.groupAffiliation} </b>
              </li>

              <li className="list-group-item">
                <b>Publisher:</b> {data.biography.publisher}
              </li>

              <li className="list-group-item">
                <b>First appearance: </b> {data.biography.firstAppearance}
              </li>
            </ul>

            <h5>Characters</h5>

            <p>{data.name}</p>

            <button className="btn btn-outline-info" onClick={handleReturn}>
              Return
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroScreen;
