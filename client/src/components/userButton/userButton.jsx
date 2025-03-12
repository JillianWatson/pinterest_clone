import { useState } from 'react'
import './userButton.css'

const UserButton = () => {

    const [open, setOpen] = useState(false);

    // TEMP USER
    const currentUSer = true

    return currentUSer ? (
        <div className='userButton'>
            <img src="" alt="" />
            <img onClick={() => setOpen((prev) => !prev)}
            src="" 
            alt="" 
            className='arrow'/>
            <div className='userOptions'>
                <div className='userOption'>Profile</div>
                <div className='userOption'>Setting</div>
                <div className='userOption'>Logout</div>
            </div>
        </div>
    ) : (
        <a href='/' className='loginLink'>
        Login / Sign Up
        </a>)
}
export default UserButton