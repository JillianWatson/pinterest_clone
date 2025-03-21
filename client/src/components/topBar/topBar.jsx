import Image from '../image/image'
import UserButton from '../userButton/userButton'
import './topBar.css'

const TopBar = () => {
    return(
        <div className='topBar'>
            {/* Search */}
            <div className='search'>
                <Image path='/utility/search.svg' alt=''/>
                <input type='text' placeholder='Search' />
            </div>
            {/*USER */}
            <UserButton/>
        </div>
    )
}
export default TopBar