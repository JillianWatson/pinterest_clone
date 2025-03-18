import GalleryItem from '../galleryItem/galleryItem'
import './photoGallery.css'

//TEMP
const items = [
    {
        id: 1,
        media: '/populate/pin3.jpeg',
        width: 1260,
        height: 1000,
    },
    {
        id: 2,
        media:'/populate/pin4.jpeg',
        width: 1260,
        height: 1400,
    },
    {
        id: 3,
        media: '/populate/pin7.jpeg',
        width: 1260,
        height: 1000,
    },
    {
        id: 4,
        media: '/populate/pin8.jpeg',
        width: 1000,
        height: 1400,
    },
    {
        id: 5,
        media: '/populate/pin10.jpeg',
        width: 1080,
        height: 1920,
    },
    {
        id: 6,
        media: '/populate/pin12.jpeg',
        width:  600,
        height: 900,
    },
    {
        id: 7,
        media: '/populate/pin13.jpeg',
        width: 1000,
        height: 1500,
    },
    {
        id: 8,
        media: '/populate/pin17.jpeg',
        width: 600,
        height: 800,
    },
    {
        id: 9,
        media: '/populate/pin20.jpeg',
        width: 1260,
        height: 1000,
    },
    {
        id: 10,
        media: '/populate/pin22.jpeg',
        width: 1260,
        height: 1000,
    },
    {
        id: 11,
        media: '/populate/pin24.jpeg',
        width: 600,
        height: 900,
    }
];

const PhotoGallery = () => {
    return(
        <div className='photoGallery'>
            {items.map(item => (
                <GalleryItem key={item.id} item={item}/>
            ))}
        </div>
    )
}
export default PhotoGallery