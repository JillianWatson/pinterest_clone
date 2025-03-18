import './App.css'
import LeftBar from './components/leftBar/leftBar'
import PhotoGallery from './components/photoGallery/photoGallery'
import TopBar from './components/topBar/topBar'

const App = () => {

  return (
    <div className='app'>
      <LeftBar/>
      <div className='content'>
        <TopBar/>
        <PhotoGallery/>
      </div>   
    </div>
  )
}

export default App
