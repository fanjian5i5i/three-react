import React, {useState} from "react"
import Bighead from "./Bighead"
import logo from "../assets/logo.png"; 
// import {Transition} from "react-spring"
import {useSpring, animated} from 'react-spring'
// import { Transition, animated } from "react-spring/renderprops-universal";

let Navbar  = () => {
  let [open, setOpen] = useState(false)
  const fade = useSpring({
    opacity: open?1:0,
    display:open?"":"none"
  })
  let toggle = () =>{
    console.log(open)
    setOpen(!open)
    // set({opacity: toggle ? 1 : 0})
  }
  return (
    <header className="absolute bg-transparent top-0 z-500 w-full sm:flex sm:justify-between ">
      <div className="flex  items-center justify-between px-5 py-3">
        <div>
        <a href="#">
          <img width="32" heigth="36" viewBox="0 0 32 36" src={logo} alt="Logo" />
        </a>
      </div>
      <div className="sm:hidden">
      <label htmlFor="menu-toggle" onClick={toggle}>
            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
      </div> 
      </div> 
        <div className={open?"block sm:flex":"hidden sm:flex"}>
          <a href="#" className="block py-3 px-5 border-b-2 border-transparent hover:border-indigo-400 " >Portfolio</a>
          <a href="#" className="block py-3 px-5 border-b-2 border-transparent hover:border-indigo-400 " >Projects</a>
          <a href="#" className="block py-3 px-5 border-b-2 border-transparent hover:border-indigo-400 " >Skills</a>
        </div>
    
    </header>
    
)}


export default Navbar
