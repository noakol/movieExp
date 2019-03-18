import baseApi from './base.api';
import actionCreator from './actionCreator';
import actionTypes from './actionTypes';
import services from './services';

export default class movieExpApi extends baseApi {
    getMoviesList = () => {
        return this.store.getState().movies.movieList;
    }

    setLoaderUp = () => {
        this.store.dispatch(actionCreator(actionTypes.LOADER_UP));
    }

    setLoaderDown = () => {
        this.store.dispatch(actionCreator(actionTypes.LOADER_DOWN));
    }

    getLoader = () => {
        return this.store.getState().loader.count;
    }

    getNoDataFoundIndicator = () => {
        return this.store.getState().movies.noDataFound;
    }

    loadMovies = (params) => {
        return (dispatch) => {
            return this.getMethod('/', params).then((res) => {
                if (res.Error) {
                    const actionType = params.page === 1 ? actionTypes.SET_NO_DATA : 
                        actionTypes.SET_NO_MORE_DATA
                    dispatch(actionCreator(actionType));
                } else {
                    const moviesList = this.mapMoviesDataResponse(res);
                    const actionType = params.page === 1 ? actionTypes.GET_MOVIES_LIST_SUCCES : 
                        actionTypes.GET_MORE_MOVIES_SUCCES
                    actionCreator(actionType, moviesList);
                    dispatch(actionCreator(actionType, moviesList));
                }
            })
            .catch(err => {
                throw err;
            })
        }
    }

    mapMoviesDataResponse(res) {
        return res && res.Search && res.Search.length && res.Search.map((movieItem) => {
            return {
                title: movieItem.Title,
                poster: movieItem.Poster
            }
        });
    }
}