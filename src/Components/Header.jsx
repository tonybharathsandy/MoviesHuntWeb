import {NavLink, useNavigate } from "react-router-dom";
import './Hearder.css'
 const Header = () => {
 let navigator =  useNavigate()
 function handleSearch(e){
    e.preventDefault()
    let queryTerm = e.target.search.value
    e.target.reset()
     navigator(`/search?q=${queryTerm}`)
 }
  return (
    <header style={{display:"flex", justifyContent:"space-around"}} className="grid grid-cols-3  items-center px-6 py-2 bg-black text-white shadow-md fixed w-full top-0 z-50">
      
      {/* Left Section - Logo */}
      <div className="text-left">
        <h1 className="text-3xl font-bold text-red-600">MoviesHunt</h1>
      </div>
      
      {/* Center Section - Navigation */}
      <nav className="hidden   space-x-6 text-lg" style={{display:"flex", gap:"30px", alignItems:"center"}}>
        <NavLink to="/" className="hover:text-gray-400 transition" style={{textDecoration:"none",  color:"white"}}>Home</NavLink>
        <NavLink to="movies/upcoming" className="hover:text-gray-400 transition" style={{textDecoration:"none", color:"white"}}>Upcoming</NavLink>
        <NavLink to="movies/toprated" className="hover:text-gray-400 transition" style={{textDecoration:"none", color:"white"}}>Top Rated</NavLink>
        <NavLink to="/movies/popular" className="hover:text-gray-400 transition" style={{textDecoration:"none", color:"white"}}>Popular</NavLink>
      </nav>
      
      {/* Right Section - Search Bar */}
      <div className="flex justify-end" style={{display:"flex", alignItems:"center"}}>
        <div className="relative">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="px-4 py-1 rounded-full bg-gray-800 text-black w-48 md:w-64 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            style={{borderRadius:"5px"}}
          />
        </form>
        </div>
      </div>
    </header>
  );
};


export default Header