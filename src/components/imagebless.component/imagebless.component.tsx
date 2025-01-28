import React from 'react';
import './imagebless.style.scss';
const ImageBless = ({ imageName }: { imageName: string }) => {
    const imagePath = require(`../../media/images/${imageName}`);

    return (
        <div className='imagebless-post'>
            <h1>example text</h1>
            <img className="imagebless-img" src={imagePath} alt="Blessed Image" />
        </div>
    );
}

export default ImageBless;