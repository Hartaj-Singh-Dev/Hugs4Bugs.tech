import React, { MutableRefObject, useEffect, useRef } from "react";
import AboutStyle from "../../styles/About.module.scss";
//@ts-ignore
import gsap , {Power3} from "gsap/dist/gsap";
//@ts-ignore
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatePresence , motion } from "framer-motion";

const About: React.FC = () => {

  gsap.registerPlugin(ScrollTrigger);
 const introductionP =   useRef() as MutableRefObject<HTMLParagraphElement>

 useEffect(()=>{

  const introP = gsap.fromTo(introductionP.current,{
    opacity:0,
    y:100,
  },{
    opacity:1,
    duration:0.6 ,
    y:0,
    ease:Power3.easeIn,
    scrollTrigger:{trigger:introductionP.current}

  })

  return(()=>{
    introP.kill()
  })
 },[])

  return (
    <section id={AboutStyle.About}  className="h-[120vh] w-full bg-[#11121A] flex flex-col ">
  <div className="w-full h-full flex flex-col justify-center sm:justify-center sm:flex sm:items-center">
      
     <style jsx>{
       `
       section#About::after{
         content:"",
         position:absoulte;
         width:100%;
         height:15%;
         background-color: #191a27;
         z-index: 0;
         clip-path: polygon(50% , 60% , 0 0 , 100% , 0);
       }      
       
       @media only screen and (min-width:640px){
         section#About::after{
           height:30%,
           clip-path:polygon(50% , 96% , 0 0 , 100% , 0)
         }
       }


       `
     }
       </style> 
      
      <div className="pt-4 h-full flex flex-col justify-evenly align-center  sm:flex-row ">
        <div className="w-full  text-center sm:w-1/4 sm:h-full sm:flex sm:justify-center sm:items-center">
          <h1 className="font-['Montserrat'] text-[#fff] text-4xl pt-3 sm:text-5xl">
            About Us
          </h1>
        </div>
        <div className=" flex justify-center w-full items-center  sm:w-1/2 overflow-hidden">
          <p ref={introductionP} className="text-[#d3d3d3] font-['Poppins'] px-5 sm:px-4 text-left text-lg sm:text-xl">
            HugsForBugs is an international{" "}
            <span className="underline decoration-red-600">community </span>{" "}
            where we compete in{" "}
            <span className="underline decoration-purple-600"> CTFs </span> and
            learn things together. We play around once or twice a month or so
            and aren&apos;t super hardcore. No one will expect you to stay up all
            night two nights in a row! Our{" "}
            <span className="underline decoration-blue-600"> members </span>{" "}
            range from high school students to established <span className="underline decoration-orange-500"> cybersecurity
            professionals </span>, complete{" "}
            <span className="underline decoration-lime-500"> n00bs </span> to
            professional pen testers. We also hang out, discuss the latest 0-day
            in the news, show off our latest bug bounty, and share silly memes.
          </p>
        </div>
      </div>
      <div className="w-full h-1/4  flex justify-center  p-4 sm:h-1/2 sm:hidden ">
        <img src="http://localhost:3000/aboutpage.svg" alt="" className="h-auto w-full max-w-full " />
      </div> 
    </div> 
    </section>
  );
};

export default About;
