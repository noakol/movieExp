import {connect} from 'react-redux';
import LoaderComp from './loader.component';
import MovieExpApi from '../sdk/movieExp.api';
import appConfig from '../App.config';

const movieExpApi = new MovieExpApi({config: appConfig.configApi});

const mapStateToProps = () => {
    return {
        count: movieExpApi.getLoader()
    };
};

const mapDispatchTpProps = (dispatch) => {
    return {
        showLoader: () => {
            movieExpApi.setLoaderUp();
        },
        hideLoader: () => {
            movieExpApi.setLoaderDown();
        }
    };
}

export default connect(mapStateToProps, mapDispatchTpProps)(LoaderComp);