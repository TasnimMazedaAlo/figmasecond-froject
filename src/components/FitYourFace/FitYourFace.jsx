import React from 'react'
import take from './img/take.svg'
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FitYourFace = () => {
  return (
    <div>
        <section>
            <div className='w-full h-[800px] bg-[#484848]'>
               <div className='py-7'>
             <Link to={"/AgainStep4"}> <span className='flex justify-end px-14'> <FaTimes className='text-white' /></span></Link>
               <button className='md:px-[100px] md:py-[180px] px-[50px] py-[120px] rounded-full border-2 border-white bg-slate-900'><button className='text-white bg-[#484848] px-3 py-2 rounded-3xl md:mt-24 mt-14 md:text-base text-xs'>Fit your face into the frame</button></button>
              <div className='flex justify-center my-7'> <img className='w-14' src={take} alt="" /></div>
               </div>
            </div>
        </section>
    </div>
  )
}

export default FitYourFace