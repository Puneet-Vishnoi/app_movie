import { createContext, useReducer } from "react";

// Initial State
const initialState = {
  movies: [],
};

// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return { ...state, movies: [...state.movies, action.payload] };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ movies: state.movies, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
