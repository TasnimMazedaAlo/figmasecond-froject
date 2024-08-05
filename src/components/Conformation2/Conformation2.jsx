import React from 'react'
import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Conformation2 = () => {
  return (
    <div className="container mx-auto">
        <section>
            <div className="lg:mx-24 md:mx-10 mx-3 my-7">
            <button className='bg-[#84D252] px-5 py-5 rounded-full '><FaCheck className='text-white' /></button>
                <h2 className='md:text-2xl text-xl font-bold text-[#0052A5] pt-4'>You have successfully completed form</h2>
                <p className='text-slate-800 md:text-base text-sm'>Select your payment plan</p>



               <div className='hidden md:block'>
               <div className='grid grid-cols-3 text-slate-800 pt-14'>
                    <div>TYPE</div>
                    <div>PRICE</div>
                    <div>BUY</div>

                </div>

                <div className='grid grid-cols-3 bg-white rounded-2xl my-5 py-4 flex items-center font-bold'>
                    <div>Yearly</div>
                    <div>$70.00</div>
                    <div className='flex justify-center '><button className='px-7  py-3 rounded-full text-sm flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Subscribe</span> <FaArrowRight className='text-xs' /> </button></div>

                </div>

                <div className='grid grid-cols-3 bg-white rounded-2xl my-5 py-4 flex items-center font-bold'>
                    <div>Auto renew</div>
                    <div>$60.00</div>
                    <div className='flex justify-center '><button className='px-7  py-3 rounded-full text-sm flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Subscribe</span> <FaArrowRight className='text-xs' /> </button></div>

                </div>
               </div>




               <div className='md:hidden block'>
               <div className='bg-white rounded-2xl py-5 my-7'>
               <div className='grid grid-cols-2 '>
                    <div>Type</div>
                    <div className='text-slate-700'>Price</div>

                </div>

                <div className='grid grid-cols-2'>
                    <div  className='font-bold'>Yearly</div>
                    <div className='font-bold'>$70.00</div>
                    

                </div>
                <div className='flex justify-center pt-5 pb-10'><button className='px-7  py-3 rounded-full text-sm flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Subscribe</span> <FaArrowRight className='text-xs' /> </button></div>


               </div>

               <div className='bg-white rounded-2xl py-5'>
               <div className='grid grid-cols-2 mt-10'>
                    <div>Type</div>
                    <div className='text-slate-700'>Price</div>

                </div>

                <div className='grid grid-cols-2'>
                    <div  className='font-bold'>Auto renew</div>
                    <div className='font-bold'>$60.00</div>
                    

                </div>
                <div className='flex justify-center pt-5 '><button className='px-7  py-3 rounded-full text-sm flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Subscribe</span> <FaArrowRight className='text-xs' /> </button></div>

               </div>

               </div>


            </div>
        </section>
    </div>
  )
}

export default Conformation2