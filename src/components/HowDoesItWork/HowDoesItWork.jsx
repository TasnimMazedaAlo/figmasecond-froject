import React from 'react'
import vector from './img/vector.svg'
import all5 from './img/all5.webp'
import { FaArrowRight } from "react-icons/fa";
import all6 from './img/all6.svg'
import { Link } from 'react-router-dom';

const HowDoesItWork = () => {
  return (
    <div>
        <section>
            <div className='hidden md:block'>
                <div className='mx-10  my-7 bg-[#E2F0FF] rounded-xl'>
                    <div className='py-14'>
                        <div className='text-[#0052A5] font-bold text-sm'>How does it work</div>
                        <div className='text-4xl font-semibold pb-14'>3 Easy Steps</div>
                        <div className='relative'><img className='absolute ' src={vector} alt="" /></div>

                        <div className='relative mx-7'><img className='absolute ' src={all5} alt="" /></div>

                        <div className='relative'>
                       <Link to={"/Step1"}> <button className=' absolute lg:top-[520px] md:top-[250px] lg:left-[500px] md:left-[250px] px-5 py-3 rounded-full text-sm flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Start Application</span> <FaArrowRight className='text-xs' /> </button></Link>
                        </div> 

                        <div className='lg:pb-[600px] md:pb-[270px]'></div> 
                    </div>
                </div>
            </div>



            <div className='md:hidden block'>
                <div className='bg-[#E2F0FF] rounded-xl mx-5 my-5'>
                <div className='py-7'>
                    <div className='text-[#0052A5] font-bold text-sm'>How does it work</div>
                    <div className='text-2xl font-semibold '>3 Easy Steps</div>

                    <div className='pl-7 py-5'><img src={all6} alt="" /></div>

                    <div className='flex justify-center'>
                        <Link to={"/Step1"}><button className=' px-5 py-2 text-xs rounded-full text-sm flex gap-1 items-center bg-[#0052A5] text-white font-semibold'><span>Start Application</span> <FaArrowRight className='text-xs' /> </button></Link>
                    </div> 
                </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default HowDoesItWork