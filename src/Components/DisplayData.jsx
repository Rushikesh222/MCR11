import { useData } from "../Context/CardContext";
import "./DisplayCard.css";
export const DisplayData = () => {
  const { state, dispatch } = useData();
  return (
    <div className="display-Container">
      {state.moviesData.map((items) => {
        const {
          id,
          title,
          year,
          genre,
          rating,
          director,
          writer,
          summary,
          imageURL,
          cast,
        } = items;
        return (
          <div className="card-block" key={id}>
            <img className="image" src={imageURL} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <div className="button-blocks">
              <button>Star</button>
              <button>Add to Wishlist</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
