import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loaderReducer from './sdk/reducers/loader.reducer';
import movieReducer from './sdk/reducers/movie.reducer';

const rootReducer = combineReducers({
    loader: loaderReducer,
    movies: movieReducer
});
  
export default store = createStore(
    rootReducer, 
    applyMiddleware(thunk)
);