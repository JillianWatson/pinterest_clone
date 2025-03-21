import { useState } from 'react'
import './userButton.css'
import Image from '../image/image';

const UserButton = () => {

    const [open, setOpen] = useState(false);

    // TEMP USER, authenticate
    const currentUSer = true

    return currentUSer ? (
        <div className='userButton'>
            <Image path="/utility/noAvatar.png" alt="" />
            <Image 
             path="/utility/arrow.svg" 
             onClick={() => setOpen((prev) => !prev)}
             alt="" 
             className='arrow'
            />
            {open && (
                <div className='userOptions'>
                    <div className='userOption'>Profile</div>
                    <div className='userOption'>Setting</div>
                    <div className='userOption'>Logout</div>
                </div>
            )}
        </div>
    ) : (
        <a href='/' className='loginLink'>
        Login / Sign Up
        </a>)
}
export default UserButton