import React, { useState } from 'react'
import logo from './img/logo.svg'
import { Link } from 'react-router-dom'
import login from './img/login.svg'
import apply from './img/apply.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Step1 from '../Step1/Step1'


const Navbar = () => {

  let [clickMenu, setClickMenu] = useState(false);

  return (
    <div className="container mx-auto">
       <section>
        <div>
           

           <div className='lg:block hidden'>
             <div className='flex flex-warp justify-around items-center py-4 bg-white'>
                <div><img src={logo} alt="" /></div>

                <div className='text-gray-700 font-semibold'>
                    <Link to={"/WhatIsAnIdp"}> What is an IDP? </Link>
                    <Link className='px-5' to={"/CountryRequirements"}> Country Requirements </Link>
                    <Link to={"/Pricing"}> Pricing </Link>
                    <Link className='px-5' to={"/Faqs"}> FAQS </Link>
                    <Link to={"/Contact"}> Contact </Link>
                   
                   
                </div>

                <div className='flex gap-3'>
                 <Link><div><img src={login} alt="" /></div></Link>
                  <Link to={"/Step1"}><div><img src={apply} alt="" /></div></Link>
                </div>
              </div>
           </div>


          <div className='lg:hidden block'>
            <div className='flex justify-between items-center px-5 bg-white shadow-md'>
              <div><img className='w-36 h-36'  src={logo} alt="" /></div>

             

              {
               clickMenu ? <>
               <div className='relative  text-gray-700 font-semibold '>
                <div className='absolute top-24 left-[-190px] bg-white rounded-md px-3'>
                 
                 <div>
                  <Link to={"/WhatIsAnIdp"}> <div className='w-60 pt-5'> What is an IDP? </div> </Link>
                  <Link to={"/CountryRequirements"}>  <div  className='py-10'> Country Requirements </div></Link>
                  <Link to={"/Pricing"}> <div> Pricing </div> </Link>
                  <Link to={"/Faqs"}> <div className='py-10'> FAQS </div></Link>
                  <Link to={"/Contact"}> <div> Contact </div> </Link>
                 
                 </div>
                 

                <div className='flex justify-center'>
                <div className='py-10'>
                  <Link > <button className='text-[#0052A5]  px-5 py-2 rounded-full border-2 border-[#0052A5]'> Log In </button> </Link>
                  <Link to={"/Step1"}> <button className='flex gap-1 items-center px-5 py-2 rounded-full bg-[#0052A5] text-slate-100 mt-3'><span>  Apply For IDP </span>  <FaArrowRight className='text-xs' /></button> </Link>
                 
                 </div>
                </div>
                 
                </div>
                
               </div>
               </> : <></>
              }


            <div className='text-[#0052A5]' onClick={() => {setClickMenu(!clickMenu)}}>{clickMenu ?  <FaTimes /> : <GiHamburgerMenu />}</div>

            </div>

           
            
          </div>



        </div>
       </section>
    </div>
  )
}

export default Navbar