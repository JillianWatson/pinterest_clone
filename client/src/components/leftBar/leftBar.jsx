import Image from '../image/image'
import './leftBar.css'

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className='menuIcons'>
                <a href="/" className='menuIcon'>
                    <Image path="/utility/camera.png" alt = "" className='logo'/>
                </a>
                <a href="/" className='menuIcon'>
                    <Image path="/utility/home.svg" alt = ""/>
                </a>
                <a href="/" className='menuIcon'>
                    <Image path="/utility/create.svg" alt = ""/>
                </a>
                <a href="/" className='menuIcon'>
                    <Image path="/utility/updates.svg" alt = ""/>
                </a>
                <a href="/" className='menuIcon'>
                    <Image path="/utility/messages.svg" alt = ""/>
                </a>
            </div>
            <a href="/" className='menuIcon'>
                <Image path="/utility/settings.svg" alt = ""/>
            </a>
        </div>
    )
}

export default LeftBar