import "./blessings.scss";
import ImageBless from '../../components/imagebless.component/imagebless.component';
import VideoBless from "../../components/videobless.component/videobless.component";
const Blessings = () => {
    return (
        <div className='blessings-page'>
            <h1 className="title-business-page">Blessings Page</h1>
            <ImageBless imageName= 'IMG-20250127-WA0005.jpg' />
            <VideoBless videoName= 'VID-20250127-WA0001.mp4' />
            <ImageBless imageName= 'IMG-20250127-WA0005.jpg' />
            <ImageBless imageName= 'IMG-20250127-WA0005.jpg' />
        </div>
    );
}

export default Blessings;