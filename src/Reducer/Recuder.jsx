import { movies } from "../assets/Data";

export const initialState = {
  moviesData: movies,
};
export const ReducerMovies = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH_MOVIES":
      return { ...state, moviesData: payload };

    default:
      break;
  }
};
