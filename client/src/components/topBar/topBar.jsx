import UserButton from '../userButton/userButton'
import './topBar.css'

const TopBar = () => {
    return(
        <div className='topBar'>
            {/* Search */}
            <div className='search'>
                <img src='' alt=''/>
                <input type='text' placeholder='Search' />
            </div>
            {/*USER */}
            <UserButton/>
        </div>
    )
}
export default TopBar