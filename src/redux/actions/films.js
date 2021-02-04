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
    type: types.INITIAL_APP,
    payload
  };
};

const getfilmsName = (name) => {
  return async (dispatch) => {
    try {
      const res = await api.getFilmsName(name);
      if (!!res.Error) {
        dispatch(addFilms([]));
        dispatch(notFound(true));
        dispatch(startApp(false));
      } else if (!!res.Search) {
        dispatch(addFilms(res.Search));
        dispatch(notFound(false));
        dispatch(startApp(false));
      } else {
        dispatch(addFilms([]));
        dispatch(introApp(res));
        dispatch(startApp(true));
        dispatch(notFound(false));
      }
    } catch (error) {
      console.log(error);
    };
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

export {
  getfilmsName,
};