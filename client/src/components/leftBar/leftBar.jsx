<<<<<<< HEAD
import './leftBarr.css'

const LeftBar = () => {
    return (
        <div className='leftBar'>LeftBar</div>
=======
import Image from '../image/image'
import { Link } from 'react-router'
import './leftBar.css'

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className='menuIcons'>
                <Link to="/" className='menuIcon'>
                    <Image path="/utility/camera.png" alt = "" className='logo'/>
                </Link>
                <Link to="/" className='menuIcon'>
                    <Image path="/utility/home.svg" alt = ""/>
                </Link>
                <Link to="/create" className='menuIcon'>
                    <Image path="/utility/create.svg" alt = ""/>
                </Link>
                <Link to="/" className='menuIcon'>
                    <Image path="/utility/updates.svg" alt = ""/>
                </Link>
                <Link to="/" className='menuIcon'>
                    <Image path="/utility/messages.svg" alt = ""/>
                </Link>
            </div>
            <Link to="/" className='menuIcon'>
                <Image path="/utility/settings.svg" alt = ""/>
            </Link>
        </div>
>>>>>>> testing
    )
}

export default LeftBar