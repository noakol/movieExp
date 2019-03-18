import React, {Component} from 'react';
import LoderMainView from './loader.mainView';

export default class MovieExplorer extends Component {
    render() {
        return (
            <LoderMainView count={this.props.count} />
        )
    }
}