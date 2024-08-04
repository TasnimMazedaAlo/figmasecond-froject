import React from 'react'
import { GoAlertFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import hero from './img/hero.webp'
import document from './img/document.svg'
import { FaArrowRight } from "react-icons/fa6";
import hero2 from './img/hero2.webp'

const Hero = () => {
  return (
    <div>
       <section>
        <div>
            <div className='md:block hidden'>
            <div className='flex justify-center items-center gap-3 bg-[#E2F0FF] py-2 rounded-md my-10 mx-10'>
                <div> <GoAlertFill  className='text-[#0052A5]' /> </div>
                <div className='text-gray-700'> Don't fall victim to SCAM websites! </div>
                <div className='text-[#0052A5] underline font-bold text-sm'> <Link> Read Our Story </Link> </div>
            </div>
            </div>

            <div className='md:hidden block'>
              <div className='my-5 bg-[#E2F0FF] py-2 rounded-md'>
                <div className='flex gap-2 items-center justify-center'>
                  <div> <GoAlertFill  className='text-[#0052A5]' /> </div>
                  <div className='text-gray-700'> Don't fall victim to SCAM websites! </div>
                </div>

                <div  className='text-[#0052A5] underline font-bold text-sm'> <Link> Read Our Story </Link> </div>
              </div>
            </div>


           <div className='lg:block hidden'>
             <div  className='relative mx-10'>
                <div className='absolute top-48 right-10 w-[400px] h-[400px]'><img src={document} alt="" /></div> 
               <div className='absolute top-0 '> <img src={hero} alt="" /></div>

               <div className='absolute top-[450px]'>
                <h2 className='text-[#0052A5] text-4xl font-bold text-start'>Get Your AAA International <br/> Driving Permit (IDP) <br/> in 5-Minutes</h2>

                <div className='flex gap-7 items-center mt-10'>
                 <Link to={"/Step1"}> <button className='bg-[#0052A5] flex gap-1 items-center px-5 py-3 text-slate-100 rounded-full'><span> Start Application</span> <FaArrowRight /> </button></Link> 
                  <div><p className='w-[400px] text-start'>We simplifies the application process with our online platform, making it easy for you to obtain your IDP efficiently and conveniently.</p></div>
                </div>
               </div>
           
              </div>
           </div>

           <div className='lg:hidden block'>
            <div>
              <div className='md:flex justify-center md:mx-0 mx-3'><img src={hero2} alt="" /></div>

              <div className='md:grid grid-cols-2 gap-5 md:my-10 md:mx-10'>
                <div className='text-[#0052A5] md:text-4xl text-2xl md:mx-0 mx-5 font-bold text-start md:my-0 my-4'>Get Your AAA International Driving Permit (IDP) in 5-Minutes</div>

                <div >
                  <div><p className='text-start md:mx-0 mx-5'>We simplifies the application process ,<br /> with our online platform, making it easy for you to obtain your IDP efficiently and conveniently</p></div>
                  <div className='py-5 flex justify-center'>
                  <Link to={"/Step1"}><button className='bg-[#0052A5] flex gap-1 items-center px-5 md:py-3 py-2 text-slate-100 rounded-full'><span> Start Application</span> <FaArrowRight className='text-sm' /> </button></Link>
                  </div>
                </div>
              </div>
            </div>

           </div>
        </div>

        <div className='lg:mb-[800px]'></div>
       </section>
        

    </div>
  )
}

export default Hero