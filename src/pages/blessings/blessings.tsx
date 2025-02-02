import "./blessings.scss";
import { useState,useEffect } from "react";

import ImageBless from '../../components/imagebless.component/imagebless.component';
import VideoBless from "../../components/videobless.component/videobless.component";



function shuffleArray(array: any[]) {
    const shuffled = array.slice(); // Create a shallow copy to avoid mutating the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  // Original pipeline array
  const images = [
    'IMG-20250127-WA0005.jpg',
    'IMG-20250127-WA0006.jpg',
    'IMG-20250127-WA0007.jpg',
    ['IMG-20250127-WA0008.jpg', 'IMG-20250127-WA0009.jpg'],
    'IMG-20250127-WA0010.jpg',
    'IMG-20250127-WA0011.jpg',
    
  ];
  const videos = ['VID-20250127-WA0001.mp4'];
    const merged_files = images.concat(videos);
  // Separate into groups
  const groups = merged_files.map(item => (Array.isArray(item) ? item : [item]));
  
  // Shuffle the groups
  const shuffledGroups = shuffleArray(groups);
  
  // Flatten the shuffled groups to reconstruct the pipeline
  const shuffledPipeline = shuffledGroups.flat();
  
  




const Blessings = () => {

    const [index,setIndex] = useState(3);
    const [pipeline,setPipeline] = useState(shuffledPipeline.slice(0, index));
    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight*0.99) {
            setIndex(prevIndex => {
                const newIndex = (prevIndex + 3) >= shuffledPipeline.length ? 0 : prevIndex + 3;
                
                setPipeline(prevPipeline => [
                    ...prevPipeline, 
                    ...shuffledPipeline.slice(newIndex, newIndex + 3)
                ]);
    
                return newIndex;
            });
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
            {pipeline.map((item, i) => 
                item.includes('jpg') || item.includes('png') || item.includes('jpeg') ? 
                (<ImageBless key={i} imageName={item} />) : 
                (<VideoBless key={i} videoName={item} />)
            )}
        </div>
    );
}

export default Blessings;