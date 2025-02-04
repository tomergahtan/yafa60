import React from 'react';
import './videobless.style.scss';

const VideoBless = ({ videoNames }: { videoNames: string[] }) => {
    const videourl = require(`../../media/videos/${videoNames[0]}`);
    
    return (
        <div className="videobless-post">
            {/* <h1>Video Blessing</h1> */}
            
            <video className="videobless-video" controls>
                    <source src={videourl} type="video/mp4" />
                    
            </video>
            
        </div>
    );
}

export default VideoBless;
