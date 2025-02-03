import React from 'react';
import './imagebless.style.scss';
const ImageBless = ({ imageNames }: { imageNames: string[] }) => {

    console.log("imageNames:", imageNames);

    
    return (
        <div className='imagebless-post'>
            <h1>example text</h1>
            
            {imageNames.map((imageName, i) => {
                const imgSrc = require(`../../media/images/${imageName}`); 
                return <img className="imagebless-img" src={imgSrc} alt="Blessed Image" key={i} />;
            })}


            
        </div>
    );
}

export default ImageBless;