import { useQuery } from '@tanstack/react-query';
import GalleryItem from '../galleryItem/galleryItem'
import './photoGallery.css'
import axios from 'axios'

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

//connect to backend server (:3000)
const fetchPins = async ()=> {
    console.log('API URL:', import.meta.env.VITE_API_ENDPOINT + '/pins');

    try {
        const res = await axios.get('http://localhost:3000/pins');
        console.log('API Response:', res); // Changed from response to res
        return res.data; // You need to return the data!
      } catch (error) {
        console.error('Error fetching pins:', error);
        throw error;
      }
}

const PhotoGallery = () => {

    const {data, isPending, error,} = useQuery({
        queryKey: ["pins"],
        queryFn: fetchPins
     });

     if (error) return "An error has occured: " + error.message
     if (isPending) return "Loading..."

     console.log('Pins data:', data); // Check if data exists here

    return(
        <div className='photoGallery'>
            {data?.map((item)=>(
                <GalleryItem key={item._id} item={item} />
            ))}
        </div>
    )
}
export default PhotoGallery