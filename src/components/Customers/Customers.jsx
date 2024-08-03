import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import container from './img/container.svg'
import tree from './img/tree.svg'
import container2 from './img/container2.svg'
import { Link } from 'react-router-dom';



const Customers = () => {
  return (
    <div>
        <section>
            <div className='hidden md:block'>
                <div className='mx-10 bg-[#0052A5]'>
                    <div className='flex items-center justify-between py-10 px-10'>
                        <div className='text-white font-semibold text-4xl text-start'>Trusted by Thousands <br/> of Customers </div>

                        <div className='flex gap-3'>
                            <button  className='px-5 py-5 rounded-full bg-blue-600'><FaArrowLeft className='text-blue-800' /></button>
                            <button  className='px-5 py-5 rounded-full bg-white'><FaArrowRight /></button>
                        </div>
                    </div>

                    <div><img src={container} alt="" /></div>

                    <div><img className='w-[800px] ' src={tree} alt="" /></div>

                    <div className='relative'>
                       <Link to={"/Step1"}> <button className=' absolute right-[100px] top-[-100px] flex gap-1 items-center bg-slate-100 rounded-full px-5 py-3 text-sm font-semibold'><span>Start Your Application</span> <FaArrowRight /></button></Link>
                    </div>

                </div>
               
            </div>


            <div className='md:hidden block'>
                <div className='bg-[#0052A5] mx-5 rounded-xl my-10'>
                   <div className='py-5'>
                     <div className='text-xl font-bold text-white px-3'>Trusted by Thousands of Customers </div>

                    <div><img src={container2} alt="" /></div>

                    <div className='flex justify-center'>
                       <Link to={"/Step1"}> <button className=' flex gap-1 items-center bg-slate-100 rounded-full px-5 py-3 text-sm font-semibold'><span>Start Your Application</span> <FaArrowRight /></button></Link>
                    </div>

                    <div><img className='' src={tree} alt="" /></div>
                   </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Customers