
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import Image from 'next/image';

 const Navbar: React.FC = () => {
   const [openDrop , setOpenDrop] = useState(false);

  const dropRef = useRef<HTMLDivElement>(null);
  // const inputField = React.useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
  console.log(dropRef);
  const handleClickOutside = (event: any) =>{
    console.log(event);
    
    if(!dropRef.current?.contains(event.target)){
      setOpenDrop(false)
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown" , handleClickOutside)
    }
  }, [dropRef])
  
  return (
	  <>
	   <nav className="w-full  z-20 items-center flex justify-between px-10 sm:px-24 bg-[#0A0A0A] h-20 fixed top-0 bg-opacity-40  backdrop-blur-md ">
      <div> 
     <Link href="/" > 
     
        <img
          className="
           w-20"
          src="https://ctftime.org/media/cache/8d/37/8d3746b689ba3c133cd3599d898b6a4b.png"
          alt="H4B"
          loading='eager'
        />  
       
      </Link>
      </div>


      <div>
        <ul className="hidden sm:justify-evenly font-mono font-extrabold sm:flex">
          <li className="mx-2 px-1 cursor-pointer text-white md:text-lg opacity-75 hover:opacity-100" >
          <Link href="/">Home</Link> 
          </li>
          <li className='mx-2 px-1 cursor-pointer text-white md:text-lg opacity-75 hover:opacity-100' >
            <Link href="/#About">
            About 
            </Link>
          </li>
          <li  className='mx-2 px-1 cursor-pointer text-white md:text-lg opacity-75 hover:opacity-100' >
              <Link href="/team">Team</Link>
          </li>
          <li  className='mx-2 px-1 cursor-pointer text-white md:text-lg opacity-75 hover:opacity-100' >
          <Link href="/blogs">Blog</Link> 
          </li>
          <li  className='mx-2 px-1 cursor-pointer text-white md:text-lg opacity-75 hover:opacity-100' >
           
          <a href="/" onClick={(e: any)=>{
            window.location.href="mailto:hugsforbugs@protonmail.com";
            e.preventDefault()
        }} >Contact Us</a>
          </li>
        </ul>
        <div className="flex sm:hidden">
        <div className='relative'>
        
          {/* {openDrop ? (
          <button onClick={()=>{setOpenDrop(!openDrop)}}  className='bg-transparent border-0'>
            <i className="fa-solid fa-lg fa-bars-sort text-[#337BD4]"></i>
          </button>
          ) : (
            
          )} */}
            <button onClick={()=>{setOpenDrop(!openDrop)}} className="bg-transparent border-0">
                 <i className="fa-solid fa-2x fa-bars text-[#337BD4]"></i>
          </button>
         {openDrop && (
   <div ref={dropRef} className='absolute z-30 h-56 w-36 top-9 right-0 bg-[#337Bd4]' >
       <div className="flex h-full w-full flex-col justify-evenly items-center font-mono font-extrabold sm:hidden">
          <div className="w-full  cursor-pointer text-white text-2xl px-3 font-['Inconsolata'] hover:bg-[#22538f] " >
              <Link href="/#about">
                About
                </Link>   
          </div>
          <div className="h-[1.5px] w-[75%]  opacity-75 bg-[#ffffff]"></div>
          <div className="text-white cursor-pointer text-2xl w-full px-3 font-['Inconsolata']  hover:bg-[#22538f]" >
           <Link href="/team">Team </Link> 
          </div>
          <div className="h-[1.5px] w-[75%] opacity-75 bg-[#ffffff]"></div> 
          <div className="text-white  cursor-pointer w-full px-3 font-['Inconsolata'] text-2xl hover:bg-[#22538f]">
            <Link href="/blogs">Blogs</Link>
          </div>
          <div className="h-[1.5px] w-[75%] opacity-75 bg-[#ffffff]"></div>
          <div className="text-white cursor-pointer w-full px-3 font-['Inconsolata'] text-2xl hover:bg-[#22538f]">
            <a href="#" onClick={(e)=>{
            window.location.href="mailto:hugsforbugs@protonmail.com";
            e.preventDefault()
        }}   >
              Contact Us
            </a>
          </div>
        </div>
            </div>
         )} 
          </div> 
        </div>
      </div>
    </nav>
	  </>
  );
};

export default Navbar;