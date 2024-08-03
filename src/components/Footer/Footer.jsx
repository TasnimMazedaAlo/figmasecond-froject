import React from 'react'
import footer1 from './img/footer.svg'
import footer2 from './img/footer2.svg'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
       <section>
        <div className='hidden lg:block'>
        <div className='mx-24 my-24'>
            <div className='grid grid-cols-2'>
                <div className='bg-white py-7 px-7 rounded-xl text-start'>
                    <div className='text-[#0052A5] text-4xl font-semibold'>Get Your International Driver’s Permit (IDP) before you go!</div>

                    <div className='py-5'>
                   <Link to={"/Step1"}> <button className='px-5 py-3 rounded-full text-sm flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Get Started Now</span> <FaArrowRight className='text-xs' /> </button></Link>
                  </div>
                </div>
                <div><img src={footer1} alt="" /></div>
            </div>
        </div>

        </div>


        <div className='lg:hidden block'>
            <div className='md:mx-10 mx-5'>
                <div><img src={footer1} alt="" /></div>

                <div className='relative'>
                <div className='bg-white py-5 px-5 rounded-xl absolute md:top-[-150px] top-[-20px] md:left-[90px] md:w-[500px]'>
                    <div className='text-[#0052A5] md:text-4xl text-xl font-semibold'>Get Your International Driver’s Permit (IDP) before you go!</div>

                    <div className='md:py-5 pt-5 flex justify-center'>
                   <Link to={"/Step1"}> <button className='px-5 py-2 rounded-full text-sm  flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Get Started Now</span> <FaArrowRight className='text-xs' /> </button></Link>
                  </div>
                </div>
                </div>
            </div>
        </div>
       </section>


       <section>
        <div className='hidden lg:block'>
            <div className='bg-[#0052A5] h-[500px]'>
                <div className='relative'><div className='text-3xl font-semibold text-slate-100 absolute top-[140px] left-[200px]'>contact@drive internationally.com</div></div>

                <div className='relative'><img className='w-[500px] absolute left-[500px]' src={footer2} alt="" /></div>

              <Link to={"/Step1"}>  <button className='px-4 py-4 rounded-full bg-white mt-[300px] ml-[1000px]'><FaArrowUp className='text-[#0052A5] text-sm' /></button></Link>

                <div className='flex justify-center pt-5'><div className='w-[800px]'><hr/></div></div>

                <div className='flex justify-between pt-10 px-44'>
                    <div className='text-slate-100'>© Drive Internationally Inc 2024</div>

                    <div className='flex gap-4 text-slate-400'>
                        <span>Privacy & cookie policy</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>

            </div>
        </div>


         <div className='lg:hidden block'>
            <div className='bg-[#0052A5] mt-44'>
                <div className='flex justify-center'><img className='md:w-[400px] w-[200px]' src={footer2} alt="" /></div>

                <div className='md:text-2xl text-slate-100 font-semibold pt-7'>contact@driveinternationally.com</div>
                <div className='flex justify-center'><FaArrowRight className='text-slate-100 text-2xl' /></div>


                <div className='flex justify-center py-3'><div className='md:w-[500px] w-[300px]'><hr/></div></div>
                <div className='pt-7 text-slate-100'>© Drive Internationally Inc 2024</div>
                <div className='md:flex justify-between pt-10 md:px-44'>
                    <div className='text-slate-400'>Privacy & cookie policy</div>

                    <div className='flex gap-4 text-slate-400 justify-center pb-5'>
                        <span>Terms of service</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div> 
       </section>
        
        
    </div>
  )
}

export default Footer