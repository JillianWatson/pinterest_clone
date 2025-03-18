import './galleryItem.css'
import { Link } from 'react-router'
import Image from '../image/image'

const GalleryItem = ({item}) => {
    const optimizedHeight = (372 * item.height) / item.width
    return(
        <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(item.height/100)}`}}>
            <Image path={item.media} alt='' w={372} h={optimizedHeight}/>
            <Link to={`/pin/${item.id}`} className='overlay'></Link>
            <button className='saveButton'>Save</button>
            <div className='overlayIcons'>
                <button>
                    <Image path="/utility/share.svg" alt="" />
                </button>
                <button>
                    <Image path="/utility/more.svg" alt="" />
                </button>
            </div>
        </div>
    )
}

export default GalleryItem