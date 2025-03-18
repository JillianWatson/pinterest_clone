import Image from '../image/image'
import './postInteractions.css'

const PostInteractions = () => {
    return(
        <div className='postInteractions'>
            <div className='interactionIcons'>
                <Image path='utility/react.svg' alt=''/>
                <Image path='utility/share.svg' alt=''/>
                <Image path='utility/more.svg' alt=''/>
            </div>
            <button>Save</button>
        </div>
    )
}
export default PostInteractions