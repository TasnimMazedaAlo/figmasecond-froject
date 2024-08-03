import React from 'react'
import user from './img/user.svg'
import frame5 from './img/frame5.webp'
import all1 from './img/all1.webp'
import all2 from './img/all2.webp'
import all3 from './img/all3.webp'
const WhyChooseUs = () => {
  return (
    <div>
        <section>
            <div className='lg:block hidden'>
                <div className='mt-[1000px] mx-10 '>
                    <div className='text-[#0052A5] text-sm font-semibold'>Why Choose Us</div>
                    <div className='text-3xl font-bold'>Effortless, Fast, Reliable</div>
                    <div className='text-slate-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>

                    <div className='flex gap-5 mt-14'>
                        <div className='bg-[#E2F0FF] py-7 px-7 rounded-xl w-[350px]'>
                           <div className='flex justify-center'> <img src={user} alt="" /></div>

                            <div className='text-start'>
                                <h2 className='text-2xl font-bold py-5'>Fast & Easy Online Application</h2>
                                <p className='text-xl'>Obtain your International Driving Permit in just 5 minutes with our straightforward, online process.</p>
                            </div>
                        </div>

                        <div>
                            <img src={frame5} alt="" />
                        </div>
                    </div>
                </div>
            </div>


            <div className='lg:hidden block'>
                <div className='md:mt-[650px] mx-10 '>
                   <div className='text-[#0052A5] text-xs font-semibold'>Why Choose Us</div>
                    <div className='md:text-3xl text-xl font-bold'>Effortless, Fast, Reliable</div>
                    <div className='text-slate-800 md:text-base text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>

                    <div className='md:grid md:grid-cols-2 gap-4 md:mt-14 mt-7'>
                       <div> <img src={all1} alt="" /></div>
                       <div> <img className='my-5' src={all2} alt="" /></div>
                    </div>
                </div>

            </div>


            <div className='md:block hidden'>
                <div className='mx-10 my-10'><img src={all3} alt="" /></div>
            </div>
           
        </section>
    </div>
  )
}

export default WhyChooseUs