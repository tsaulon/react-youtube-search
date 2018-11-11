import React from 'react';

//  {video} === props.video
export default function VideoDetail({video}) {

    //  handle for when still waiting on AJAX response and ^video is empty.
    if(!video) {
        return <div>Loading...</div>
    }

    const title = video.snippet.title;
    const description = video.snippet.description;
    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <ifreame className="embed-responsive-item" src={url}></ifreame>
            </div>
            <div className="details">
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    );
}