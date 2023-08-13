import { movies } from "../assets/Data";

export const initialState = {
  moviesData: movies,
  searchData: movies,
  Wishlist: [],
  Starred: [],
};
export const ReducerMovies = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH_MOVIES":
      const searchList =
        payload === ""
          ? state?.moviesData
          : state?.moviesData?.filter(
              ({ title, director }) =>
                title.toLowerCase().includes(payload.toLowerCase()) ||
                director.toLowerCase().includes(payload.toLowerCase())
            );
      return { ...state, searchData: searchList };
    case "ADD_WISHLIST":
      const AddWislist = state?.moviesData?.find(({ id }) => id === payload);
      return { ...state, Wishlist: [...state.Wishlist, AddWislist] };
    case "REMOVE_WISHLIST":
      const RemoveWislist = state?.Wishlist?.filter(({ id }) => id !== payload);
      return { ...state, Wishlist: RemoveWislist };
    case "ADD_STARRED":
      console.log(payload);
      const AddStarred = state?.moviesData?.find(({ id }) => id === payload);
      return { ...state, Starred: [...state.Starred, AddStarred] };
    case "REMOVE_STARRED":
      const RemoveStarred = state?.Starred?.filter(({ id }) => id !== payload);
      return { ...state, Starred: RemoveStarred };
    case "FILTER_GENRE":
      const FilterGenre =
        payload === "Genre"
          ? state?.moviesData
          : state?.moviesData?.filter((movies) =>
              movies.genre.includes(payload)
            );

      return { ...state, searchData: FilterGenre };
    case "FILTER_YEAR":
      const FilterYear =
        payload === "Release Year"
          ? state?.moviesData
          : state?.moviesData?.filter(
              (movies) => movies.year === parseInt(payload)
            );

      return { ...state, searchData: FilterYear };
    case "FILTER_RATING":
      const FilterRating =
        payload === "Rating"
          ? state?.moviesData
          : state?.moviesData?.filter(
              (movies) => movies.rating === parseInt(payload)
            );

      return { ...state, searchData: FilterYear };

    default:
      return state;
  }
};
