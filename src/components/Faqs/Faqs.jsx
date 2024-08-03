import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Faqs = () => {
  return (
    <div>
      <section>
        <div>
          <div>

            <div className='lg:flex md:mx-10 md:my-24 mx-5 my-10 gap-24'>
              <div className='lg:text-start lg:w-[400px]'>
                <div className='text-[#0052A5] font-bold'>Here to help</div>
                <div className='md:text-4xl text-2xl font-semibold md:py-4 lg:mb-0 md:mb-14'>Frequently Asked Questions</div>

               <div className='hidden lg:block'>
                  <div className='text-slate-700 flex items-center gap-1 '><FaRegQuestionCircle /> <span>Need further support</span></div>
               </div>

                <div className='lg:block hidden'>
                  <button className='px-5 py-2 rounded-full bg-[#0052A5] text-white font-semibold flex items-center gap-2 my-5'> <span>Contact Us</span> <FaArrowRight className='text-xs' /> </button>
                </div>
              </div>

              <div className='w-full text-start'>
              <div className='bg-white rounded-xl mdd:px-7 px-5 md:mt-0 mt-5 py-5 '>
                <div className='flex justify-between items-center'>
                  <div className='font-bold'>What happens if I drive with  no international drivers liscense?</div>
                    <button className='px-1 py-1 rounded-full bg-[#0052A5]'><IoIosArrowUp className=' text-xs text-white' /></button>
                  </div>

                <p className='text-start py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>



            
              <div className='bg-white rounded-xl px-7 py-5 my-5'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold'>Is my money safe and secure?</div>
                    <button className='px-1 py-1 rounded-full bg-[#E2F0FF]'><IoIosArrowDown className=' text-xs text-[#0052A5]' /></button>
                  </div>

              </div>
                

              <div className='bg-white rounded-xl px-7 py-5'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold'>How can I exchange currencies with Paymint?</div>
                    <button className='px-1 py-1 rounded-full bg-[#E2F0FF]'><IoIosArrowDown className=' text-xs text-[#0052A5]' /></button>
                  </div>

              </div>
              <div className='bg-white rounded-xl px-7 py-5 my-5'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold'>How long do International transfers take?</div>
                    <button className='px-1 py-1 rounded-full bg-[#E2F0FF]'><IoIosArrowDown className=' text-xs text-[#0052A5]' /></button>
                  </div>

              </div>
              <div className='bg-white rounded-xl px-7 py-5'>
                <div className='flex justify-between items-center'>
                  <div className='font-bold'>How do I add money to my Paymint balance?</div>
                    <button className='px-1 py-1 rounded-full bg-[#E2F0FF]'><IoIosArrowDown className=' text-xs text-[#0052A5]' /></button>
                  </div>

              </div>


              <div className='lg:hidden block'>
                  <div className='text-slate-700 flex justify-center items-center gap-1 mt-5 md:text-base text-xs'><FaRegQuestionCircle /> <span>Need further support</span></div>
               </div>

                <div className='block lg:hidden'>
                 <div className='flex justify-center'> <button className='px-5 py-2 rounded-full bg-[#0052A5] text-white font-semibold flex items-center gap-2 my-5'> <span>Contact Us</span> <FaArrowRight className='text-xs' /> </button>
                 </div></div>

              
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Faqs