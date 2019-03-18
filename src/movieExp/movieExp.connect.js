import {connect} from 'react-redux';
import MovieExpComp from './movieExp.component';
import MovieExpApi from '../sdk/movieExp.api';
import appConfig from '../App.config';

const config = appConfig.configApi;
const movieExpApi = new MovieExpApi({
    config
});

const mapStateToProps = () => {
    return {
        movieList: movieExpApi.getMoviesList(),
        noDataFoundIndicator: movieExpApi.getNoDataFoundIndicator()
    };
};

const mapDispatchTpProps = (dispatch) => {
    return {
        loadMovies: async (params) => {
            movieExpApi.setLoaderUp()
            try {
                await dispatch(movieExpApi.loadMovies(params));
            } finally {
                movieExpApi.setLoaderDown();
            }
        }
    };
}

export default connect(mapStateToProps, mapDispatchTpProps)(MovieExpComp);