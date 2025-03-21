import './collections.css'
import Image from '../../components/image/image.jsx'

const Collections = () => {
    return(
        <div className="collections">
            <div className="collection">
                <Image path="populate/pin3.jpeg" alt=''/>
                <div className='collectionInfo'>
                    <h1>Inspo</h1>
                    <span>4 Pins</span>
                </div>
            </div>
            <div className="collection">
                <Image path="populate/pin3.jpeg" alt=''/>
                <div className='collectionInfo'>
                    <h1>Hair</h1>
                    <span>12 Pins</span>
                </div>
            </div>
            <div className="collection">
                <Image path="populate/pin3.jpeg" alt=''/>
                <div className='collectionInfo'>
                    <h1>Decor</h1>
                    <span>2 Pins</span>
                </div>
            </div>
        </div>
    )
}

export default Collections;