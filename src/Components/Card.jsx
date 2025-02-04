/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Card({ movie }) {

  let image = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  let desc = movie.overview.split(" ").slice(0, 20).join(" ");
  let truncate = desc + "...";

  return (
    <div className="card" style={{ width: "20rem", marginTop: "10px", marginBottom: "10px", display: "flex", flexDirection: "column" }}>
      
      <div style={{ width: "320px", height: "250px", overflow: "hidden" }}>
        <img style={{ minHeight: "100%", minWidth: "100%", objectFit: "cover" }} src={image} className="card-img-top" alt={movie.original_title} />
      </div>

      <div className="card-body" style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        
        <h5 className="card-title">{movie.original_title}</h5>
        
        <div style={{ flexGrow: 1, height: "100px", overflow: "hidden" }}>
          <p className="card-text">{truncate}</p>
        </div>

        <div style={{ marginTop: "auto"}}>
          <Link to={`/movie/${movie.id}`} className="btn btn-primary stretched-link">Go somewhere</Link>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
