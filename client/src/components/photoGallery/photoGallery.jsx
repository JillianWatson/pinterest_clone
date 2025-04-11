import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import GalleryItem from '../galleryItem/galleryItem'
import './photoGallery.css'
import axios from 'axios'


//connect to backend server (:3000)
const fetchPins = async ({pageParam}) => {
    //debugging connection
    console.log('API URL:', import.meta.env.VITE_API_ENDPOINT + '/pins');

    try {
        const res = await axios.get(`http://localhost:3000/pins?cursor=${pageParam}`);
        console.log('API Response:', res);
        return res.data;
      } catch (error) {
        console.error('Error fetching pins:', error);
        throw error;
      }
}

const PhotoGallery = () => {

    const {data, fetchNextPage, hasNextPage, status} = useInfiniteQuery({
        queryKey: ["pins"],
        queryFn: fetchPins,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
     });

     if (status === 'error') return "An error has occured"
     if (status === "pending") return "Loading..."

     console.log('Pins data:', data);

    const allPins = data?.pages.flatMap((page)=> page.pins) || []

    return(
        <InfiniteScroll dataLength={allPins.length} 
         next={fetchNextPage} 
         hasMore={!!hasNextPage}
         loader={<h4>Loading more pins</h4>}
         endMessage={<h3>All Posts Loaded!</h3>}
         >
         <div className='photoGallery'>
            {allPins?.map((item)=>(
                <GalleryItem key={item._id} item={item} />
            ))}
         </div>
        </InfiniteScroll>
    )
}
export default PhotoGallery