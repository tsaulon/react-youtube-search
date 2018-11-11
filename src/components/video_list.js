import React, { Component } from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="col-md-4 list-group">
                {this.props.videos.map(x => <VideoListItem key={x.etag} video={x.snippet.channelTitle} />)}
            </ul>
        );
    }
}