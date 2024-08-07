import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import document from './img/document.svg'



const WhatIsAnIdp = () => {
  return (
    <div className="container mx-auto">

    
      <section>
        <div className='lg:block hidden'>
          <div className='mx-10 md:mt-7 w-[700px] text-start bg-[#E2F0FF] rounded-md'>
           <div className='py-7 px-14'>
              <h1 className='text-4xl font-semibold py-7'>What is an IDP?</h1>

              <p className='text-slate-900'><span className='text-[#0052A5] font-semibold'>An International Driver’s Permit (IDP), </span>is a travel document that is required in some countries to drive a vehicle while you are abroad. It does not replace your current driver’s license but works in conjunction with it and that states you can legally drive in a country.</p>

              <p className='text-slate-900 py-5'>AAA is the <Link className='text-[#0052A5] font-semibold text-sm underline'> ONLY </Link> entity in the U.S. authorized by the U.S. Department of State to issue an IDP.</p>

              <p className='text-slate-900'>Drive Internationally simplifies the application process with our online platform, making it easy for you to obtain your AAA IDP efficiently and conveniently.</p>

              
              <Link to={"/Step1"}> <button className='my-7 bg-[#0052A5] flex gap-1 items-center px-5 md:py-3 py-2 text-slate-100 rounded-full'><span> Start Application</span> <FaArrowRight className='text-sm' /> </button></Link>
               

               
              
           </div>
          </div>
        </div>



       


        <div className='lg:hidden block'>

        <div className='md:hidden block'>
          <div className='flex justify-center'>
            <img className='w-[300px]' src={document} alt="" />
          </div>
        </div>

          <div className='bg-[#E2F0FF] md:w-[500px] rounded-md md:mx-10 md:text-base'>
            <div className=' md:pl-7  md:pr-24 md:py-7 py-5 px-5 text-start'>
              <h1 className='md:text-3xl text-2xl font-semibold md:py-7'>What is an IDP?</h1>
              <p className='text-slate-900 md:py-0 py-5'><span className='text-[#0052A5] font-semibold'>An International Driver’s Permit (IDP), </span>is a travel document that is required in some countries to drive a vehicle while you are abroad. It does not replace your current driver’s license but works in conjunction with it and that states you can legally drive in a country.</p>

              <p className='text-slate-900 md:py-5'>AAA is the <Link className='text-[#0052A5] font-semibold text-sm underline'> ONLY </Link> entity in the U.S. authorized by the U.S. Department of State to issue an IDP.</p>

              <p className='text-slate-900 md:py-0 py-3'>Drive Internationally simplifies the application process with our online platform, making it easy for you to obtain your AAA IDP efficiently and conveniently.</p>


              <div className='py-7'>
              <Link to={"/Step1"}><button className='bg-[#0052A5] flex gap-1 items-center px-5 md:py-3 py-2 text-slate-100 rounded-full'><span> Start Application</span> <FaArrowRight className='text-sm' /> </button> </Link>
              </div>

             <div className='md:block hidden'>
                <div className='relative'>
                    <img className='absolute top-[-470px] left-[350px] w-[300px]' src={document} alt="" />
                  </div>
             </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatIsAnIdp