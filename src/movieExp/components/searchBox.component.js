import React, {Component} from 'react';
import config from '../movieExp.config';


export default class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searcVal = ''
        };
        this.timeout = null;
    }

    handleInputChange = (e) => {
        const updatedValue = e.target.value;

        clearTimeout(this.timeout);

        this.setState({
            searcVal: updatedValue
        });

        if (updatedValue && updatedValue.length > 2) {
            const { updateSearchResults } = this.props;
            this.timeout = setTimeout(
                () => updateSearchResults(updatedValue), config.searchDelayTime)
        }

    }


    render() {
        return (
            <div class="search-box-container">
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleInputChange} />
            </div>
        )
    }
}