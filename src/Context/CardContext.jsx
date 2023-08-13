import { createContext, useContext, useReducer } from "react";
import { ReducerMovies, initialState } from "../Reducer/Recuder";

const CardContext = createContext();
export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerMovies, initialState);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
export const useData = () => useContext(CardContext);
