import './comments.css'
import EmojiPicker from 'emoji-picker-react'
import Image from '../image/image.jsx'
import { useState } from 'react'

const Comments = () => {

    const [open, setOpen] = useState(false);

    return(
        <div className='comments'>
            <div className='commentList'>
                <span className='commentCount'>5 comments</span>
                <div className='comment'>
                    <Image path='/utility/noAvatar.png' alt=''/>
                    <div className='commentContent'>
                        <span className='commentUsername'>John Doe</span>
                        <p className='commentText'>
                            Nice pic!
                        </p>
                        <span className='commentTime'>1h</span>
                    </div>
                </div>
            </div>
            <form className='commentForm'>
                <input type="text" placeholder='Add a comment'/>
                <div className='emoji'>
                    <div onClick={()=>setOpen(prev=>!prev)}>😊</div>
                    {open && (
                    <div className='emojiPicker'>
                        <EmojiPicker/>
                    </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Comments