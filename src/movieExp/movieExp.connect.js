import {connect} from 'react-redux';
import MovieExpComp from './movieExp.component';
import MovieExpApi from '../sdk/movieExp.api';
import {store} from '../App';

const movieExpApi = new MovieExpApi({store});

const mapStateToProps = () => {
    return {
        movieList: movieExpApi.getMoviesList()
    };
};

const mapDispatchTpProps = () => {
    return {
        loadMovies: (params) => {
            movieExpApi.setLoaderUp()
            try {
                movieExpApi.loadMovies(params)
            } catch {
                movieExpApi.setLoaderDown();
            } finally {
                movieExpApi.setLoaderDown();
            }
        }
    };
}

export default connect(mapStateToProps, mapDispatchTpProps)(MovieExpComp);