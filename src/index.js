import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBVs3cSICyW6O6LfG93ZtLU7eoL3Uwizdc';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    componentDidMount() {
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
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

