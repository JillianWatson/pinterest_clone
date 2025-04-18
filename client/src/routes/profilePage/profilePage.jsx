import './profilePage.css'
import Image from '../../components/image/image.jsx'
import PhotoGallery from '../../components/photoGallery/photoGallery.jsx'
import Collections from '../../components/collections/collections.jsx'
import { useState } from 'react'

const ProfilePage = () => {

    const[type, setType] = useState("saved")

    return(
        <div className='profilePage'>
            <Image  className='profileImg'
            w={100}
            h={100}
            path='/utility/noAvatar.png'
            alt=''/>
            <h1 className='profileName'>John Doe</h1>
            <span className='profileUsername'>@johndoe</span>
            <div className='followCounts'>10 followers  20 following</div>
            <div className='profileInteractions'>
             <Image path='/utility/share.svg' alt=''/>
             <div className='profileButtons'>  
              <button>Message</button>
              <button>Follow</button>
             </div>       
             <Image path='/utility/more.svg' alt=''/>
            </div>
            <div className='profileOptions'>
              <span onClick={()=>setType("created")} className={type==="created" ? "active" : '' }>Created</span>
              <span onClick={()=>setType("saved")} className={type==="saved" ? "active" : ''}>Saved</span>
            </div>
            {type==="created" ? <PhotoGallery/> : <Collections/> }
        </div>
    )
}
export default ProfilePage