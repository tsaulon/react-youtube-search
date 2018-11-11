import React from 'react';

export default function VideoListItem(props) {

    const imageUrl = props.video.snippet.thumbnails.default.url;
    const title = props.video.snippet.title;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} className="media-object" />
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    );
}