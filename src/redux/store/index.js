import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { filmsReducer } from '../reducers/index';

const reducers = combineReducers({
  films: filmsReducer
});

export const store = createStore(
  reducers,
  applyMiddleware(thunk)
);