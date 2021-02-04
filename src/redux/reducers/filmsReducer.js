import { types } from "../types";

const initialState = {
  getFilms: [],
  introApp: {},
  startApp: true,
  notFound: false,
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_APP:
      return{
        ...state,
        startApp: action.payload
      }
    case types.INITIAL_APP:
      return {
        ...state,
        introApp: action.payload
      }
    case types.GET_FILMS:
      return {
        ...state,
        getFilms: [...action.payload]
      }
    case types.NOT_FOUND:
      return {
        ...state,
        notFound: action.payload
      }
    default:
      return state;
  };
};