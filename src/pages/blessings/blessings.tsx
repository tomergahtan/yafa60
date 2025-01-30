import "./blessings.scss";
import { useState,useEffect } from "react";

import ImageBless from '../../components/imagebless.component/imagebless.component';
import VideoBless from "../../components/videobless.component/videobless.component";





const Blessings = () => {

    const [full_images_list, setImages] = useState([
        'IMG-20250127-WA0005.jpg',
        'IMG-20250127-WA0006.jpg',
        'IMG-20250127-WA0007.jpg',
        
    ]);

    const [full_videos_list, setVideos] = useState([
        'VID-20250127-WA0001.mp4'
    ]);
    const [pipeline, setPipeline] = useState([<ImageBless imageName= 'IMG-20250127-WA0005.jpg' />,
        <VideoBless videoName= 'VID-20250127-WA0001.mp4' />,
        <ImageBless imageName= 'IMG-20250127-WA0006.jpg' />,
        <ImageBless imageName= 'IMG-20250127-WA0007.jpg' />]);

    const loadMoreItems = () => {
        const newItems = [
            <ImageBless imageName='IMG-20250127-WA0005.jpg' />,
            <VideoBless videoName='VID-20250127-WA0001.mp4' />,
            <ImageBless imageName='IMG-20250127-WA0006.jpg' />,
            <ImageBless imageName='IMG-20250127-WA0007.jpg' />
        ];
        const shuffledItems = [...newItems].sort(() => Math.random() - 0.5);

    // Update the pipeline with the shuffled items
        setPipeline((prevPipeline) => [...prevPipeline, ...shuffledItems]);
    };

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMoreItems();
        }
    };
    // things that i want to run only once
    useEffect(() => {
        

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='blessings-page'>
            <h1 className="title-business-page">Blessings Page</h1>
            {pipeline}
            <h1> load to see more</h1>
        </div>
    );
}

export default Blessings;