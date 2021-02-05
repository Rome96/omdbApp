import { api } from "../../api";
import { types } from '../types';

const startApp = payload => {
  return {
    type: types.START_APP,
    payload
  };
};

const introApp = payload => {
  return {
    type: types.INTRO_APP,
    payload
  };
};

const loading = payload => {
  return {
    type: types.LOADING,
    payload
  }
};

const getfilmsName = (name, page) => {
  console.log('PAGE ACTION =>', page)
  return async (dispatch) => {
    try {
      dispatch(loading(true))
      const res = await api.getFilmsName(name, page);
      if (!!res.Error) {
        dispatch(addFilms([]));
        dispatch(notFound(true));
        dispatch(startApp(false));
        dispatch(loading(false))
      } else if (!!res.Search) {
        dispatch(addFilms(res.Search));
        dispatch(notFound(false));
        dispatch(startApp(false));
        dispatch(loading(false))
      } else {
        dispatch(addFilms([]));
        dispatch(introApp(res));
        dispatch(startApp(true));
        dispatch(notFound(false));
        dispatch(loading(false))
      }
    } catch (error) {
      console.log(error);
    };
  };
};

const searchFilmsText = payload => {
  return {
    type: types.SEARCH_FILMS,
    payload
  };
};

const notFound = payload => {
  return {
    type: types.NOT_FOUND,
    payload
  };
};

const addFilms = payload => {
  return {
    type: types.GET_FILMS,
    payload
  };
};

const pageFilms = payload => {
  return {
    type: types.PAGE_FILMS,
    payload
  }
}

export {
  getfilmsName,
  loading,
  searchFilmsText,
  pageFilms,
  addFilms,
};