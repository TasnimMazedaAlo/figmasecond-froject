import React from 'react'
import { TbWorld } from "react-icons/tb";
import country from './img/country.svg'
import country2 from './img/country2.svg'
import { IoIosArrowDown } from "react-icons/io";
import apply from './img/apply.svg'
import apply2 from './img/apply2.svg'
import { Link } from 'react-router-dom';

const CountryRequirements = () => {
  return (
    <div>
    
      <section>
        <div className='lg:block hidden'>
          <div className='text-start md:my-14 bg-sky-100 mx-10 pb-10 rounded-xl'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='py-10 px-10'>
                    <div className='flex gap-1 items-center text-[#0052A5] font-bold'><TbWorld /> <span>Country Requirements</span></div>
                    <div className='text-4xl font-bold pb-7'>Do I need an IDP?</div>
                    <p className='text-slate-800'>Many countries require an IDP to drive legally. Check the list below to see if your destination require one</p>

                    <div className='bg-white py-7 px-7 rounded-xl mt-7'>
                      <h2 className='font-bold pb-3'>Where are you traveling to?</h2>
                      <div className='flex justify-between items-center border-2 rounded-xl'>
                        <div className='flex items-center'><img className='w-14 h-14' src={country} alt="" /> <span className='font-semibold'>Spain</span></div>
                        <div className='pr-5'><IoIosArrowDown /></div>
                      </div>
                      <div><img className='my-3' src={apply} alt="" /></div>
                     <Link to={"/Step1"}><img src={apply2} alt="" /></Link>
                    </div>
                </div>

                <div className='py-7'><img src={country2} alt="" /></div>
            </div>
           

          </div>
        </div>



        <div className='lg:hidden block md:mx-0 mx-5'>

          <div className='md:hidden block '>
            <div className='mx-5 my-5'><img src={country2} alt="" /></div>
          </div>
          <div className='bg-sky-100 rounded-xl md:py-10 md:px-10 md:mx-10'>
          <div className='md:grid grid-cols-2 gap-4 md:py-0 py-5'>
               <div className='md:text-start'>
                <div className='flex gap-1 items-center md:justify-start justify-center text-[#0052A5] font-bold md:text-base text-sm'><TbWorld /> <span>Country Requirements</span></div>
                <div className='md:text-3xl text-2xl font-bold md:pb-4 pb-2'>Do I need an IDP?</div>
                <p className='text-slate-800 md:text-base text-sm'>Many countries require an IDP to drive legally. Check the list below to see if your destination require one</p>

            </div>

            <div className='hidden md:block'><img src={country2} alt="" /></div>
          </div>


          <div className='bg-white py-7 px-7 rounded-xl md:mx-10 md:mt-10 mx-5'>
                      <h2 className='font-bold pb-3'>Where are you traveling to?</h2>
                      <div className='flex justify-between items-center border-2 rounded-xl'>
                        <div className='flex items-center'><img className='w-14 h-14' src={country} alt="" /> <span className='font-semibold'>Spain</span></div>
                        <div className='pr-5'><IoIosArrowDown /></div>
                      </div>
                      <div><img className='my-3' src={apply} alt="" /></div>
                   <Link to={"/Step1"}><img src={apply2} alt="" /></Link>
                    </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CountryRequirements