import './postPage.css'
import Image from '../../components/image/image'
import PostInteractions from '../../components/postInteractions/postInteractions'
import {Link} from 'react-router'
import Comments from '../../components/comments/comments'

const PostPage = () => {
    return(
        <div className='postPage'>
            <div className='postContainer'>
                <div className='postImg'>
                    <Image path='/populate/pin3.jpeg' alt='' w={736}/>
                </div>
                <div className='postDetails'>
                    <PostInteractions/>
                    <Link to='/user' className='postUser'>
                        <Image path='/utility/noAvatar.png'/>
                        <span>John Doe</span>
                    </Link>
                    <Comments/>
                </div>
            </div>
        </div>
    )
}
export default PostPage