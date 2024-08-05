import React from 'react'
import vector from './img/Vector.svg'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import frame from './img/frame.webp'
import frame2 from './img/frame2.webp'
import frame3 from './img/frame3.webp'


const Planning = () => {
  return (
    <div className="container mx-auto">
        <section>
            <div className='md:block hidden'>
                <div className='mx-10'>
                    <div className='relative'><img className='absolute lg:top-[-300px] md:top-[-100px]' src={vector} alt="" /></div>

                    <div className='grid  grid-cols-2 gap-2 absolute mt-24'>
                        <div className='text-start'>
                            <h2 className='text-5xl font-bold py-5'>Planning on <br/> driving in a foreign country?</h2>

                            <p className='md:w-[250px]'>Get Your International Driver’s Permit (IDP) before <br/> you go!</p>

                            <div className='py-7'>
                                <Link to={"/Step1"}><button className='bg-[#0052A5] flex gap-1 items-center px-5 md:py-3 py-2 text-slate-100 rounded-full'><span> Start Application</span> <FaArrowRight className='text-sm' /> </button></Link>
                            </div>
                        </div>

                        <div className='relative'>
                            <img className=' absolute w-[600px] right-[50px]' src={frame} alt="" />
                        </div>
                    </div>
                </div>

               
            </div>


            <div className='md:hidden block'>
                <div className='mx-5 text-start'>
                    <div className=' my-7'><img src={frame2} alt="" /></div>

                    <h2 className='text-2xl font-bold'>Planning on driving in a foreign country?</h2>

                    <p className='text-slate-800 py-5'>Get Your International Driver’s Permit (IDP) before you go!</p>


                    <div>
                        <img src={frame3} alt="" />
                    </div>


                    <div className='flex justify-center py-7'>
                        <Link to={"/Step1"}><button className='bg-[#0052A5] flex gap-1 items-center px-5 md:py-3 py-2 text-slate-100 rounded-full'><span> Start Application</span> <FaArrowRight className='text-sm' /> </button></Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Planning