import React from 'react'
import logo from './img/logo.svg'
import { AiOutlineCalendar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Step5 = () => {
  return (
    <div className="container mx-auto">
        <section>
            <div className="lg:mx-24 md:mx-10 mx-3 my-7">

            <div className='hidden md:block'><img src={logo} alt=""/></div>
                <div className='md:hidden block'><img className='w-[150px]' src={logo} alt=""/></div>
                <div className="md:py-7 py-3">
                    <h2 className="text-[#0052A5] text-xl md:text-3xl font-bold lg:text-center text-start">International Driver Lcense Application</h2>
                    <p className="text-slate-800  lg:text-center text-start">This form helps you to get Int driver license</p>
                </div>

                <div className='md:hidden block'>
                  <div className='bg-white rounded-2xl  my-5'>
                    <div className='flex items-center gap-1 pt-3 px-3'>
                      <button className='bg-[#3FAFEE] px-2 py-1 rounded-full text-white font-semibold text-xs'>3</button>
                      <div>Summary</div>
                    </div>

                    <div className='grid grid-cols-5 gap-2 px-3 py-3'>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                    </div>

                  </div>
                </div>




                <div className='hidden md:block'>
                <div className=" flex md:justify-between md:pr-5 items-center bg-[#DBF0FC] rounded-full font-semibold">

<div className="grid grid-cols-5 bg-[#3FAFEE] rounded-3xl ">
 <div className="lg:flex gap-2 bg-[#3FAFEE] rounded-3xl px-5 py-3  text-white">
    <div className='lg:hidden block'><button className='rounded-full border-2 text-sm px-3 py-1 '>1</button></div>
    <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full border-2 text-sm">1</div></div>
     <div>Personal Data</div>
 </div>

 <div className="lg:flex gap-2 bg-[#3FAFEE] rounded-3xl px-5 py-3  text-white">
    <div className='lg:hidden block'><button className='rounded-full border-2 text-sm px-3 py-1 '>2</button></div>
    <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full border-2 text-sm">2</div></div>
     <div>Address</div>
 </div>

 <div className="lg:flex gap-2 bg-[#3FAFEE] rounded-3xl px-5 py-3  text-white">
    <div className='lg:hidden block'><button className='rounded-full border-2 text-sm px-3 py-1 '>3</button></div>
    <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full border-2 text-sm">3</div></div>
     <div>Drives license</div>
 </div>

 
 <div className="lg:flex gap-2 bg-[#3FAFEE] rounded-3xl px-5 py-3  text-white">
    <div className='lg:hidden block'><button className='rounded-full border-2 text-sm px-3 py-1 '>4</button></div>
    <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full border-2 text-sm">4</div></div>
     <div>Passport</div>
 </div>

 
 

 <div className="lg:flex items-center lg:ml-14  gap-2 bg-white rounded-3xl px-5 py-3 shadow-md">
     <div className='lg:hidden block'><button className='rounded-full bg-[#3FAFEE] text-white text-sm px-3 py-1 '>5</button></div>
     <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full border-2 text-sm">5</div></div>
     <div>Summery</div>
 </div>
</div>

</div>
</div>




<div className='bg-white rounded-2xl md:my-14 my-7'>
    <div className='md:px-7 md:py-7 px-3 py-5'>
        <h2 className='md:text-2xl text-xl font-semibold text-start'>When would you like your IDP to start</h2>

        <div className='py-5'>
            <div className='flex gap-1 items-center rounded-xl px-7 border-2'><AiOutlineCalendar /><input className='py-4 w-full ' type="text" placeholder='IDP Start date' /></div>
            <div className='flex gap-1 items-center rounded-xl px-7 border-2 my-5'><AiOutlineCalendar /><input className='py-4 w-full ' type="text" placeholder='Deprarture date from the USA' /></div>
           <div className='flex justify-between items-center  rounded-xl px-7 border-2 py-1'>
           <div className=' text-start'><span>Vehicle Type </span><input className=' w-full ' type="text" placeholder='Select' /></div>
           <div><IoIosArrowDown /></div>
           </div>
        </div>


        <div className='text-start md:pt-7 pt-5'>
            <h2 className='md:text-2xl text-xl font-semibold'>Shipping Address</h2>
            <p>Edit sipping address?</p>


            <div className=''>
                <div className='border-2 py-2 rounded-xl px-5 my-5'><div className='text-xs  font-bold'>Address Line 1</div><input className='w-full' type="text" placeholder='New York Marriott Marquis, Broadway, New York, NY, USA' /></div>
                <div className='border-2 py-2 rounded-xl px-5'><div className='text-xs font-bold'>Address Line 2</div><input className='w-full' type="text" placeholder='1535 Broadway' /></div>



                <div className='md:grid grid-cols-4 gap-4 my-5'>
                <div className='border-2 py-2 rounded-xl px-5'><div className='text-xs font-bold'>Country</div><input className='w-full' type="text" placeholder='United States' /></div>
                <div className='border-2 py-2 rounded-xl px-5  md:my-0 my-4'><div className='text-xs font-bold'>City</div><input className='w-full' type="text" placeholder='New Work' /></div>
                <div className='border-2 py-2 rounded-xl px-5'><div className='text-xs font-bold'>State</div><input className='w-full' type="text" placeholder='NY' /></div>
                <div className='border-2 py-2 rounded-xl px-5  md:my-0 my-4'><div className='text-xs font-bold'>Zip</div><input className='w-full' type="text" placeholder='10036' /></div>

                </div>
            </div>
        </div>

        <div className='flex mx-14 justify-between pb-7 pt-5'>
                                <div className='md:hidden block'>
                                    <Link to={"/Step3"}><button className='px-4 py-4 rounded-full border-2'><FaArrowLeft /></button></Link>
                                </div>
                                <div className='hidden md:block'>
                                    <Link to={"/Step3"}><button className="border md:my-0 my-3 border-black flex items-center gap-1 px-7 py-3 rounded-full"><FaArrowLeft /><span>Previous</span></button></Link>
                                </div>

                                <div>
                                   <Link to={"/Conformation1"}><button type="submit" className="bg-[#0052A5] flex items-center gap-1 px-7 py-3 rounded-full opacity-50 text-white"><span>Next</span> <FaArrowRight /></button></Link>
                                </div>
                    </div>

    </div>
</div>




                
            </div>
        </section>

    </div>
  )
}

export default Step5