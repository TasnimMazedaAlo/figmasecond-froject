import React from 'react'
import logo from './img/logo.svg'
import { FaCamera } from "react-icons/fa";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import man7 from './img/man7.svg'
import list from './img/list.svg'


const AgainStep4 = () => {
  return (
    <div className="container mx-auto">
        <section>
            <div  className="lg:mx-24 md:mx-10 mx-3 my-7">
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
                      <div>Passport</div>
                    </div>

                    <div className='grid grid-cols-5 gap-2 px-3 py-3'>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#3FAFEE]'></div>
                      <div className='border-2 rounded-full border-[#DBF0FC]'></div>
                      <div className='border-2 rounded-full border-[#DBF0FC]'></div>
                    </div>

                  </div>
                </div>



                
                <div className='hidden md:block'>
                <div className=" flex md:justify-between md:pr-5 items-center bg-[#DBF0FC] rounded-full font-semibold">

<div className="grid grid-cols-4 bg-[#3FAFEE] rounded-3xl ">
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

 
 
 

 <div className="lg:flex items-center  gap-2 bg-white rounded-3xl px-5 py-3 shadow-md lg:ml-16">
     <div className='lg:hidden block'><button className='rounded-full bg-[#3FAFEE] text-white text-sm px-3 py-1 '>4</button></div>
     <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full border-2 text-sm">4</div></div>
     <div>Passport</div>
 </div>
</div>





 <div className="lg:flex gap-2 opacity-50 lg:px-14">
     <div className='lg:hidden block'><button className='rounded-full  text-sm text-white px-3 bg-[#0052A5] text-white py-1 '>5</button></div>
     <div className='md:hidden lg:block'> <div className="px-[10px] py-[2px] rounded-full bg-[#0052A5] text-white border-2 text-sm">5</div></div>
     <div className="text-[#0052A5]">Summary</div>
 </div>



</div>
</div>






<div>
    <div  className="bg-white rounded-xl lg:my-14 md:my-10  lg:pb-14">
        <div className="lg:py-14 md:py-7 md:px-7 py-5 px-3 lg:px-14 text-start">
       

        <div className=" rounded-xl md:my-7 my-5">
            <div className="flex justify-between ">
            <div>
                <div className="text-xl font-semibold">Passport Photo</div>
                <div className="text-[#747679]">Simple background, no hats, or glassess</div>
            </div>

            <div className='hidden lg:block'>
            <div className="flex gap-3 items-center">
                <Link to={"/TakeAPhoto"}> <button className="flex shadow-md items-center gap-1 font-bold px-5 py-2 rounded-full border border-black"><IoReload /><span>Retake</span></button></Link>
                <button className="flex shadow-md items-center gap-1 font-bold px-5 py-2 rounded-full border border-black"><MdDelete /><span>Remove</span></button>
            </div>
            </div>

            </div>




            <div className='border-2 rounded-2xl md:grid grid-cols-2 gap-5 my-10 px-7 py-7'>
                <div>
                    <div className='font-bold px-5'>Document Image</div>
                    <div><img src={man7} alt="" /></div>

                </div>

                <div>
                    <div  className='font-bold pb-5 pt-2'>Image quality</div>
                    <div><img src={list} alt="" /></div>
                </div>

            </div>
        </div>


        </div>

        <div className='flex mx-14 justify-between lg:pb-0 pb-10'>
                                <div className='md:hidden block'>
                                    <Link to={"/FitYourFace"}><button className='px-4 py-4 rounded-full border-2'><FaArrowLeft /></button></Link>
                                </div>
                                <div className='hidden md:block'>
                                    <Link to={"/FitYourFace"}><button className="border md:my-0 my-3 border-black flex items-center gap-1 px-7 py-3 rounded-full"><FaArrowLeft /><span>Previous</span></button></Link>
                                </div>

                                <div>
                                   <Link to={"/Step5"}><button type="submit" className="bg-[#0052A5] flex items-center gap-1 px-7 py-3 rounded-full opacity-50 text-white"><span>Next</span> <FaArrowRight /></button></Link>
                                </div>
                        </div>

    </div>
</div>

            </div>
        </section>
    </div>
  )
}

export default AgainStep4