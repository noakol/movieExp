import React, {Component} from 'react';
import MovieExpMainView from './movieExp.mainView';

export default class MovieExplorer extends Component {
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {

    }

    async updateSearchResults(value) {
        
    }

    render() {
        return (
            <MovieExpMainView />
        )
    }
}