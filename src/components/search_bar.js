import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleOnChange}
                />
            </form>

        );

    }
}