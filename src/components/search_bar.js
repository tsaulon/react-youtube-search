import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onInputChange(text) {
        this.setState({ text })
        this.props.onSearchTermChange(text);
    }

    render() {
        return (
            <form className="search-bar">
                <input
                    type="text"
                    value={this.state.text}
                    onChange={e => this.onInputChange(e.target.value)}
                />
            </form>

        );

    }
}