import React from 'react'
import logo from './img/logo.svg'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Step2 = () => {

    function submitForm(e) {
        e.preventDefault();
    }
    
  return (
    <div className="container mx-auto">

<section>
        <div>
            <div className="lg:mx-24 md:mx-10 my-7 mx-3">
            <div className='hidden md:block'><img src={logo} alt=""/></div>
            <div className='md:hidden block'><img className='w-[150px]' src={logo} alt=""/></div>
                <div className="md:py-7 py-3">
                    <h2 className="text-[#0052A5] text-xl md:text-3xl font-bold lg:text-center text-start">International Driver Lcense Application</h2>
                    <p className="text-slate-800  lg:text-center text-start">This form helps you to get Int driver license</p>
                </div>

                <div className='md:hidden block'>
                  <div className='bg-white rounded-2xl my-5'>
                    <div className='flex items-center gap-1 pt-3 px-3'>
                      <button className='bg-[#3FAFEE] px-2 py-1 rounded-full text-white font-semibold text-xs'>2</button>
                      <div>Address</div>
                    </div>

                    <div className='grid grid-cols-5 gap-2 px-3 py-3'>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#DBF0FC]'></div>
                      <div className='border-2 rounded-full border-[#DBF0FC]'></div>
                      <div className='border-2 rounded-full border-[#DBF0FC]'></div>
                    </div>

                  </div>
                </div>
                <div className='hidden md:block'>
                <div className=" flex md:justify-between md:pr-5 items-center bg-[#DBF0FC] rounded-full font-semibold">

<div className="grid grid-cols-2 bg-[#3FAFEE] rounded-3xl ">
 <div className="lg:flex gap-2 bg-[#3FAFEE] rounded-3xl px-5 py-3  text-white">
    <div className='lg:hidden block'><button className='rounded-full border-2 text-sm px-3 py-1 '>1</button></div>
    <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full border-2 text-sm">1</div></div>
     <div>Personal Data</div>
 </div>

 <div className="lg:flex items-center  gap-2 bg-white rounded-3xl px-5 py-3 shadow-md">
     <div className='lg:hidden block'><button className='rounded-full bg-[#3FAFEE] text-white text-sm px-3 py-1 '>2</button></div>
     <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full border-2 text-sm">2</div></div>
     <div>Address</div>
 </div>
</div>


<div className="lg:flex gap-2 opacity-50 lg:px-14">
     <div className='lg:hidden block'><button className='rounded-full text-sm px-3 py-1  bg-[#0052A5] text-white'>3</button></div>
     <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full bg-[#0052A5] text-white border-2 text-sm">3</div></div>
     <div className="text-[#0052A5]">Drives license</div>
 </div>

 <div className="lg:flex gap-2 opacity-50 lg:px-14 ">
     <div className='lg:hidden block'><button className='rounded-full  text-sm px-3 py-1 bg-[#0052A5] text-white'>4</button></div>
     <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full bg-[#0052A5] text-white border-2 text-sm">4</div></div>
     <div className="text-[#0052A5]">Passport</div>
 </div>

 <div className="lg:flex gap-2 opacity-50 lg:px-14">
     <div className='lg:hidden block'><button className='rounded-full  text-sm text-white px-3 bg-[#0052A5] text-white py-1 '>5</button></div>
     <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full bg-[#0052A5] text-white border-2 text-sm">5</div></div>
     <div className="text-[#0052A5]">Summary</div>
 </div>



</div>
                </div>





                <div>
                    <div className="bg-white rounded-2xl my-7 md:my-14">
                       <div className="md:py-14 md:px-14 py-5 px-5">
                        <div className="text-2xl font-bold md:text-center text-start">Address Information</div>
                        <div className="text-[#747679] md:text-center text-start">Where would you like to ship Your International Drivers Lcense?</div>

                        <div >
                            <form onSubmit={submitForm}>
                                <input type="text" placeholder="Address Line 1"  className="border-2  md:my-0 my-3 px-5 py-3 rounded-xl md:my-7 w-full"/>
                                <input type="text" placeholder="Address Line 2"  className="border-2 px-5 py-3 rounded-xl  w-full"/>
                               
                                <div className="md:grid md:grid-cols-4 gap-5 md:py-10">
                                    <input type="text" placeholder="Country" className="border-2 md:w-auto w-full md:my-0 my-3 px-5 py-3 rounded-xl"/>
                                    <input type="text" placeholder="City" className="border-2  md:w-auto w-full px-5 py-3 rounded-xl"/>
                                    <input type="text" placeholder="State" className="border-2  md:w-auto w-full md:my-0 my-3 px-5 py-3 rounded-xl"/>
                                    <input type="text" placeholder="Zip" className="border-2  md:w-auto w-full px-5 py-3 rounded-xl"/>  
                                </div>

                               
                               <div className="flex justify-between items-center md:pt-0 pt-5">
                               <div className='md:hidden block'>
                                    <Link to={"/Step1"}><button className='px-4 py-4 rounded-full border-2'><FaArrowLeft /></button></Link>
                                </div>
                                <div className='hidden md:block'>
                                    <Link to={"/Step1"}><button className="border md:my-0 my-3 border-black flex items-center gap-1 px-7 py-3 rounded-full"><FaArrowLeft /><span>Previous</span></button></Link>
                                </div>

                                <div>
                                   <Link to={"/Step3"}><button type="submit" className="bg-[#0052A5] flex items-center gap-1 px-7 py-3 rounded-full opacity-50 text-white"><span>Next</span> <FaArrowRight /></button></Link>
                                </div>
                               </div>
                               
                            </form>
                        </div>
                       </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </div>
  )
}

export default Step2