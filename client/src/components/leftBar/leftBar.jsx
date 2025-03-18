import './leftBar.css'

const LeftBar = () => {
    return (
        <div className='leftBar'>
            <div className='menuIcons'>
                <a href="/" className='menuIcon'>
                    <img src="/utility/camera.png" alt = "" className='logo'/>
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/utility/home.svg" alt = ""/>
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/utility/create.svg" alt = ""/>
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/utility/updates.svg" alt = ""/>
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/utility/messages.svg" alt = ""/>
                </a>
            </div>
            <a href="/" className='menuIcon'>
                <img src="/utility/settings.svg" alt = ""/>
            </a>
        </div>
    )
}

export default LeftBar