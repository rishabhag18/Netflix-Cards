const SeriesCard = ({ data }) => {
  return (
    <li className="card">
      <div>
        <img src={data.img_url} alt="series-image" width="40%" height="40%" />
      </div>
      <div className="card-content">
        <h2>{data.name}</h2>
        <h3>Rating: <span className={data.rating>8.5?"super-hit":"average"}>{data.rating}</span></h3>
        <p>{data.description}</p>
        <p>Genre: {data.genre.join(", ")}</p>
        <p>Cast: {data.cast.join(", ")}</p>
        <a href={data.watch_url} target="_blank">
          <button className="watchnow-button">Watch Now</button>
        </a>
      </div>
    </li>
  );
};
export default SeriesCard;
