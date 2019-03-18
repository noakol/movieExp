import React, {Component} from 'react';
import config from '../movieExp.config';


export default class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searcVal: ''
        };
        this.timeout = null;
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const updatedValue = e.target.value;
        
        clearTimeout(this.timeout);

        this.setState({
            searcVal: updatedValue
        });

        if (updatedValue && updatedValue.length >= config.minSearchkeys) {
            this.timeout = setTimeout(
                () => this.props.updateSearchResults(updatedValue), config.searchDelayTime)
        }
    }


    render() {
        return (
            <div className="search-box-container">
                <label>
                    Enter Text Here
                    <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleInputChange} />
                </label>
            </div>
        )
    }
}