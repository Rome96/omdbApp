import { types } from "../types";

const initialState = {
  startApp: true,
  introApp: {},
  loading: false,
  searchFilms: '',
  getFilms: [],
  page: 1,
  notFound: false,
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.START_APP:
      return{
        ...state,
        startApp: action.payload
      }
    case types.INTRO_APP:
      return {
        ...state,
        introApp: action.payload
      }
    case types.LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case types.SEARCH_FILMS:
      return {
        ...state,
        searchFilms: action.payload
      }
    case types.GET_FILMS:
      return {
        ...state,
        getFilms: [...action.payload]
      }
    case types.PAGE_FILMS:
      return {
        ...state,
        page: action.payload
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