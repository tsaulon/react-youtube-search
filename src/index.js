import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBVs3cSICyW6O6LfG93ZtLU7eoL3Uwizdc';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }

        YTSearch({key: API_KEY, term: 'kotlin'}, videos => {
            //  set query results 'videos' to this.state.videos
            //  this.setState({ videos })
            //  is the same as
            //  this.setState({ videos: data })
            //  Condition: response variable name must be the same as state property name.
            this.setState({ videos });
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));

