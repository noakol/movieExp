import React, {Component} from 'react';
import MovieExpMainView from './movieExp.mainView';

export default class MovieExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1
        };
    }

    updateSearchResults = (value) => {
        const {loadMovies} = this.props;
        const {value: currValue, pageNumber} = this.state;

        this.setState({
            value,
            pageNumber: currValue === value ? pageNumber : 1
        });

        loadMovies({s: value, page: 1});
    }

    handleShowMore = () => {
        const {loadMovies, noDataFoundIndicator} = this.props;
        
        if (!noDataFoundIndicator) {
            const nextPage = this.state.pageNumber + 1;
            this.setState({
                pageNumber: nextPage
            });
    
            loadMovies({s: this.state.value, page: nextPage})
        }
    }

    render() {
        return (
            <MovieExpMainView 
                movieList={this.props.movieList}
                clearNotFoundMess={this.clearNotFoundMess}
                noDataFoundIndicator={this.props.noDataFoundIndicator}
                updateSearchResults={this.updateSearchResults}
                handleShowMore={this.handleShowMore} />
        )
    }
}