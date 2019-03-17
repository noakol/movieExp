import baseApi from './base.api';
import actionCreator from './actionCreator';
import actionTypes from './actionTypes';
import services from './services';

export default class movieExpApi extends baseApi {
    getMoviesList = () => {
        return this.store.movies.movieList;
    }

    setLoaderUp = () => {
        this.store.dispacth(actionCreator(actionTypes.LOADER_UP));
    }

    setLoaderDown = () => {
        this.store.dispacth(actionCreator(actionTypes.LOADER_DOWN));
    }

    loadMovies = (params) => {
        return (dispatch) => {
            this.getMethod(services.ombdUrl, params).then((res) => {
                const moviesList = this.mapMoviesDataResponse(res);
                const action = actionCreator(actionTypes.GET_MOVIES_LIST_SUCCES, moviesList);
                dispatch(action);
            })
            .catch(err => {
                throw err;
            })
        }
    }

    mapMoviesDataResponse(res) {
        return res;
    }
}