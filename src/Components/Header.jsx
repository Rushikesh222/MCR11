import { NavLink } from "react-router-dom";
import { useData } from "../Context/CardContext";
import "./Header.css";
export const Header = () => {
  const { dispatch } = useData();
  const handleSearch = (e) => {
    dispatch({
      type: "SEARCH_MOVIES",
      payload: e.target.value,
    });
  };
  return (
    <div className="Header-contianer">
      <h1>IMDB</h1>
      <input
        type="text"
        onChange={handleSearch}
        className="search-box"
        placeholder="Search a movie by it's title, cast or director"
      />
      <div className="links">
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/watchlist">Watch List</NavLink>
        <NavLink to="/starred">Starred Movies</NavLink>
      </div>
    </div>
  );
};
