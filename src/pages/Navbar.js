


import React from 'react'
import { NavLink, Route, Routes } from "react-router-dom";
import { Yourwheather } from "./Yourwheather";
import { Searchwheather } from "./Searchwheather";

export const Navbar = () => {
  return (
   
    <div className='main'>
    <nav className='flex flex-auto gap-4 w-3/5 h-25 justify-around '>
    <button  className='mainbutton' ><NavLink  to="/"  >Yourwheather</NavLink></button>
    <button   className='mainbutton'><NavLink to="/searchwheather" >Searchwheather</NavLink></button>
    </nav> 

    <Routes>
        <Route path="/" element={<Yourwheather></Yourwheather>}></Route>
        <Route path="/searchwheather" element={<Searchwheather></Searchwheather>}></Route>
    </Routes>
    </div>
  )
    

    
}
