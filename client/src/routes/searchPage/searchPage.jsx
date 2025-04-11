import './searchPage.css'
import PhotoGallery from '../../components/photoGallery/photoGallery'
import { useSearchParams } from 'react-router'

const SearchPage = () => {

    let [searchParams] = useSearchParams()

    const search = searchParams.get('search')

    return(
        <PhotoGallery search={search}/>
    )
}
export default SearchPage