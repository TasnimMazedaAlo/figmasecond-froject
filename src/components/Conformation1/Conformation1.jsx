import React from 'react'
import { FaCheck } from "react-icons/fa";
import img1 from './img/img.svg'
import img2 from './img/img2.svg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const Conformation1 = () => {
  return (
    <div className="container mx-auto">
        <section>
            <div className="lg:mx-24 md:mx-10 mx-3 my-7">
                <div>
                <button className='bg-[#84D252] px-5 py-5 rounded-full '><FaCheck className='text-white' /></button>
                <h2 className='md:text-2xl text-xl font-bold text-[#0052A5] pt-4'>You have successfully completed form</h2>
                <p className='text-slate-800 md:text-base text-sm'>Select your payment plan</p>







                <div className='md:grid grid-cols-2 gap-14 md:my-24 my-10'>
             <div className='flex justify-end'>
             <div>
                <div><img className='lg:w-[400px]' src={img1} alt="" /></div>

                <div className='bg-white rounded-xl px-7 py-7 lg:w-[400px]'>
                  <div className='text-[#0052A5] font-bold text-start'>Standard</div>
                  <div className=' flex justify-start items-center gap-2 my-3'><span className='text-4xl font-bold '>$70</span> <span className='text-slate-600'>/month</span></div>

                  <div>
                    <div className='flex gap-2 items-center'><span className='px-1 py-1 bg-[#84D252] rounded-full'><FaCheck className='text-xs text-white' /></span> <span>1 year-valid</span></div>
                    <div className='flex gap-2 items-center'><span className='px-1 py-1 bg-[#84D252] rounded-full'><FaCheck  className='text-xs text-white' /></span> <span>Recognized in 150+ countries</span></div>
                    <div className='flex gap-2 items-center'><span className='px-1 py-1 bg-[#84D252] rounded-full'><FaCheck  className='text-xs text-white' /></span> <span>1 year-valid</span></div>
                  </div>

                  <div className='pt-5'>
                   <Link to={"/Conformation2"}> <button className='px-5 py-3 rounded-full text-sm flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Subscribe</span> <FaArrowRight className='text-xs' /> </button></Link>
                  </div>

                </div>

            
              </div>
             </div>

             <div className='flex justify-start md:mt-0 mt-7'>
             <div>
                <div><img className='lg:w-[400px]' src={img2} alt="" /></div>

                <div className='bg-white rounded-xl px-7 py-7 lg:w-[400px]  border-4 border-lime-500'>
                  <div className='relative'><button className=' absolute md:top-[-50px] top-[-40px] md:right-[100px] right-[40px] text-white md:text-base text-xs font-bold px-3 py-1 rounded-full bg-lime-500'>Most Popular</button></div>
                  <div className='text-[#0052A5] font-bold text-start'>Auto-Renew</div>
                  <div className=' flex justify-start items-center gap-2 my-3'><span className='text-4xl font-bold '>$60</span> <span className='text-slate-600'>/month</span></div>

                  <div>
                    <div className='flex gap-2 items-center'><span className='px-1 py-1 bg-[#84D252] rounded-full'><FaCheck className='text-xs text-white' /></span> <span>Instant Approval</span></div>
                    <div className='flex gap-2 items-center'><span className='px-1 py-1 bg-[#84D252] rounded-full'><FaCheck  className='text-xs text-white' /></span> <span>Recognized in 150+ countries</span></div>
                    <div className='flex gap-2 items-center'><span className='px-1 py-1 bg-[#84D252] rounded-full'><FaCheck  className='text-xs text-white' /></span> <span>Cancel Anytime</span></div>
                  </div>

                  <div className='pt-5'>
                   <Link to={"/Conformation2"}> <button className='px-5 py-3 rounded-full text-sm flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Subscribe</span> <FaArrowRight className='text-xs' /> </button></Link>
                  </div>

                </div>

            
              </div>
             </div>
            </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Conformation1