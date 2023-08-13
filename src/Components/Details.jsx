import { useParams } from "react-router-dom";
import { useData } from "../Context/CardContext";
import "./Details.css";

export const Details = () => {
  const { state, dispatch } = useData();
  const { movieId } = useParams();
  const movie = state?.moviesData?.find(({ id }) => id === parseInt(movieId));
  console.log(movie, movieId);
  const {
    id,
    title,
    year,
    genre,
    writer,
    summary,
    director,
    rating,
    imageURL,
    cast,
  } = movie;
  return (
    <div className="details-container">
      <div className="card-details" key={id}>
        <div className="movie-image">
          <img className="image-details" src={imageURL} />
        </div>
        <div className="detial-button">
          <h2>{title}</h2>
          <p>{summary}</p>
          <p>Year:{year}</p>
          <p className="details-genre">
            Genre:
            {genre.map((items) => (
              <div className="details-genre-word">
                <p>{items}</p>
              </div>
            ))}
          </p>
          <p>Rating:{rating}</p>
          <p>Director:{director}</p>
          <p>Writer:{writer}</p>
          <p className="details-genre">
            Cast:
            {cast.map((items) => (
              <div className="details-genre-word">
                <p>{items},</p>
              </div>
            ))}
          </p>
          <div className="button-block">
            <button
              onClick={() => {
                dispatch({ type: "ADD_STARRED", payload: id });
              }}
            >
              Star
            </button>
            <button
              onClick={() => {
                dispatch({ type: "ADD_WISHLIST", payload: id });
              }}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
