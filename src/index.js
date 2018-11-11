import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBVs3cSICyW6O6LfG93ZtLU7eoL3Uwizdc';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
    }

    componentDidMount() {
        this.videoSearch('Kotlin');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            //  set query results 'videos' to this.state.videos
            //  this.setState({ videos })
            //  is the same as
            //  this.setState({ videos: data })
            //  Condition: response variable name must be the same as state property name.
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

