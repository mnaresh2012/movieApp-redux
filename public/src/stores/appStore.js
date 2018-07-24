import { createStore } from 'redux';
import MovieReducer from '../reducers/movieReducer';

const AppStore = createStore(MovieReducer);

module.exports = AppStore;