import React from 'react';
import './videobless.style.scss';

const VideoBless = ({ videoName }: { videoName: string }) => {
    const videoPath = require(`../../media/videos/${videoName}`);

    return (
        <div className='videobless-post'>
            <h1>Video Blessing</h1>
            <video className="videobless-video" controls>
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default VideoBless;