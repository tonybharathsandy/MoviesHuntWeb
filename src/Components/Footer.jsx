import {  NavLink } from "react-router-dom";
import './Hearder.css'
 const Footer = () => {


  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6" style={{display:"flex", justifyContent:"space-around", alignItems:"center", padding:"10px"}}>
        {/* Left Section - Brand */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-red-600">MoviesHunt</h1>
          <p className="text-gray-400 text-sm">© 2025 MoviesHunt. All rights reserved.</p>
        </div>
        
        {/* Center Section - Navigation */}
        <nav className="flex space-x-6 text-sm" style={{display:"flex", gap:"30px", alignItems:"center"}}>
          <NavLink to="/about" style={{textDecoration : "none", color:"white"}} className="hover:text-gray-400 transition">About</NavLink>
          <NavLink to="/contact" style={{textDecoration : "none", color:"white"}} className="hover:text-gray-400 transition">Contact</NavLink>
          <NavLink to="/privacy" style={{textDecoration : "none", color:"white"}} className="hover:text-gray-400 transition">Privacy Policy</NavLink>
          <NavLink to="/terms" style={{textDecoration : "none", color:"white"}} className="hover:text-gray-400 transition">Terms of Service</NavLink>
        </nav>
        
        {/* Right Section - Social Media */}
        <div className="flex space-x-4">
          <a href="#" style={{textDecoration : "none"}} className="text-gray-400 hover:text-white transition">🔵</a>
          <a href="#" style={{textDecoration : "none"}} className="text-gray-400 hover:text-white transition">🟣</a>
          <a href="#" style={{textDecoration : "none"}} className="text-gray-400 hover:text-white transition">🔴</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer