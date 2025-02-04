import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import MoviesDetails from './MoviesDetails'
import Search from './Search'
import About from './About'
import Contact from './Contact'
import PrivacyPage from './PrivacyPage'
import TermsPage from './TermsPage'

function AllRoutes() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home title="Your Guide to great Movies" pathing="movie/now_playing"/>}/>
      <Route path='/movies/popular' element={<Home title="Popular Movies" pathing="movie/popular"/>}/>
      <Route path='/movies/toprated' element={<Home title="Top Rated" pathing="movie/top_rated"/>}/>
      <Route path='/movies/upcoming' element={<Home title="Up Coming" pathing="movie/upcoming"/>}/>
      <Route path='/movie/:id' element={<MoviesDetails/>}/>
      <Route path='/search' element={<Search pathing="search/movie"/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/privacy' element={<PrivacyPage/>}/>
      <Route path='/terms' element={<TermsPage/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes