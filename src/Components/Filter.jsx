import { useNavigate } from "react-router-dom";
import { useData } from "../Context/CardContext";

export const Filter = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Filter</h1>
      <div>
        <select
          name="Genre"
          onChange={(e) =>
            dispatch({
              type: "FILTER_GENRE",
              payload: e.target.value,
            })
          }
        >
          <option value="Genre">Genre</option>
          <option value="Drama">Drama</option>
          <option value="Crime">Crime</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
      <div>
        <select
          name="Year"
          onChange={(e) =>
            dispatch({
              type: "FILTER_YEAR",
              payload: e.target.value,
            })
          }
        >
          <option value="Release Year">Release Year</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1994">1994</option>
          <option value="1999">1999</option>
          <option value="2001">2001</option>
          <option value="2003">2003</option>
          <option value="2008">2008</option>
          <option value="2010">2010</option>
        </select>
      </div>
      <div>
        <select
          name="Rating"
          onChange={(e) =>
            dispatch({
              type: "FILTER_RATING",
              payload: e.target.value,
            })
          }
        >
          <option value="Rating">Rating</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <button className="addMovie" onClick={() => navigate(`/form`)}>
        Add Movie
      </button>
    </div>
  );
};
