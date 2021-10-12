import { Link } from 'react-router-dom';

const HeroCard = ({ hero }) => {
  const { id, name, images, connections, biography, work } = hero;
  return (
    <article className="card" style={{ maxWidth: 300 }}>
      <img src={images.lg} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{connections.groupAffiliation}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Alineacion:{' '}
          {biography.alignment.charAt(0).toUpperCase() +
            biography.alignment.slice(1)}
        </li>
        <li className="list-group-item">
          Primera Aparicion:
          <small className="text-muted"> {biography.firstAppearance}</small>
        </li>
        <li className="list-group-item">Ocupacion: {work.occupation}</li>
        <li className="list-group-item">
          <Link to={`./hero/${id}`}>Mas...</Link>
        </li>
      </ul>
    </article>
  );
};

export default HeroCard;
